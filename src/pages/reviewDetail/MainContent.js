import React from 'react';
import styled from 'styled-components';

const MainContent = () => {
  return (
    <>
      <Head>
        <Header>
          <span>박**</span> 프로바이오틱스, 오메가3, 마그네슘 비타민D, 비타민C,
          루테인
        </Header>
        <Time>2022.05.06 / 정기구독 17개월</Time>
      </Head>
      <Image />
      <Comment>
        처음엔 어떻게 다 챙겨먹나 걱정이였는데 매일 카톡으로 섭취 체크 알림이
        오고 매달 자동으로 배송이 오니 알아서 잘 챙겨먹게 되는 것 같아요!
        건강해지는 느낌!!
      </Comment>
    </>
  );
};

const Head = styled.div`
  padding: 3rem 2rem 1rem 2rem;
`;

const Header = styled.h2`
  font-size: 1.1rem;
  margin-bottom: 1.2rem;

  span {
    font-weight: bold;
  }
`;

const Time = styled.p`
  font-size: 0.9rem;
  text-align: right;
`;

const Image = styled.img.attrs({
  src: 'https://velog.velcdn.com/images/eunnb05/post/ebb3bcce-237a-4c9a-8592-e39fb8fe1dc8/image.jpg',
})`
  width: 100%;
  height: 35rem;
  object-fit: cover;
`;

const Comment = styled.p`
  padding: 1.5rem 2rem;
  font-size: 0.9rem;
  line-height: 1.5rem;
`;

export default MainContent;
