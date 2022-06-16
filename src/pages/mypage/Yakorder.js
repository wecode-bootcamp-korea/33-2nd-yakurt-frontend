import React from 'react';
import styled from 'styled-components';

function Yakorder({ MyData }) {
  const numberString = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  return (
    <OrderListBox>
      {MyData && (
        <OrderedList key={MyData.order_number}>
          <OrderedNumberBox>
            <DateandNumber>
              <Date>{MyData.order_date.slice(0, 10)}</Date>
              <SerialNumber>{MyData.order_number.slice(0, 8)}</SerialNumber>
            </DateandNumber>
            <OrderStatus>결제완료</OrderStatus>
          </OrderedNumberBox>
          <OrderedInfo>
            <OrderNameBox>
              <SubInfo>정기구독</SubInfo>
              {MyData.product.map((orderProduct, i) =>
                i === 0 ? (
                  <span>
                    {orderProduct.order_item} 외{MyData.product.length - 1} 개
                  </span>
                ) : null
              )}
            </OrderNameBox>

            <OrderPrice>{numberString(MyData.total_bill)}원</OrderPrice>
          </OrderedInfo>
        </OrderedList>
      )}
    </OrderListBox>
  );
}

export default Yakorder;

const OrderListBox = styled.div`
  width: 46.875rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const OrderedList = styled.div`
  width: 46.875rem;
  height: 6.25rem;
  font-size: 1.25rem;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: column;

  justify-content: center;
`;
const OrderedNumberBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.938rem;
  color: gray;
`;
const OrderedInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
const DateandNumber = styled.div`
  margin-left: 0.625rem;
`;
const Date = styled.span`
  margin-right: 1.875rem;
`;
const SerialNumber = styled.span`
  font-size: 1rem;
`;
const OrderStatus = styled.span`
  font-size: 1rem;
`;
const OrderNameBox = styled.div`
  margin-left: 0.625rem;
`;
const SubInfo = styled.span`
  margin-right: 1.875rem;
  color: coral;
  font-weight: 500;
`;
const OrderPrice = styled.span`
  font-weight: 700;
`;
