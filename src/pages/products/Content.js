import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CartMessage from './CartMessage';
import { icon } from '../../hooks/useProduct';
const Content = ({
  productList,
  message,
  handleAddCart,
  index,
  productName,
}) => {
  const navigate = useNavigate();
  const [addToCart, setAddToCart] = useState(false);
  const [isClick, setIsClick] = useState(false);

  const handleIsClick = () => {
    setIsClick(prev => !prev);
  };

  const goToDetail = () => {
    navigate(`/products/${productList.id}`);
  };

  return (
    <>
      <Division>
        <div>
          <Description>{productList?.title}</Description>
          <Name>{productList?.name}</Name>
        </div>
        <Image src={productList?.image_url} />
      </Division>

      <Effect>
        {(productList?.product_effect).map((item, index) => (
          <EffectIcon key={index}>{icon[item]}</EffectIcon>
        ))}
      </Effect>

      <SecondDivision>
        <Information>{productList?.information}</Information>
        <Detail>
          <Time>{productList?.time}</Time>
          <Price>{Math.trunc(productList?.price).toLocaleString()}원</Price>
        </Detail>
      </SecondDivision>

      <Link onClick={goToDetail}>더보기</Link>

      <Button
        onClick={() => handleAddCart(index, setAddToCart, handleIsClick)}
        disabled={addToCart}
      >
        {addToCart ? '장바구니 추가됨' : '+ 장바구니 담기'}
      </Button>
      {isClick && <CartMessage productList={productName} />}
    </>
  );
};

const Division = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;

const Description = styled.p`
  margin-bottom: 8px;
  font-size: 1.2rem;
`;

const Name = styled.h2`
  font-size: 1.7rem;
  font-weight: 700;
`;

const Image = styled.img.attrs(props => ({
  src: props.src,
}))`
  width: 8rem;
  height: 6rem;
`;

const Effect = styled.div`
  display: flex;
  height: 2rem;
  margin: 1rem 0;
`;

const EffectIcon = styled.div`
  margin-right: 0.8rem;
  color: #2d3436;
  font-size: 2rem;
`;

const SecondDivision = styled(Division)`
  height: 110px;
`;

const Information = styled.ul`
  width: 290px;
  line-height: 25px;
  font-size: 1rem;
  word-break: keep-all;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

const Time = styled(Description)`
  text-align: right;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Price = styled.p`
  text-align: right;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Link = styled.button`
  position: absolute;
  bottom: 130px;
  padding-bottom: 0.25rem;
  border-bottom: 1.5px solid #000000;
  font-size: 1.1rem;
  font-weight: 700;
`;

const Button = styled.button`
  position: absolute;
  bottom: 40px;
  left: 110px;
  width: 300px;
  height: 70px;
  padding: 15px 30px;
  border: none;
  border-radius: 50px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  background-color: ${props => (props.addToCart ? '#ced6e0' : '#ffffff')};
  color: ${props => (props.addToCart ? '#ffffff' : 'rgb(240, 86, 59)')};
  font-size: 1.2rem;
  font-weight: bold;
`;

export default Content;
