import React from 'react';
import styled from 'styled-components';
function SubscribeItem({ SubscribeList }) {
  return (
    <SubscriptionListBox>
      {SubscribeList.map(item => (
        <SubscriptionList key={item.subscription_id}>
          <PriceNameBox>
            <span className="ING">진행중</span>
            <span>{item.subscription_product[0]}</span> 외
            <span>{item.subscription_product.length - 1}</span> 개
          </PriceNameBox>

          <AdditionalTextBox>
            <AdditionalText>
              <span className="Discount">
                <span className="Size">10%</span> 할인
              </span>
              <span className="Discount"># 배송비 무료</span>
              <span className="Discount">#건강설문 할인</span>
              {item.subscription_review.length === 0 ? (
                <ReviewBtn>리뷰쓰기</ReviewBtn>
              ) : (
                <ReviewBtn>리뷰보기</ReviewBtn>
              )}
            </AdditionalText>
          </AdditionalTextBox>
        </SubscriptionList>
      ))}
    </SubscriptionListBox>
  );
}

export default SubscribeItem;
const SubscriptionListBox = styled.div`
  width: 46.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SubscriptionList = styled.div`
  width: 46.875rem;
  height: 6.25rem;
  font-size: 1.25rem;
  border-bottom: 1px solid #ddd;
  display: flex;

  flex-direction: column;
  justify-content: center;

  .ING {
    color: lightgreen;
    font-weight: 700;
    margin-right: 1.875rem;
  }
  .Price {
    font-weight: 700;
    margin-left: 31.25rem;
  }
`;
const PriceNameBox = styled.div`
  span {
    font-weight: 500;
    &:last-of-type {
      padding-left: 0.5rem;
    }
  }
`;
const AdditionalTextBox = styled.div`
  margin-top: 1.563rem;
`;
const AdditionalText = styled.div`
  font-size: 0.938rem;
  display: flex;
  justify-content: flex-start;
  color: gray;
  .Discount {
    margin-right: 1.25rem;
  }
  .Size {
    font-size: 1.125rem;
  }
`;
const ReviewBtn = styled.button`
  border-radius: 0.625rem;
  font-size: 1rem;
  color: coral;
  font-weight: 800;
  margin-left: 22.5rem;
  cursor: pointer;
`;
