import React from 'react';
import styled from 'styled-components';
import MainReview from './MainReview';
import Recommendation from './Recommendation';
import { useCustomerReview } from '../../hooks/useCustomerReview';

const ReviewDetail = () => {
  const { userReview, setUserReview } = useCustomerReview();

  return (
    <ReviewDetailBody>
      <Header>
        <Title>고객리뷰</Title>
        <Description>
          약쿠르트를 이용해주신 고객님들의 리얼후기 확인하세요!
        </Description>
      </Header>

      <Section>
        <MainReview userReview={userReview} setUserReview={setUserReview} />
        <Recommendation userReview={userReview} />
      </Section>
    </ReviewDetailBody>
  );
};

const ReviewDetailBody = styled.body`
  background-color: #f2f2f2;
`;

const Header = styled.div`
  width: 65%;
  margin: 0 auto;
`;

const Title = styled.h1`
  padding-top: 150px;
  font-size: 2rem;
  font-weight: regular;
`;

const Description = styled.p`
  margin: 60px auto;
  color: #747d8c;
  font-size: 1.2rem;
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 2rem;
  width: 65%;
  margin: 0 auto;
  padding-bottom: 20rem;
`;

export default ReviewDetail;
