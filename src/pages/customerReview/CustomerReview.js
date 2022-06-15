import React from 'react';
import Content from './Content';
import { useExit } from '../../hooks/useCustomerReview';
import styled from 'styled-components';
import { HiOutlineX } from 'react-icons/hi';

const CustomerReview = () => {
  const { showForm, handleClose } = useExit();

  return (
    <div>
      {{ showForm } ? (
        <FormWrapper showForm={showForm}>
          <Button onClick={handleClose}>
            <HiOutlineX />
          </Button>
          <Content showForm={showForm} />
        </FormWrapper>
      ) : (
        ''
      )}
    </div>
  );
};

const FormWrapper = styled.div`
  position: relative;
  top: 10rem;
  left: 30rem;
  width: 40rem;
  height: 40rem;
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
