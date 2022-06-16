import React from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';

const CartMessage = ({ productList }) => {
  return (
    <Container>
      <Icon>
        <FaCheck />
      </Icon>
      <Message>{productList}을 장바구니에 담았습니다.</Message>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  display: flex;
  align-items: center;
  width: 25rem;
  height: 4rem;
  padding: 1rem 1.2rem;
  border-radius: 10px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  background-color: #2ecc71;
  opacity: 0.7;
`;

const Icon = styled.div`
  width: 5rem;
  height: 5rem;
  padding: 1.8rem 1rem;
  color: #ffffff;
`;

const Message = styled.h3`
  font-size: 1rem;
  color: #ffffff;
`;

export default CartMessage;
