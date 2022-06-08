import React from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

const Content = () => {
  return (
    <>
      <Division>
        <div>
          <Description>편안하고 상쾌한 하루를 위한</Description>
          <Name>발효효소 베이직</Name>
        </div>
        <Image />
      </Division>

      <SecondDivision>
        <List>
          <li>국제 특허 발효법 사용</li>
          <li>국제 특허 발효법 사용</li>
          <li>국제 특허 발효법 사용</li>
        </List>
        <Detail>
          <Effect>30일분</Effect>
          <Price>18,500원</Price>
        </Detail>
      </SecondDivision>

      <Link>더보기</Link>

      <Button>
        <FaPlus /> 장바구니 담기
      </Button>
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
  font-size: 1.8rem;
  font-weight: 700;
`;

const Image = styled.img.attrs({
  src: 'https://velog.velcdn.com/images/eunnb05/post/4fd9756f-f5b8-4abe-a763-4507eb816a7a/image.jpg',
})`
  width: 80px;
  height: 50px;
`;

const SecondDivision = styled(Division)`
  height: 100px;
  margin-top: 50px;
`;

const List = styled.ul`
  margin-left: 20px;
  list-style: circle;
  line-height: 25px;
  font-size: 1.1rem;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

const Effect = styled(Description)`
  text-align: right;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Price = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Link = styled.button`
  margin: 15px 20px;
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
  box-shadow: 2px 3px 8px #000000;
  background-color: #ffffff;
  font-size: 1.2rem;
  font-weight: bold;
`;

export default Content;
