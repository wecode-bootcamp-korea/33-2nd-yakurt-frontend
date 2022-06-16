import React from 'react';
import styled, { css } from 'styled-components';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { REST_API_KEY, REDIRECT_URI } from './KakaoLoginData';

const SocialDATA = [
  {
    id: 'apple',
    color: 'black',
    background: 'grey',
    text: 'APPLE 로그인',
    img: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/391px-Apple_logo_black.svg.png"
        alt="apple"
      />
    ),
  },
  {
    id: 'facebook',
    color: 'white',
    background: '#385899',
    text: 'FACEBOOK 로그인',
    img: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/2048px-Facebook_logo_36x36.svg.png"
        alt="facebook"
      />
    ),
  },
  {
    id: 'NAVER',
    color: 'white',
    background: '#19CB4C',
    text: 'NAVER 로그인',
    img: (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWuUbpmwYQQ7VSPchRapzCPsAxgBsY9wfkXA&usqp=CAU"
        alt="naver"
      />
    ),
  },
];

function Login() {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const GotoKakao = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  return (
    <LoginView>
      <LoginViewInner>
        <LogoBox>
          <Logo>Yakurt</Logo>
        </LogoBox>
        <LoginForm>
          <YakurtLogin>
            <Inputbox placeholder="이메일 또는 전화번호를 입력하세요." />
            <Inputbox placeholder="비밀번호를 입력하세요" />
            <button className="YackButton">로그인</button>
            <FindUserBox>
              <span className="text1">비밀번호 찾기</span>
              <span className="text2">회원가입</span>
            </FindUserBox>
          </YakurtLogin>
          <SocialBtnBox>
            <KakaoBtn onClick={GotoKakao}>
              <Kakao />
              카카오 로그인
            </KakaoBtn>
            {SocialDATA.map(data => (
              <Socialbtn
                key={data.id}
                facebook={data.id}
                color={data.color}
                background={data.background}
              >
                {data.img}
                {data.text}
              </Socialbtn>
            ))}
          </SocialBtnBox>
        </LoginForm>
      </LoginViewInner>
    </LoginView>
  );
}

// 1. constant data
// 2. Array.map => Social_btn
// 3. props => props color
// 3-1 props
// 3-2- props value diff color

export default Login;

const LoginView = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  height: 59rem;
`;

const LoginViewInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 59rem;
`;
const LogoBox = styled.div`
  width: 100%;
  height: 2.375rem;

  margin-bottom: 1.875rem;
`;
const Logo = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 1.875rem;
  padding-top: 0.625rem;
  color: coral;
`;
const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 31.25rem;
`;
const YakurtLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .YackButton {
    width: 28.625rem;
    height: 3.125rem;
    margin-top: 1.25rem;
    background-color: coral;
    border-radius: 1.875rem;
    color: white;
    font-size: 1rem;
    font-weight: 700;
  }
`;

const Inputbox = styled.input`
  width: 28.625rem;
  height: 3.75rem;
  margin-top: 1.25rem;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 0.625rem;
  text-align: center;
  font-size: 1rem;
`;

const FindUserBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.25rem;
  color: grey;
  .text1 {
    border-right: 2px solid grey;
    padding-right: 1.25rem;
  }
  .text2 {
    padding-left: 1.25rem;
  }
`;

const SocialBtnBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const KakaoBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.25rem;
  background-color: #fc0;
  width: 28.625rem;
  height: 3.125rem;
  border-radius: 1.25rem;
  font-weight: 800;
  font-size: 1rem;
  text-align: center;
  color: #3b1f1e;
`;
const Socialbtn = styled.button`
  margin-top: 1.25rem;
  width: 28.625rem;
  height: 3.125rem;
  border-radius: 1.25rem;
  font-weight: 700;
  font-size: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10rem;

  img {
    width: 1.25rem;
    margin-right: 0.938rem;
  }

  ${props => {
    return css`
      color: ${props.color};
      background-color: ${props.background};
    `;
  }};
  ${({ facebook }) =>
    facebook === 'facebook' &&
    css`
      padding-left: 8.8rem;
    `}
`;

const Kakao = styled(RiKakaoTalkFill)`
  font-size: 1.563rem;
  margin-right: 0.938rem;
`;
