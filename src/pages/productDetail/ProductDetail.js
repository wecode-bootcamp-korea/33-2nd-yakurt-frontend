import React from 'react';
import styled from 'styled-components';
import Effect from './Effect';
import About from './About';
import Delivery from './Delivery';
import { BiCommentDots } from 'react-icons/bi';

const ProductDetail = () => {
  return (
    <>
      <Header>
        <Container>
          <Description>높은 혈압 감소를 위한</Description>
          <Title>약쿠르트 코엔자임 Q10</Title>
          <Box>
            <Effect />
          </Box>
          <Information>
            약쿠르트 코엔자임Q10은 국제표준인증을 획득한 원료를 사용하여,
            <br />
            우수한 품질관리를 통해 만들었습니다.
          </Information>
          <SecondBox>
            <Time>30일분</Time>
            <Price>15,700원</Price>
          </SecondBox>
          <Button>장바구니 담기</Button>
        </Container>
      </Header>

      <Divide>
        <Icon>
          <BiCommentDots />
        </Icon>
        <ReviewBtn>14개의 후기 보러가기</ReviewBtn>
        <Image />
        <InfoTitle>믿을 수 있는 원료</InfoTitle>
        <Info>
          아사이베리추출분말, 빌베리 추출물, 포도씨앗유 등 부원료 함유
        </Info>
      </Divide>

      <Extra>
        <About />
        <Delivery />
      </Extra>
    </>
  );
};

const Header = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(https://velog.velcdn.com/images/eunnb05/post/7519e443-0657-4ae0-8fa3-e4fb57c95824/image.jpg);
  background-position: center;
  background-size: cover;
`;

const Container = styled.div`
  width: 65%;
  margin: 0 auto;
  padding: 200px 0;
`;

const Description = styled.h1`
  font-size: 2.8rem;
  line-height: 3.2rem;
`;

const Title = styled(Description)`
  font-weight: 800;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  margin: 40px 0;
`;

const Information = styled.p`
  font-size: 1.2rem;
  line-height: 1.7rem;
`;

const SecondBox = styled(Box)`
  justify-content: space-between;
  align-items: center;
  width: 10rem;
  margin: 25px 0;
`;

const Time = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
`;

const Price = styled(Time)`
  border-left: 2px solid #000000;
  padding-left: 1rem;
`;

const Button = styled.button`
  width: 17rem;
  height: 5rem;
  margin: 5rem 0;
  border-radius: 50px;
  box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.3);
  background-color: rgb(240, 86, 59);
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: 700;
`;

const Divide = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8rem 0;
  text-align: center;
`;

const Icon = styled.div`
  margin-bottom: 0.8rem;
  color: #8395a7;
  font-size: 20px;
`;

const ReviewBtn = styled.button`
  width: 10.5rem;
  margin: 0 auto;
  border-bottom: 1.5px solid #8395a7;
  color: #8395a7;
  font-size: 1.2rem;
`;

const Image = styled.img.attrs({
  src: 'https://velog.velcdn.com/images/eunnb05/post/317147c7-8336-4c30-b1a2-b3df016a029a/image.jpg',
})`
  margin: 10rem auto 5rem auto;
  width: 60rem;
  height: 35rem;
`;

const InfoTitle = styled.h1`
  color: rgb(240, 86, 59);
  font-size: 2.2rem;
  font-weight: 700;
`;

const Info = styled.p`
  margin: 2rem 0;
  font-size: 1.2rem;
`;

const Extra = styled.section`
  background-color: #f2f2f2;
`;

export default ProductDetail;
