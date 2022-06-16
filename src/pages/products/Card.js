import React from 'react';
import styled from 'styled-components';

const Card = ({ children }) => {
  const randomColor = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));
  const r = randomColor(0, 225);
  const g = randomColor(0, 225);
  const b = randomColor(0, 225);
  const a = 0.4;
  const rgba = `rgb(${r},${g},${b},${a})`;

  return <Container bgColor={rgba}>{children}</Container>;
};

const Container = styled.div`
  position: relative;
  width: 480px;
  height: 450px;
  margin-bottom: 50px;
  padding: 50px 40px;
  border: none;
  border-radius: 10px;
  background-color: ${props => props.bgColor};
  color: #000000;
  box-shadow: 2px 4px 5px rgba(209, 216, 224, 0.3);
`;

export default Card;
