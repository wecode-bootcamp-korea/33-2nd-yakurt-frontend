import React from 'react';
import styled from 'styled-components';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';

const CartHeader = () => {
  return (
    <MyCart>
      <p>장바구니</p>
      <AddItem>
        <FirstBtn>
          <button>
            <FaPlus /> 제품추가
          </button>
        </FirstBtn>
        <SecondBtn>
          <button>
            <FaTrashAlt />
          </button>
        </SecondBtn>
      </AddItem>
    </MyCart>
  );
};

const MyCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6rem;
  font-size: 1.5rem;
`;

const AddItem = styled.div`
  display: flex;
`;

const FirstBtn = styled.button`
  width: 7rem;
  height: 3rem;
  border: 1px solid #e0e0e0;
  border-radius: 2rem;
  padding: 0.8rem;
  margin: 0.3rem;
`;

const SecondBtn = styled(FirstBtn)`
  width: 3rem;
  height: 3rem;
  border-radius: 5rem;
`;

export default CartHeader;
