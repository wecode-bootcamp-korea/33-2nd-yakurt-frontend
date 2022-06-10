import React from 'react';
import styled from 'styled-components';

const Card = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  position: relative;
  width: 350px;
  height: 650px;
  padding: 40px 0;
  border: none;
  border-radius: 10px;
  box-shadow: 4px 8px 5px #dfe4ea;
  background-color: #ffffff;
`;

export default Card;
