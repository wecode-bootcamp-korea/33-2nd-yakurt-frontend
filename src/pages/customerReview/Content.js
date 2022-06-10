import React from 'react';
import styled, { css } from 'styled-components';
import { FaPlus } from 'react-icons/fa';

const Content = () => {
  return (
    <>
      <Header>
        <span>천은별</span>님의 소중한 리뷰를 남겨주세요!
      </Header>

      <Product>
        <ProductsLabel>구매한 제품 :</ProductsLabel>
        <ProductsInput />
      </Product>

      <Detail>
        <DateLabel>날짜 :</DateLabel>
        <DateInput />
        <SubscriptionLabel>정기구독 :</SubscriptionLabel>
        <SubscriptionInput />
        <Months>개월</Months>
      </Detail>

      <ImageInput />
      <ReviewInput />
      <Button>등록</Button>
    </>
  );
};

const Header = styled.h1`
  font-size: 1.3rem;
  font-weight: 700;

  span {
    color: #7bed9f;
  }
`;

const Product = styled.div`
  margin: 2rem 0;
`;

const ProductsLabel = styled.label.attrs({
  htmlFor: 'products',
})`
  margin-right: 0.5rem;
  font-size: 1.1rem;
  font-weight: bold;
`;

const ProductsInput = styled.input.attrs({
  type: 'text',
  id: 'products',
  name: 'products',
  value: '오메가3, 비타민B, 밀크씨슬',
})`
  width: 20rem;
  height: 2.2rem;
  padding: 0.5rem;
  border: 2px solid #bdc3c7;
  border-radius: 10px;
  font-size: 0.9rem;
  &:active {
    border: 2px solid rgb(240, 86, 59);
  }
`;

const Detail = styled(Product)`
  width: 100%;
`;

const DateLabel = styled(ProductsLabel)`
  ${({ htmlFor }) => htmlFor === 'date' && css``}
`;

const DateInput = styled(ProductsInput).attrs({
  type: 'date',
  id: 'date',
  name: 'date',
  value: '2022/06/10',
})`
  width: 10rem;
  margin-right: 5rem;
`;

const SubscriptionLabel = styled(ProductsLabel)`
  ${({ htmlFor }) => htmlFor === 'subscription' && css``}
`;

const SubscriptionInput = styled(ProductsInput).attrs({
  type: 'text',
  id: 'subscription',
  name: 'subscription',
  value: '17',
})`
  width: 3rem;
  text-align: center;
`;

const Months = styled.p`
  display: inline-block;
  margin-left: 0.5rem;
`;

const ImageInput = styled.input.attrs({
  type: 'image',
  placeholder: <FaPlus />,
})`
  width: 100%;
  height: 10rem;
  border: 2px solid #bdc3c7;
  border-radius: 10px;
  font-size: 0.9rem;
  &:active {
    border: 2px solid rgb(240, 86, 59);
  }
`;

const ReviewInput = styled(ProductsInput).attrs({
  type: 'text',
  minlength: '20',
  maxlength: '200',
  placeholder: '상품 리뷰를 작성해주세요.',
  value: '',
})`
  width: 100%;
  height: 15rem;
  margin: 1.5rem 0;
`;

const Button = styled.button.attrs({
  type: 'submit',
})`
  width: 15rem;
  height: 5rem;
  margin: 0 25%;
  padding: 2rem;
  border-radius: 50px;
  background-color: rgb(240, 86, 59);
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 700;
`;

export default Content;
