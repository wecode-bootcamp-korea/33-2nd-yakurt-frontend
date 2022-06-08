import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CartHeader from '../../components/Cart/CartHeader';
import ProductList from '../../components/Cart/ProductList';
import Total from '../../components/Cart/Total';
import Payment from '../../components/Cart/Payment';

const Cart = () => {
  const [itemListValue, setItemListValue] = useState([]);
  useEffect(() => {
    fetch('data/productList.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        setItemListValue(result);
      });
  }, []);

  return (
    <CartWrapper>
      <Content>
        <CartHeader />
        <ProductLists1>
          <h3>정기구독 제품</h3>
        </ProductLists1>
        {itemListValue.map(itemlist => (
          <ProductList itemlist={itemlist} key={itemlist.id} />
        ))}
        <ProductLists1>
          <h3>1회 구매 제품</h3>
        </ProductLists1>
        {itemListValue.map(itemlist => (
          <ProductList itemlist={itemlist} key={itemlist.id} />
        ))}
        <Total />
        <Payment />
      </Content>
    </CartWrapper>
  );
};

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1024px;
  height: 200vh;
  background-color: white;
  margin: 0 auto;
  padding: 0 137px;
  color: black;
`;

const Content = styled.div`
  h3 {
    padding-bottom: 1.3rem;
    border-bottom: 1px solid #e0e0e0;
    font-size: 1.2rem;
    font-weight: 700;
    margin-top: 5rem;
  }
`;
const ProductLists1 = styled(Content)``;

export default Cart;
