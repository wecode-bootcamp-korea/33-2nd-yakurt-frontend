import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import MainCard from './MainCard';
import MainContent from './MainContent';

const MainReview = ({ userReview, setUserReview }) => {
  const navigate = useNavigate();
  const params = useParams();

  const handlePrevReview = () => {
    fetch(
      `http://10.58.5.236:8000/subscriptions/review/${parseInt(params.id) - 1}`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        setUserReview(data.results);
        navigate(`/subscriptions/reviews/${parseInt(params.id) - 1}`);
      });
  };

  const handleNextReview = () => {
    fetch(
      `http://10.58.5.236:8000/subscriptions/review/${parseInt(params.id) + 1}`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        setUserReview(data.results);
        navigate(`/subscriptions/reviews/${parseInt(params.id) + 1}`);
      });
  };

  return (
    <Section>
      <MainCard>
        <MainContent userReview={userReview} />
      </MainCard>

      <More>
        <Button disabled={userReview <= 1} onClick={handlePrevReview}>
          이전 후기
        </Button>
        <ListButton
          onClick={() => {
            navigate(-1);
          }}
        >
          목록으로
        </ListButton>
        <Button onClick={handleNextReview}>다음 후기</Button>
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
