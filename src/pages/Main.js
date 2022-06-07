import styled from 'styled-components';

const Main = () => {
  return (
    <MainWrapper>
      <MainText>
        <h2>
          내 몸에 필요한 <br />
          영양성분 궁금하세요?
        </h2>
        <span className="descText">
          나만을 위한 맞춤영양제를 찾아보세요! <br />
          이미 <strong className="strongNumber">888,362</strong>명이
          추천받았습니다.
        </span>
        <Button>지금 시작하기</Button>
      </MainText>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80');
  background-size: cover;
`;

const MainText = styled.div`
  position: absolute;
  left: 15rem;
  bottom: 40vh;

  h2 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  span {
    font-size: 1.7rem;
    .strongNumber {
      font-weight: 700;
    }
  }
`;

const Button = styled.button`
  position: absolute;
  left: 1rem;
  bottom: -7rem;
  width: 10rem;
  height: 5rem;
  color: white;
  background-color: rgb(236, 103, 68);
  border-radius: 3rem;
  font-size: 1rem;
  font-weight: 700;
  box-shadow: 4px 8px 8px hsl(0deg 0% 0% / 0.38);
`;
