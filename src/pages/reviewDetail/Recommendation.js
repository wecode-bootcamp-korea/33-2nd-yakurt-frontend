import React from 'react';
import styled from 'styled-components';
import RecommendationCard from './RecommendationCard';
import RecommendationContent from './RecommendationContent';

const Recommendation = ({ userReview }) => {
  return (
    userReview && (
      <Aside>
        <Title>
          {userReview.nick_name}님의 약쿠르트 영양제{' '}
          {userReview.products?.length}종
        </Title>
        {userReview.products?.map(product => (
          <RecommendationCard key={product.product_id}>
            <RecommendationContent product={product} />
          </RecommendationCard>
        ))}
      </Aside>
    )
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
