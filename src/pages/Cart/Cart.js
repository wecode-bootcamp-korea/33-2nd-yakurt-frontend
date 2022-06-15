import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CartHeader from '../../components/Cart/CartHeader';
import ProductList from '../../components/Cart/ProductList';
import Payment from '../../components/Cart/Payment';
import EmptyCart from './EmptyCart';

const Cart = () => {
  const [itemListValue, setItemListValue] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [check, setCheck] = useState([]);
  const navigate = useNavigate();

  const clear = () => {
    setItemListValue();
  };

  const handleClickOrder = () => {
    const query = check
      .map(checkedItem => {
        return `cart_id=${checkedItem.id}`;
      })
      .join('&');

    fetch(`url/?${query}`, {
      method: 'PATCH',
    });

    navigate('/order');
  };

  const onCheck = (e, itemList) => {
    if (e.target.checked) {
      setCheck([...check, itemList]);
    } else {
      setCheck(check.filter(item => item.id !== itemList.id));
    }
  };

  useEffect(() => {
    fetch('data/productList.json')
      .then(res => res.json())
      .then(result => {
        setItemListValue(result);
      });
  }, []);

  return itemListValue ? (
    <CartWrapper>
      <Content>
        <CartHeader clear={clear} />
        <h3>정기구독 제품</h3>
        {itemListValue.map(itemlist => (
          <ProductList
            itemList={itemlist}
            key={itemlist.id}
            setCheck={setCheck}
            check={check}
            setTotalPrice={setTotalPrice}
            onCheck={onCheck}
          />
        ))}
        <TotalAmount>
          <p>총 결제금액</p>
          <p>{totalPrice.toLocaleString()}원</p>
        </TotalAmount>
        <Payment handleClickOrder={handleClickOrder} />
      </Content>
    </CartWrapper>
  ) : (
    <EmptyCart />
  );
};

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1024px;
  height: 150vh;
  margin: 0 auto;
  padding: 0 137px;
  color: black;
`;

const Content = styled.div`
  h3 {
    padding-bottom: 1.3rem;
    border-bottom: 0.063px solid #e0e0e0;
    font-size: 1.2rem;
    font-weight: 700;
    margin-top: 5rem;
  }
`;

const TotalAmount = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 0.12rem solid grey;
  margin-bottom: 5rem;
  padding-top: 2rem;
  font-size: 1.5rem;
  font-weight: 800;
`;

export default Cart;
