import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import ServeyItem from './ServeyItem';

function Servey() {
  const [serveyList, setserveyList] = useState([]);
  const ServeyEmpty = serveyList.length === 0;
  useEffect(() => {
    fetch('http://10.58.5.236:8000/survey', {
      method: 'GET',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.XlUzgcSXSZv6CWzSs0ZL_IcaqbukQgMAWMXbbAwOoDs',
      },
    })
      .then(res => res.json())
      .then(data => {
        setserveyList(data.results);
      });
  }, []);
  return (
    <MyServey>
      <ServeyHeadBox>
        <ServeyTextBox>
          <span className="ServeyText">건강 설문 관리</span>
        </ServeyTextBox>
      </ServeyHeadBox>
      {!ServeyEmpty ? (
        <ServeyItem serveyList={serveyList} setserveyList={setserveyList} />
      ) : (
        <Empty>
          <NoItem>내역이 없습니다</NoItem>
        </Empty>
      )}
    </MyServey>
  );
}

export default Servey;
const MyServey = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.75rem;
  width: 46.875rem;
  margin-left: 1.25rem;
  height: 6.25rem;
`;
const ServeyHeadBox = styled.div`
  width: 46.875rem;
  height: 3.125rem;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: column;
`;
const ServeyTextBox = styled.div`
  width: 46.875rem;
  height: 3.125rem;
  padding-top: 0.625;

  .ServeyText {
    font-size: 1.563rem;
    font-weight: 700;
  }
`;
const Empty = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3.75rem;
`;
const NoItem = styled.span`
  color: gray;
  font-size: 1.25rem;
  opacity: 0.5;
`;
