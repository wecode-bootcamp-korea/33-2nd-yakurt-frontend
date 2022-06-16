import React from 'react';
import styled from 'styled-components';

const Card = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  position: relative;
  width: 310px;
  height: 615px;
  padding: 35px 0;
  border: none;
  border-radius: 10px;
  box-shadow: 4px 8px 5px #dfe4ea;
  background-color: #ffffff;
`;

export default Card;
