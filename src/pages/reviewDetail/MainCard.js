import React from 'react';
import styled from 'styled-components';

const MainCard = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  height: 50rem;
  border-radius: 10px;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
`;

export default MainCard;
