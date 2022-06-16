import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Aside from './Aside';
import Yak from './compmnents/Yak';
import Servey from './compmnents/servey/Servey';
import Subscribe from './compmnents/subcribe/Subscribe';
import Order from './compmnents/order/Order';
import OrderDetail from './compmnents/order/OrderDetail';

function Mypage() {
  return (
    <MypageView>
      <MypageWrap>
        <Aside />
        <Routes>
          <Route path="/" element={<Yak />} />
          <Route path="/servey" element={<Servey />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order/:id" element={<OrderDetail />} />
        </Routes>
      </MypageWrap>
    </MypageView>
  );
}

export default Mypage;

const MypageView = styled.section`
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: 50rem;
  width: 100vw;
`;
const MypageWrap = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 1.25rem;
`;
