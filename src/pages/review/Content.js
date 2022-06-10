import React from 'react';
import styled from 'styled-components';

const Content = () => {
  return (
    <>
      <Top>
        <Preview>
          <span>박**</span> (오메가3, 비타민B, 밀크씨슬)
        </Preview>
        <Period>2022.05.27 / 정기구독 18개월</Period>
      </Top>

      <Image />

      <Bottom>
        <Text>
          약큐르트 최고!! 항상 약쿠르트 덕분에 영양제 안 까먹고 잘 섭취하고
          있어요!
        </Text>
        <Button>더보기</Button>
      </Bottom>
    </>
  );
};

const Top = styled.div`
  padding: 0 30px;
`;

const Preview = styled.p`
  margin: 0 auto;
  font-size: 1.1rem;

  span {
    font-weight: bold;
  }
`;

const Period = styled.p`
  margin: 20px 0;
  text-align: right;
  font-size: 0.95rem;
`;

const Image = styled.img.attrs({
  src: 'https://velog.velcdn.com/images/eunnb05/post/f6bd0ea5-fd41-403b-abe1-ad2a03710959/image.jpg',
})`
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
