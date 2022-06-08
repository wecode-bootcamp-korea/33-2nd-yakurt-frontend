import React from 'react';
import styled from 'styled-components';

const Card = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  position: relative;
  width: 528px;
  height: 450px;
  margin-bottom: 50px;
  padding: 50px 40px;
  border: none;
  border-radius: 10px;
  background-color: #fab1a0;
  opacity: 0.4;
  box-shadow: 2px 5px 0 0 rgba(209, 216, 224, 0.3);
`;

export default Card;
