import React from 'react';
import styled from 'styled-components';
import MainCard from './MainCard';
import MainContent from './MainContent';

const MainReview = () => {
  return (
    <Section>
      <MainCard>
        <MainContent />
      </MainCard>

      <More>
        <Button>이전 후기</Button>
        <ListButton>목록으로</ListButton>
        <Button>다음 후기</Button>
      </More>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const More = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2.5rem;
`;

const Button = styled.button`
  width: 8rem;
  height: 4rem;
  border-radius: 50px;
  background-color: #ffffff;
  color: #576574;
  font-size: 1.2rem;
  font-weight: 700;
`;

const ListButton = styled(Button)`
  width: 18rem;
  background-color: rgb(240, 86, 59);
  color: #ffffff;
`;

export default MainReview;
