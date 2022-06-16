import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from './Card';
import Content from './Content';

const Review = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch('http://10.58.5.236:8000/subscriptions/reviews')
      .then(response => response.json())
      .then(data => {
        setReview(data.results);
      });
  }, []);

  const fetchData = () => {
    fetch('http://10.58.5.236:8000/subscriptions/reviews')
      .then(res => res.json())
      .then(data => setReview([...review, ...data.results]));
  };

  return (
    <ReviewBody>
      <Header>
        <Title>고객리뷰</Title>
        <Description>
          약쿠르트를 이용해주신 고객님들의 리얼후기 <span>742건</span>을
          확인하세요!
        </Description>
      </Header>

      <Section dataLength={review.length} data next={fetchData} hasMore={true}>
        {review &&
          review.map(reviewList => (
            <Card key={reviewList.id}>
              <Content reviewList={reviewList} />
            </Card>
          ))}
      </Section>
    </ReviewBody>
  );
};

const ReviewBody = styled.section`
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

const Section = styled(InfiniteScroll)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 80px;
  margin: 0 auto;
  padding-bottom: 200px;
  width: 70%;
  min-height: auto;
`;

export default Review;
