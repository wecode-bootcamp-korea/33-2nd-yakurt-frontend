import React from 'react';
import styled from 'styled-components';
import { FaPhone } from 'react-icons/fa';
import { TbTruckDelivery, TbTruckReturn } from 'react-icons/tb';

const Delivery = () => {
  return (
    <Section>
      <Title>배송 및 반품 교환 안내</Title>
      <Grid>
        {DELIVERY_LIST.map(list => (
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

const DELIVERY_LIST = [
  {
    id: 1,
    image: <FaPhone />,
    description: '01.2345.6789',
    text: '상담시간 (평일)<br/> AM 10:00 ~ 12:00<br /> PM 14:00 ~ 17:00',
  },
  {
    id: 2,
    image: <TbTruckReturn />,
    description: '교환/반품',
    text: '"약쿠르트"는 좋은 제품을 제공하기 위해 노력하며 소비자 보호 규정을 준수합니다.',
  },
  {
    id: 3,
    image: <TbTruckDelivery />,
    description: '당일출고',
    text: '평일 오전 결제완료 시 당일 출고 가능합니다.',
  },
];

const Section = styled.section`
  width: 65%;
  margin: 0 auto;
`;

const Title = styled.h1`
  padding-top: 4rem;
  margin-bottom: 6rem;
  color: rgb(240, 86, 59);
  font-size: 1.5rem;
  font-weight: 700;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.8rem;
  padding-bottom: 10rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 18rem;
  height: 10rem;
`;

const Image = styled.div`
  padding: 2rem;
  border-radius: 50%;
  background-color: #ffffff;
  width: 7rem;
  height: 6rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  height: 7rem;
  width: 12rem;
  margin-left: 1rem;
`;

const Description = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Text = styled.p`
  font-size: 0.8rem;
  line-height: 1.3rem;
  word-break: keep-all;
`;

export default Delivery;
