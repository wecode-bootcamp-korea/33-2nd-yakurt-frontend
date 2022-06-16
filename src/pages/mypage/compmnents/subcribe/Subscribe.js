import React from 'react';
import styled, { css } from 'styled-components';
import { useState, useEffect } from 'react';
import SubscribeItem from './SubscribeItem';

function Subscribe() {
  const [SubscribeList, setSubscribeList] = useState([]);
  const SubscribeEmpty = SubscribeList.length === 0;
  useEffect(() => {
    fetch('http://10.58.5.236:8000/subscriptions', {
      method: 'GET',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.XlUzgcSXSZv6CWzSs0ZL_IcaqbukQgMAWMXbbAwOoDs',
      },
    })
      .then(res => res.json())
      .then(data => {
        setSubscribeList(data.results);
      });
  }, []);
  return (
    <MySubscribe>
      <SubscribeHeadBox>
        <SubscribeTextBox>
          <span className="SubscribeText">정기구독</span>
          <CurrentInfo>
            <Purchasing>진행중</Purchasing>
            <SubscriptionNumber active={SubscribeList.length}>
              {SubscribeList.length}
            </SubscriptionNumber>
          </CurrentInfo>
        </SubscribeTextBox>
      </SubscribeHeadBox>
      {!SubscribeEmpty ? (
        <SubscribeItem
          SubscribeList={SubscribeList}
          setSubscribeList={setSubscribeList}
        />
      ) : (
        <SubscribeEmptyUi>
          <NoSub>내역이 없습니다</NoSub>
        </SubscribeEmptyUi>
      )}
    </MySubscribe>
  );
}

export default Subscribe;
const MySubscribe = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.75rem;
  width: 46.875rem;
  margin-left: 1.25rem;
`;
const SubscribeHeadBox = styled.div`
  width: 46.875rem;
  height: 3.125rem;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: column;
`;
const SubscribeTextBox = styled.div`
  width: 46.875rem;
  height: 3.125rem;
  padding-top: 0.625rem;
  display: flex;

  .SubscribeText {
    font-size: 1.563rem;
    font-weight: 700;
  }
`;
const CurrentInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 3.125rem;
  margin-top: 0.125rem;
`;
const Purchasing = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
`;
const SubscriptionNumber = styled.span`
  font-size: 1.438rem;
  margin-left: 0.625rem;
  font-weight: 700;

  ${({ active }) =>
    active &&
    css`
      color: lightgreen;
    `}
`;

const SubscribeEmptyUi = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3.75rem;
`;
const NoSub = styled.span`
  color: gray;
  font-size: 1.25rem;
  opacity: 0.5;
`;
