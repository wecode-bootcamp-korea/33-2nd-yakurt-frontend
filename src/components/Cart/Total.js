import React from 'react';
import styled from 'styled-components';

const Total = () => {
  return (
    <>
      <TotalSub>
        <p>정기구독 제품합계</p>
        <p>18,500원</p>
      </TotalSub>
      <TotalSub2>
        <p>1회구매 제품합계</p>
        <p>18,500원</p>
      </TotalSub2>

      <TotalAmount>
        <p>총 결제금액</p>
        <p>50,000원</p>
      </TotalAmount>
    </>
  );
};

const TotalSub = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 0.12rem solid grey;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-top: 2rem;
  p {
    font-size: 1rem;
  }
`;

const TotalSub2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  p {
    font-size: 1rem;
  }
`;

const TotalAmount = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 0.12rem solid grey;
  margin-bottom: 8rem;
  padding-top: 2rem;
  font-size: 1.5rem;
  font-weight: 800;
`;

export default Total;
