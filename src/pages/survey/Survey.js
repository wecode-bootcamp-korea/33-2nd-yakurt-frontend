import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { BsXLg } from 'react-icons/bs';
import { ProgressBar, Button } from 'react-bootstrap';
import {
  useUserInfo,
  useUserGender,
  useQuestionData,
} from '../../hooks/useUserInfo';
import 'bootstrap/dist/css/bootstrap.min.css';

const Survey = () => {
  const [isStart, setIsStart] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [productId, setProduct] = useState([]);
  const [userName, setUserName] = useState('');
  const { question, symptom } = useQuestionData();
  const { userInfo, handleUserInfo } = useUserInfo();
  const { gender, handleRadioChange } = useUserGender();
  const [result, setResult] = useState({});
  const navigate = useNavigate();

  const handleClickStart = () => {
    setIsStart(prev => setIsStart(!prev));
  };

  const handleClickNextBtn = e => {
    e.preventDefault();
    if (currentSlide === 5) {
      setResult(prev => ({
        ...prev,
        ...userInfo,
        product_id: productId,
        gender,
      }));
    }

    if (currentSlide === 6) {
      fetch('http://10.58.5.236:8000/survey', {
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('access_token'),
        },
        body: JSON.stringify(result),
      });
      navigate('/recommend');
    }

    setCurrentSlide(prev => prev + 1);
  };

  return (
    <SurveyWrapper>
      <SurveyContent>
        <CancelBtn onClick={() => navigate('/')} />
        {isStart ? (
          <ContentWrapper>
            <Logo>Yakurt</Logo>
            <h3>
              약쿠르트!
              <br />
              <BoldText>내 건강을 알려줘!</BoldText>
            </h3>
            <p>
              몇 가지 질문에 답하고
              <br />
              나에게 필요한 영양성분을 알아보세요.
            </p>
            <Desc>약 3분정도 소요됩니다.</Desc>
            <StartButton onClick={handleClickStart}>시작하기</StartButton>
            <Desc>※ 질병의 진단 및 치료는 전문적인 의료기관을 이용하세요.</Desc>
          </ContentWrapper>
        ) : (
          <>
            <QuestionNav>
              {QUESTION_NAV.map(({ id, text, index }) => (
                <QuestionCategory
                  active={
                    currentSlide + 1 ===
                    (currentSlide < 3 ? index[currentSlide] : index)
                  }
                  key={id}
                >
                  {text}
                </QuestionCategory>
              ))}
            </QuestionNav>
            <Bar
              variant="danger"
              now={17 + (currentSlide / question.length) * 100}
            />
            <Question>
              <span>질문 {currentSlide + 1}</span>
              <h2>
                {currentSlide > 0 ? userName : ''}
                {currentSlide !== 7 && question[currentSlide].question}
              </h2>
              <hr />
              {currentSlide === 0 && (
                <InputBox
                  placeholder="이름"
                  onChange={e => setUserName(e.target.value)}
                  name="userName"
                  required
                />
              )}
              {currentSlide === 1 && (
                <>
                  <CheckBoxWrapper>
                    <GenderCheckBox
                      type="radio"
                      value="여성"
                      onChange={handleRadioChange}
                      name="gender"
                    />
                    <label>여성</label>
                  </CheckBoxWrapper>
                  <CheckBoxWrapper>
                    <GenderCheckBox
                      type="radio"
                      value="남성"
                      onChange={handleRadioChange}
                      name="gender"
                    />
                    <label>남성</label>
                  </CheckBoxWrapper>
                </>
              )}
              {currentSlide === 2 && (
                <InputBox
                  placeholder="나이"
                  onChange={handleUserInfo}
                  name="age"
                  required
                />
              )}
              {currentSlide === 3 &&
                symptom.map(({ id, desc, text }) => (
                  <Symptom key={id}>
                    <input
                      type="checkbox"
                      value={desc}
                      onClick={e => setProduct([...productId, id])}
                    />
                    <span>{text}</span>
                  </Symptom>
                ))}
              {currentSlide === 4 && (
                <InputBox
                  placeholder="키"
                  onChange={handleUserInfo}
                  name="height"
                />
              )}
              {currentSlide === 5 && (
                <InputBox
                  placeholder="몸무게"
                  onChange={handleUserInfo}
                  name="weight"
                />
              )}
              <ButtonWrapper>
                <MoveButton
                  variant="outline-dark"
                  onClick={() => setCurrentSlide(prev => prev && prev - 1)}
                  name="prev"
                >
                  이전
                </MoveButton>
                <MoveButton
                  variant="dark"
                  onClick={handleClickNextBtn}
                  name="next"
                  type="submit"
                >
                  다음
                </MoveButton>
              </ButtonWrapper>
            </Question>
          </>
        )}
      </SurveyContent>
    </SurveyWrapper>
  );
};

