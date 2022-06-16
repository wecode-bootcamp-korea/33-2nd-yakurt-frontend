import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function OrderItem({ OrderList }) {
  const navigate = useNavigate();

  const goToDetail = id => {
    navigate(`/mypage/order/${id}`, { state: OrderList });
  };
  const numberString = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <OrderListBox>
      {OrderList &&
        OrderList.map(order => (
          <OrderedList
            onClick={() => goToDetail(order.order_number)}
            key={order.order_number}
          >
            <OrderedNumberBox>
              <DateandNumber>
                <Date>{order.order_date.slice(0, 10)}</Date>
                <SerialNumber>{order.order_number.slice(0, 8)}</SerialNumber>
              </DateandNumber>
              <OrderStatus>결제완료</OrderStatus>
            </OrderedNumberBox>
            <OrderedInfo>
              <OrderNameBox>
                <SubInfo>정기구독</SubInfo>
                {order.product.map((orderProduct, i) =>
                  i === 0 ? (
                    <span>
                      {orderProduct.order_item} 외{order.product.length - 1} 개
                    </span>
                  ) : null
                )}
              </OrderNameBox>

              <OrderPrice>{numberString(order.total_bill)}원</OrderPrice>
            </OrderedInfo>
          </OrderedList>
        ))}
    </OrderListBox>
  );
}

export default OrderItem;
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
