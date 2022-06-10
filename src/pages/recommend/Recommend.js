import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Nav from '../../components/Nav';
import Pills from './Pills';

const Recommend = () => {
  const [recommend, setRecommend] = useState({});

  useEffect(() => {
    fetch('/data/recommendPillData.json')
      .then(res => res.json())
      .then(data => {
        setRecommend(data.results[0]);
      });
  }, []);

  return (
    <>
      <Nav active={true} />
      <RecommendWrapper>
        <RecommendContent>
          {recommend.survey_product && (
            <AsideNav>
              <AsideTitle>
                <h2>
                  추천영양성분
                  <span>{recommend.survey_product.length}</span>
                </h2>
              </AsideTitle>
              {recommend.survey_product.map(pill => (
                <Pills
                  key={pill.product_id}
                  img={pill.product_image_url}
                  title={pill.product_name}
                />
              ))}
              <CartBtn>장바구니 담기</CartBtn>
            </AsideNav>
          )}
          {recommend.survey_product && (
            <>
              <SurveyResult>
                <UserName>
                  <h2>{recommend.user}님의</h2>
                  <h2>건강설문 결과표</h2>
                  <UserInfo>
                    <h3>
                      성별<span>{recommend.gender}</span>
                    </h3>
                    <h3>
                      나이<span>{recommend.age}</span>
                    </h3>
                    <h3>
                      BMI<span>{recommend.BMI}</span>
                    </h3>
                  </UserInfo>
                </UserName>
                <Bmi>
                  <BmiTable>
                    {BMI_TITLE.map((bmiTitle, index) => (
                      <span key={index}>{bmiTitle}</span>
                    ))}
                    <Dot bmiRate={recommend.BMI} />
                  </BmiTable>
                  <BmiNumber>
                    {BMI_RATES.map((bmiNumber, index) => (
                      <span key={index}>{bmiNumber}</span>
                    ))}
                  </BmiNumber>
                </Bmi>
              </SurveyResult>
              {recommend.survey_product.map((resultProduct, index) => (
                <RecommendPillInfo index={index} key={resultProduct.product_id}>
                  <h2>{resultProduct.product_name}</h2>
                  <h2>
                    {resultProduct.product_effect &&
                      resultProduct.product_effect.map((text, index) => (
                        <span key={index}>{text}</span>
                      ))}
                  </h2>
                  <h2>
                    <span>#</span>
                    {resultProduct.product_information}
                  </h2>
                  <h2>
                    <span>#</span>
                    {resultProduct.product_description}
                  </h2>
                  <div>
                    <ProductImg
                      src={resultProduct.product_image_url}
                      alt={resultProduct.product_name}
                    />
                  </div>
                </RecommendPillInfo>
              ))}
            </>
          )}
        </RecommendContent>
      </RecommendWrapper>
    </>
  );
};

export default Recommend;

const RecommendWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 6rem;
`;

const RecommendContent = styled.section`
  display: flex;
  flex-direction: column;
  width: 65%;
`;

const AsideNav = styled.aside`
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 15rem;
  height: 100vh;
  background-color: #fff;
`;

const AsideTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid lightgray;
  height: 4rem;

  h2 {
    font-weight: 600;

    span {
      margin-left: 1rem;
      color: rgb(240, 86, 59);
    }
  }
`;

const CartBtn = styled.button`
  position: absolute;
  bottom: 7rem;
  width: 80%;
  height: 3rem;
  color: white;
  background-color: rgb(240, 86, 59);
  border-radius: 2rem;
  font-weight: 600;
  font-size: 1.05rem;
  box-shadow: 2px 3px 10px hsl(0deg 0% 0% / 0.38);
`;

const SurveyResult = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 2rem;
  margin-left: 15rem;
  width: 75%;
  height: 10rem;
  background-color: rgb(248, 237, 162);
`;

const UserName = styled.div`
  h2 {
    font-size: 1.4rem;
    font-weight: 600;
  }
`;

const BmiTable = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 2rem;
  padding-top: 0.5rem;
  background-color: white;
  border-radius: 1rem;

  span {
    font-size: 0.8rem;
  }
`;

const Dot = styled.span`
  position: absolute;
  bottom: -0.35rem;
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 0.5rem;
  background-color: black;

  ${({ bmiRate }) =>
    bmiRate &&
    css`
      left: ${bmiRate > 20 ? bmiRate * 2 : bmiRate}%;
    `}
`;

const Bmi = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const BmiNumber = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 0.8rem;
    margin-left: 20%;
  }
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
  font-weight: 600;

  span {
    margin-left: 0.3rem;
    margin-right: 0.5rem;
    font-weight: 500;
  }
`;

const RecommendPillInfo = styled.article`
  width: 75%;
  height: 25rem;
  margin-left: 15rem;
  margin-top: 3rem;
  color: white;

  ${({ index }) =>
    index % 2 === 0
      ? css`
          background-color: coral;
        `
      : css`
          background-color: lightcoral;
        `}

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 2rem;
  }

  h2 {
    margin-left: 2rem;
    margin-right: 2rem;
    margin-top: 2rem;

    span {
      margin-right: 1rem;
      font-size: 1.3rem;
      font-weight: 600;
    }

    &:first-of-type {
      font-size: 1.3rem;
      font-weight: 600;
    }
  }
`;

const ProductImg = styled.img`
  width: 10rem;
  height: 10rem;
`;

const BMI_RATES = ['18.5', '20', '25', '30'];
const BMI_TITLE = ['저체중', '정상', '과체중', '비만', '고도비만'];
