import React from 'react';
import styled from 'styled-components';
import Content from './Content';
import { HiOutlineX } from 'react-icons/hi';

const CustomerReview = () => {
  return (
    <Form>
      <Button>
        <HiOutlineX />
      </Button>
      <Content />
    </Form>
  );
};

const Form = styled.div.attrs({
  type: 'form',
})`
  position: relative;
  top: 10rem;
  left: 30rem;
  width: 40rem;
  height: 50rem;
  padding: 4rem 3rem;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.2);
`;

const Button = styled.button.attrs({
  type: 'button',
})`
  position: absolute;
  top: -2rem;
  right: -2rem;
  padding: 1.2rem;
  border-radius: 50%;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  line-height: 50%;
  font-size: 1.8rem;
  font-weight: bold;
`;

export default CustomerReview;
