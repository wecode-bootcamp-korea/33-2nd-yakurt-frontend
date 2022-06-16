import React from 'react';
import styled from 'styled-components';

function PaymentOrder({ order_item, quantity, price, img }) {
  return (
    <Payment>
      <div>
        <img src={img} alt={order_item} />
        <span>{order_item}</span>
      </div>
      <span>{quantity}</span>
      <span>
        {Math.round(price)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        원
      </span>
    </Payment>
  );
}

export default PaymentOrder;
const Payment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 10;
  margin-top: 1.2rem;
  padding-bottom: 1.2rem;
  border-bottom: 1px solid lightgrey;
  div {
    display: flex;
    align-items: center;
    flex: 4;
    img {
      width: 5rem;
      height: 4rem;
    }
    span {
      margin-left: 1rem;
    }
  }
  span {
    margin-left: 6rem;
  }
`;
