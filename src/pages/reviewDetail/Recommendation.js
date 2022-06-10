import React from 'react';
import styled from 'styled-components';
import RecommendationCard from './RecommendationCard';
import RecommendationContent from './RecommendationContent';

const Recommendation = () => {
  return (
    <Aside>
      <Title>박**님의 약쿠르트 영양제 6종</Title>
      <RecommendationCard>
        <RecommendationContent />
      </RecommendationCard>
    </Aside>
  );
};

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
`;

export default Recommendation;
