import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Content from './Content';

const Review = () => {
  return (
    <ReviewBody>
      <Header>
        <Title>고객리뷰</Title>
        <Description>
          약쿠르트를 이용해주신 고객님들의 리얼후기 <span>6,325건</span>을
          확인하세요!
        </Description>
      </Header>

      <Section>
        <Card>
          <Content />
        </Card>
      </Section>
    </ReviewBody>
  );
};

const ReviewBody = styled.body`
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

  span {
    color: #7bed9f;
    font-weight: bold;
  }
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 80px;
  margin: 0 auto;
  padding-bottom: 200px;
  width: 65%;
  min-height: auto;
`;

export default Review;
