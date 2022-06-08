import React from 'react';
import styled from 'styled-components';

const Payment = () => {
  return <Button>정기구독 시작하기</Button>;
};

const Button = styled.button`
  display: block;
  margin: auto;
  padding: 2rem;
  width: 328px;
  height: 80px;
  border: 1px solid red;
  border-radius: 3rem;
  background-color: #ff5c35;
  color: white;
  font-size: 1rem;
  font-weight: 800;
  line-height: 15px;
  box-shadow: 0 5px 4px 0 rgb(0 0 0 / 15%);
`;

export default Payment;
