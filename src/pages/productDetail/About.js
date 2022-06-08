import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <Section>
      <Title>왜 약쿠르트인가?!</Title>
      <Grid>
        {ABOUT_LIST.map(list => (
          <Container key={list.id}>
            <Image src={list.image} />
            <Content>
              <Description>{list.description}</Description>
              <Text>{list.text}</Text>
            </Content>
          </Container>
        ))}
      </Grid>
    </Section>
  );
};

const Section = styled.section`
  width: 65%;
  margin: 0 auto;
`;

const Title = styled.h1`
  padding-top: 10rem;
  margin-bottom: 6rem;
  color: rgb(240, 86, 59);
  font-size: 1.5rem;
  font-weight: 700;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.5rem;
  padding-bottom: 10rem;
`;

const Container = styled.div`
  position: relative;
  width: 16.5rem;
  height: 28rem;
  background-color: #ffffff;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  object-fit: cover;
`;

const Content = styled.div`
  position: absolute;
  top: 57%;
  padding: 0 1.8rem;
`;

const Description = styled.h2`
  font-size: 1.3rem;
  font-weight: bold;
`;

const Text = styled.p`
  padding-top: 1rem;
  color: #576574;
  font-size: 1.1rem;
  line-height: 1.7rem;
  word-break: keep-all;
`;

const ABOUT_LIST = [
  {
    id: 1,
    image:
      'https://velog.velcdn.com/images/eunnb05/post/3ffe409e-2975-4151-8ea0-aaa5e950ea2c/image.jpg',
    description: '전문가들이 참여한 제품',
    text: '나에게 꼭 필요한 영양성분을 섭취할 수 있도록 몸에 대해 가장 잘 알고 있는 국내 약학 박사들이 만들었습니다.',
  },
  {
    id: 2,
    image:
      'https://velog.velcdn.com/images/eunnb05/post/d417e2db-cbcb-4bef-88d0-be60aad49c36/image.jpg',
    description: '맞춤 영양 성분 추천',
    text: '축적된 데이터와 검증된 전문적인 질문으로 우리에게 필요한 영양성분을 찾아 추천합니다.',
  },
  {
    id: 3,
    image:
      'https://velog.velcdn.com/images/eunnb05/post/17e0fa13-5373-42cd-9edb-7dc9804715b1/image.jpg',
    description: '30일 정기배송',
    text: '영양성분을 꾸준하게 섭취할 수 있도록 나에게 맞는 영양제를 30일마다 배송해 드립니다.',
  },
  {
    id: 4,
    image:
      'https://velog.velcdn.com/images/eunnb05/post/1529d922-c110-4ea3-a65f-b91233d4fd52/image.jpg',
    description: '개인별 섭취관리',
    text: '영양제는 구매한다고 끝이 아닙니다. 영양제를 꾸준히 섭취할 수 있도록 약쿠르트가 도와드립니다.',
  },
];

export default About;
