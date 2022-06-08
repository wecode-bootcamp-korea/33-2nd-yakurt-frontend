import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Content from './Content';

const Products = () => {
  return (
    <>
      <Header>
        <Title>
          건강한 삶을 위한 <br />
          약쿠르트 연구와 도전은 계속됩니다.
        </Title>
      </Header>

      <Section>
        <Card>
          <Content />
        </Card>
      </Section>

      <SectionHeader>
        <Heading>1회 구매 제품</Heading>
        <Description>
          1회 구매 제품은 정기구독으로 신청하셔도 매번 배송되지 않고 1회만
          배속됩니다.
        </Description>
      </SectionHeader>

      <Section>
        <Card>
          <Content />
        </Card>
      </Section>
    </>
  );
};

const Header = styled.div`
  width: 100%;
  height: 70vh;
  background-image: url(https://velog.velcdn.com/images/eunnb05/post/551efb71-3557-458e-80ee-c64d40e7e206/image.jpg);
  background-position: 50% 75%;
  background-size: cover;
`;

const Title = styled.h1`
  padding: 12% 20%;
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 50px;
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 10px;
  column-gap: 30px;
  width: 65%;
  height: auto;
  margin: 0 auto;
  padding: 80px 0;
`;

const SectionHeader = styled.div`
  text-align: center;
`;

const Heading = styled.h1`
  margin-bottom: 30px;
  font-size: 2rem;
  font-weight: 700;
`;

const Description = styled.p`
  margin-bottom: 20px;
  font-size: 1.2rem;
`;

export default Products;
