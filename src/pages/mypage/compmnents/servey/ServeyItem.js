import React from 'react';
import styled from 'styled-components';

function ServeyItem({ serveyList }) {
  return (
    <RecommendListBox>
      {serveyList.map(item => (
        <RecommendList key={item.user_survey_id}>
          <span>{item.survey_product[0]}</span> 외
          <span>{item.survey_product.length - 1}</span> 개
        </RecommendList>
      ))}
    </RecommendListBox>
  );
}

export default ServeyItem;

const RecommendListBox = styled.div`
  width: 46.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 75vh;
`;
const RecommendList = styled.div`
  width: 46.875rem;
  height: 6.25rem;
  font-size: 1.25rem;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  span {
    font-weight: 600;
    &:first-of-type {
      padding-right: 0.3rem;
    }
    &:last-of-type {
      padding-left: 0.3rem;
      margin-right: 0.3rem;
    }
  }
`;
