import React from 'react';
import styled from 'styled-components';

const RecommendationCard = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  height: 12rem;
  margin: 1.5rem 0;
  padding: 2.2rem 2rem;
  border-radius: 10px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
`;

export default RecommendationCard;