export default Survey;

const SurveyWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgb(250, 250, 250);
`;

const SurveyContent = styled.div`
  width: 65%;
  height: fit-content;
  margin-top: 10%;
  background-color: #fff;
  box-shadow: 2px 2px 10px rgba(230, 230, 230, 0.8);

  h3 {
    margin-top: 10%;
    font-size: 1.8rem;
  }

  p {
    margin-top: 10%;
    font-weight: 300;
  }
`;

const CancelBtn = styled(BsXLg)`
  position: absolute;
  width: 3rem;
  height: 3rem;
  right: 16%;
  top: 17%;
  padding: 1rem;
  background-color: #fff;
  font-size: 1.5rem;
  border-radius: 1.5rem;
  box-shadow: 1px 1px 1px 1px rgba(230, 230, 230, 0.8);
`;

const BoldText = styled.span`
  font-weight: 700;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 45%;
  height: 100%;
`;

const Logo = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  margin-top: 5rem;
  color: white;
  background-color: rgb(240, 86, 59);
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 2rem;
`;

const StartButton = styled.button`
  width: 100%;
  height: 3rem;
  color: white;
  background-color: rgb(38, 38, 38);
  font-size: 1rem;
  font-weight: 700;
  border-radius: 2rem;
`;

const QuestionNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15%;
`;

const QuestionCategory = styled.h2`
  color: lightgray;
  font-size: 1.3rem;
  padding: 2rem;

  &:nth-of-type(n + 2) {
    margin-left: 3rem;
  }

  ${({ active }) =>
    active &&
    css`
      color: coral;
    `}
`;

const Desc = styled.span`
  margin-top: 5%;
  color: grey;
  font-size: 0.8rem;
  margin-bottom: 10%;
`;

const Question = styled.form`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 80%;
  margin-left: 10%;

  span {
    margin-top: 2rem;
    color: lightgrey;
    font-size: 0.9rem;
    font-weight: 600;
  }

  h2 {
    margin-top: 5%;
    font-size: 1.5rem;
    font-weight: 700;
  }

  hr {
    margin: 2rem 0;
  }
`;

const InputBox = styled.input`
  width: 100%;
  line-height: 3rem;
  border-radius: 0.5rem;
  border: 0.9px solid grey;
  outline: none;
  text-indent: 1rem;

  &::placeholder {
    color: lightgray;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem 0;

  button {
    height: 3rem;
    border-radius: 2rem;
    font-size: 1rem;
  }
`;

const MoveButton = styled(Button)`
  ${({ name }) =>
    name === 'next'
      ? css`
          width: 30rem;
        `
      : css`
          width: 10rem;
        `};
`;

const GenderCheckBox = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  margin-bottom: 2rem;
  accent-color: rgb(240, 86, 59);
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;

  label {
    margin-left: 1rem;
    margin-bottom: 2rem;
  }
`;

const Symptom = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  input {
    width: 1rem;
    height: 1rem;
    accent-color: rgb(240, 86, 59);
  }

  span {
    margin-top: 0;
    margin-left: 1rem;
    color: black;
    font-size: 1.1rem;
    font-weight: 400;
  }
`;

const Bar = styled(ProgressBar)`
  height: 5px;
`;

const QUESTION_NAV = [
  {
    id: 1,
    text: '기본정보',
    index: [1, 2, 3],
  },
  {
    id: 2,
    text: '증상/불편',
    index: 4,
  },
  {
    id: 3,
    text: '생활 습관',
    index: 5,
  },
  {
    id: 4,
    text: '기타',
    index: 6,
  },
];
