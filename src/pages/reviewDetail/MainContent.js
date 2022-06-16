import React from 'react';
import styled from 'styled-components';

const MainContent = ({ userReview }) => {
  console.log(userReview);
  return (
    <>
      <Head>
        <Header>
          <span>{userReview?.nick_name}</span>
          {userReview.products
            ?.map(item => {
              return item.product_name;
            })
            .join(', ')}
        </Header>
        <Time>{userReview.create_at}</Time>
      </Head>
      <Image />
      <Comment>{userReview.content}</Comment>
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
