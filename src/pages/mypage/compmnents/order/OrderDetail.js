import styled from 'styled-components/macro';
import { useState } from 'react';
import PaymentOrder from './PaymentOrder';
import { useLocation } from 'react-router-dom';

function OrderDetail() {
  const location = useLocation();
  const [orderData] = useState(location.state[0]);

  const numberString = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <OrderWrapper>
      <OrderContent>
        <OrderText>
          <span>주문 내역</span> 및 <span>상품정보</span>
        </OrderText>
        <OrderListTitle>
          주문내역
          <hr />
          <OrderListTitleWrapper>
            <span>상품정보</span>
            <span>수량</span>
            <span>주문가격</span>
          </OrderListTitleWrapper>
          <hr />
        </OrderListTitle>
        {orderData &&
          orderData.product.map(order => (
            <PaymentOrder key={order.order_item} {...order} />
          ))}
        <TotalPrice>
          <span>제품합계</span>
          <TotalBill>{numberString(orderData.total_bill)}원</TotalBill>
        </TotalPrice>
        <Ship>
          <span>배송비</span>
          <span>2,500원</span>
        </Ship>
        <SaleBox>
          <span>정기구독 세일</span>
          <span>-{numberString(orderData.total_bill * 0.1 + 2500)}원</span>
        </SaleBox>
        <Total>
          <h2>총 결제금액</h2>
          <h2>
            {numberString(
              orderData.total_bill - (orderData.total_bill * 0.1 + 2500)
            )}{' '}
            원
          </h2>
        </Total>
        <ShipmentInfoBox>
          <ShipmentInfo>
            <span>배송정보</span>
          </ShipmentInfo>
          <ShipmentTextBox>
            <Info>
              <span>다음 결제의 배송정보를 수정할 수 있습니다.</span>
              <span>완료된 결제의 배송지 변경을 상담원에게 문의하세요</span>
              <span>
                완료된 결제는 배송상태에 따라 비용이 발생할 수 있습니다
              </span>
            </Info>
          </ShipmentTextBox>
        </ShipmentInfoBox>
        <NameBox>
          <span>받는사람</span>
          <span>{orderData?.user_name}</span>
        </NameBox>
        <PhoneNumber>
          <span>연락처</span>
          <span>{orderData?.user_phonenumber}</span>
        </PhoneNumber>
        <Address>
          <span>배송지</span>
          <span>{orderData?.user_address}</span>
        </Address>
        <AddressPlease>
          <span>배송요청사항</span>
          <span>{orderData.delivery_message}</span>
        </AddressPlease>
        <PaymentInfoBox>
          <PaymentInfo>
            <span>결제정보</span>
          </PaymentInfo>
          <CardInfo>
            <span>카드정보</span>
            <span>{orderData?.payment_method}</span>
          </CardInfo>
          <CardInfo>
            <span>결제일자</span>
            <span>{orderData?.order_date.slice(0, 10)}</span>
          </CardInfo>
        </PaymentInfoBox>
      </OrderContent>
    </OrderWrapper>
  );
}

export default OrderDetail;
const OrderWrapper = styled.section`
  display: flex;
  width: 46.875rem;
  padding-top: 1rem;
  background-color: #fff;
  justify-content: center;
  height: 50vh;
  margin-left: 20px;
`;
const OrderContent = styled.div`
  width: 46.875rem;
`;
const OrderText = styled.h2`
  margin-bottom: 3rem;
  font-size: 1.5rem;
  span {
    font-weight: 550;
  }
`;
const OrderListTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  hr {
    margin-top: 1.3rem;
    margin-bottom: 1.3rem;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  span {
    font-size: 1rem;
    &:first-of-type {
      flex: 3;
    }
    &:last-of-type {
      margin-left: 5rem;
    }
  }
`;
const OrderListTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
`;
const TotalBill = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
`;
const Ship = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
`;
const SaleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 0 2rem;
  background-color: rgb(247, 247, 247);
  font-weight: 600;
`;
const Total = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-top: 2px solid black;
  border-bottom: 7px solid #fafafa;
  h2 {
    font-size: 1.4rem;
    font-weight: 600;
    margin-left: 1rem;
    &:last-of-type {
      color: rgb(240, 86, 59);
      margin-right: 1.2rem;
      font-size: 1.4rem;
    }
  }
`;
const ShipmentInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ShipmentInfo = styled.div`
  font-size: 1.2rem;
  margin-top: 1rem;
  padding-top: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;
const ShipmentTextBox = styled.div`
  background-color: rgb(247, 247, 247);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 0.9rem;
  margin-right: 10rem;
  margin-bottom: 1rem;

  span {
    margin-top: 1rem;
  }
`;
const NameBox = styled.div`
  margin-top: 1.2rem;
  display: flex;
  justify-content: flex-start;
  color: grey;
  font-size: 1rem;
  span {
    &:last-of-type {
      color: black;
      margin-left: 4rem;
    }
  }
`;
const PhoneNumber = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-start;
  color: grey;
  font-size: 1rem;
  span {
    &:last-of-type {
      color: black;
      margin-left: 5rem;
    }
  }
`;
const Address = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-start;
  color: grey;
  font-size: 1rem;
  span {
    &:last-of-type {
      color: black;
      margin-left: 5rem;
    }
  }
`;
const AddressPlease = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-start;
  color: grey;
  font-size: 1rem;
  padding-bottom: 2rem;
  border-bottom: 7px solid #fafafa;
  span {
    &:last-of-type {
      color: black;
      margin-left: 2.5rem;
    }
  }
`;
const PaymentInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 3rem;
`;
const PaymentInfo = styled.div`
  font-size: 1.2rem;
  margin-top: 1rem;
  padding-top: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;
const CardInfo = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-start;
  color: grey;
  font-size: 1rem;
  padding-bottom: 10px;
  span {
    &:last-of-type {
      color: black;
      margin-left: 5rem;
    }
  }
`;
