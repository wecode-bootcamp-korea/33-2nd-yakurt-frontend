import React, { useState } from 'react';
import styled from 'styled-components';
import Effect from './Effect';
import About from './About';
import Delivery from './Delivery';
import Card from '../review/Card';
import Content from '../review/Content';
import CartMessage from '../products/CartMessage';
import { useReview } from '../../hooks/useReview';
import { useProductDetail, useProduct } from '../../hooks/useProduct';
import { BiCommentDots } from 'react-icons/bi';

const ProductDetail = () => {
  const { review, visible, showMoreReviews } = useReview();
  const productDetail = useProductDetail();
  const { message, handleAddCart } = useProduct();
  const [addToCart, setAddToCart] = useState(false);

  return (
    <>
      <Header>
        <Container>
          <Description>{productDetail[0]?.title}</Description>
          <Title>{productDetail[0]?.name}</Title>
          <Box>
            <Effect productDetail={productDetail} />
          </Box>
          <Information>{productDetail[0]?.description}</Information>
          <SecondBox>
            <Time>{productDetail[0]?.time}</Time>
            <Price>
              {Math.trunc(productDetail[0]?.price).toLocaleString()}원
            </Price>
          </SecondBox>
          <Button
            onClick={index => handleAddCart(index, setAddToCart)}
            disabled={addToCart}
          >
            장바구니 담기
          </Button>
          {message && <CartMessage productList={productDetail[0]} />}
        </Container>
      </Header>

      <Divide>
        <Icon>
          <BiCommentDots />
        </Icon>
        <ReviewBtn>
          {productDetail[0]?.review_count}개의 후기 보러가기
        </ReviewBtn>
        <Image image={productDetail[0]?.image_url} />
        <InfoTitle>믿을 수 있는 원료</InfoTitle>
        <Info>{productDetail[0]?.information}</Info>
      </Divide>

      <Extra>
        <About />
        <Delivery />
      </Extra>

      <Review>
        <ReviewTitle>고객 후기</ReviewTitle>
        <ReviewSection>
          {review &&
            review.slice(0, visible).map(reviewList => (
              <Card key={reviewList.id}>
                <Content reviewList={reviewList} />
              </Card>
            ))}
        </ReviewSection>
        <MoreReviewsBtn onClick={showMoreReviews}>더 보기</MoreReviewsBtn>
      </Review>
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
  font-size: 2.9rem;
  line-height: 3.5rem;
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
  width: 11rem;
  margin: 0 auto;
  padding-bottom: 0.5rem;
  border-bottom: 1.5px solid #8395a7;
  color: #8395a7;
  font-size: 1.2rem;
`;

const Image = styled.img.attrs(props => ({
  src: props.image,
}))`
  margin: 2rem auto 1rem auto;
  width: 45rem;
  height: 30rem;
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

const Review = styled(Extra)`
  display: flex;
  flex-direction: column;
`;

const ReviewTitle = styled.h1`
  margin-bottom: 6rem;
  padding-left: 16.5rem;
  color: rgb(240, 86, 59);
  font-size: 1.5rem;
  font-weight: 700;
`;

const ReviewSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 15px;
  row-gap: 60px;
  margin: 0 auto;

  width: 65%;
  min-height: auto;
`;

const MoreReviewsBtn = styled.button`
  width: 65%;
  height: 3.5rem;
  margin: 5rem auto;
  padding: 2rem auto;
  border-radius: 10px;
  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  font-size: 1.2rem;
  font-weight: 700;
`;

export default ProductDetail;
