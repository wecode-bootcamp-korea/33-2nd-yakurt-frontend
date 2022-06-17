import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import OrderItem from './OrderItem';
import { IP } from '../../../../hooks/Fetch';

function Order() {
  const [OrderList, setOrderList] = useState([]);
  const OrderListEmpty = OrderList.length === 0;

  useEffect(() => {
    fetch(`${IP}orders`, {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setOrderList(data.results);
      });
  }, []);
  return (
    <Myorder>
      <OrderHeadBox>
        <OrderTextBox>
          <OrederText>결제관리</OrederText>
        </OrderTextBox>
      </OrderHeadBox>
      {!OrderListEmpty ? (
        <OrderItem
          OrderList={OrderList}
          setOrderList={setOrderList}
          id={OrderList[0]?.order_number}
        />
      ) : (
        <OrderEmptyUi>
          <NoOrder>내역이 없습니다</NoOrder>
        </OrderEmptyUi>
      )}
    </Myorder>
  );
}

export default Order;

const Myorder = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.75rem;
  width: 46.875rem;
  margin-left: 20px;
`;
const OrderHeadBox = styled.div`
  width: 46.875rem;
  height: 3.125rem;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: column;
`;
const OrderTextBox = styled.div`
  width: 46.875rem;
  height: 3.125;
  padding-top: 0.625rem;
  display: flex;
`;

const OrederText = styled.span`
  font-size: 1.563rem;
  font-weight: 700;
`;
const OrderEmptyUi = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3.75rem;
`;
const NoOrder = styled.span`
  color: gray;
  font-size: 1.25rem;
  opacity: 0.5;
`;
