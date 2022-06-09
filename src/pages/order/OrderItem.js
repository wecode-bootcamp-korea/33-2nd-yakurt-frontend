import styled from 'styled-components';

const OrderItem = ({ title, imgUrl, amount, price }) => {
  return (
    <OrderItems>
      <div>
        <img src={imgUrl} alt={title} />
        <span>{title}</span>
      </div>
      <span>{amount}</span>
      <span>{price.toLocaleString()}원</span>
    </OrderItems>
  );
};

export default OrderItem;

const OrderItems = styled.div`
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
