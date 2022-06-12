import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import CartHeader from '../../components/Cart/CartHeader';

const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <Background>
      <CartHeader />
      <MiddleArea>
        <MiddleOfTop>
          <Icon>
            <FaShoppingCart />
          </Icon>
          <h3>장바구니에 추가된 제품이 없습니다.</h3>
        </MiddleOfTop>
        <span>
          몇가지 건강설문을 통해 <br />
          나만을 위한 영양성분을 찾아보세요.
        </span>
        <Search>
          <button onClick={() => navigate('/survey')}>
            나만의 영양성분 찾기
          </button>
        </Search>
      </MiddleArea>
    </Background>
  );
};

const Background = styled.div`
  display: flex;
  flex-direction: column;
  width: 1024px;
  height: 120vh;
  margin: 0 auto;
  padding: 0 137px;
`;

const MiddleArea = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
  font-size: 1rem;
  span {
    text-align: center;
    line-height: 1.2rem;
  }
`;

const MiddleOfTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  h3 {
    font-size: 1.3rem;
    font-weight: 800;
  }
`;

const Icon = styled.div`
  margin-bottom: 3rem;
  font-size: 4rem;
`;

const Search = styled.button`
  button {
    display: block;
    margin-top: 4rem;
    padding: 2rem;
    width: 18rem;
    height: 3rem;
    border: 1px solid red;
    border-radius: 3rem;
    background-color: #ff5c35;
    color: white;
    font-size: 1.2rem;
    font-weight: 800;
    line-height: 0.2rem;
    box-shadow: 0 5px 4px 0 rgb(0 0 0 / 15%);
  }
`;

export default EmptyCart;
