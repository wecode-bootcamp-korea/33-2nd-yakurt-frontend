import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Content = ({ reviewList }) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/subscriptions/reviews/${reviewList.id}`);
  };

  return (
    <>
      <Top>
        <Preview>
          <span>{reviewList?.nick_name.slice(0, 1)}**</span> (
          {reviewList?.products})
        </Preview>
        <Period>
          {reviewList?.create_at} / 정기구독 {reviewList?.subscriptions_months}
          개월
        </Period>
      </Top>
      <Image src={reviewList?.image_url} />
      <Bottom>
        <Text>{reviewList?.content}</Text>
        <Button onClick={goToDetail}>더보기</Button>
      </Bottom>
    </>
  );
};

const Top = styled.div`
  padding: 0 30px;
`;

const Preview = styled.p`
  margin: 0 auto;
  font-size: 1rem;
  line-height: 1.4rem;

  span {
    font-weight: bold;
  }
`;

const Period = styled.p`
  margin: 20px 0;
  text-align: right;
  font-size: 0.95rem;
`;

const Image = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
`;

const Bottom = styled.div`
  padding: 0 30px;
`;

const Text = styled(Period)`
  text-align: left;
  line-height: 20px;
`;

const Button = styled.button`
  position: absolute;
  bottom: 40px;
  border-bottom: 1.5px solid #ff4757;
  color: #ff4757;
  font-size: 1rem;
  font-weight: bold;
`;

export default Content;
