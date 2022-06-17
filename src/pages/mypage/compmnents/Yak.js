import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Yakorder from '../Yakorder';
import Yaksub from '../Yaksub';
import { IP } from '../../../hooks/Fetch';

function Yak() {
  const [myData, setMydata] = useState();
  useEffect(() => {
    fetch(`${IP}orders`, {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setMydata(data.results[0]);
      });
  }, []);
  const navigate = useNavigate();

  const goTosubcribe = () => {
    navigate('/mypage/subscribe');
  };
  const goToOrder = () => {
    navigate('/mypage/order');
  };
  return (
    <MyYak>
      <UserInfo>
        <UserName>
          <Naming>{myData?.user_name}</Naming> 님의
          <span className="hilight">Yakute</span>
        </UserName>
        <InviteCodeBox>
          <p>내 초대코드</p>
          <p className="OrangnColor">LMMHD</p>
        </InviteCodeBox>
        <NoticeBox>
          <TextBox>
            <span>최대 25% 친구 초대 할인을 받으세요.</span>
            <span>Yakurt에 친구들을 초대하고 함께 건강해지세요.</span>
            <span>초대받은 친구도 25% 할인을 받아가세요</span>
            <InviteBtn>친구초대하고 혜택 받기</InviteBtn>
          </TextBox>
        </NoticeBox>
        <RecentShipp>
          <span>최근 구독 내역</span>
          <span className="More" onClick={goTosubcribe}>
            더보기
          </span>
        </RecentShipp>
        {myData && <Yaksub MyData={myData} />}
        <RecentOrder>
          <span>최근 결제 내역</span>
          <span className="More" onClick={goToOrder}>
            더보기
          </span>
        </RecentOrder>
        {myData && <Yakorder MyData={myData} />}
      </UserInfo>
    </MyYak>
  );
}

export default Yak;

const MyYak = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.75rem;
  width: 46.875rem;
`;
const UserInfo = styled.div`
  width: 46.875rem;
  height: 3.125rem;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: column;
`;
const UserName = styled.div`
  font-size: 1.375rem;
  .hilight {
    color: coral;
    font-weight: 700;
    margin-left: 0.625rem;
    font-size: 1.563rem;
  }
`;
const Naming = styled.span`
  font-size: 1.563rem;
  font-weight: 700;
`;
const InviteCodeBox = styled.div`
  margin-top: 3.125rem;
  height: 3.125rem;
  width: 46.875rem;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  font-size: 1.25rem;
  font-weight: 700;
  padding-bottom: 1.25rem;
  .OrangnColor {
    color: coral;
  }
`;
const NoticeBox = styled.div`
  margin-top: 1.25rem;
  width: 46.875rem;
  height: 18.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: start;
  border-bottom: 0.438rem solid #fafafa;
  padding-bottom: 0.938rem;
`;
const TextBox = styled.div`
  height: 12.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  color: gray;
  font-weight: 400;
  font-size: 0.938rem;
`;
const InviteBtn = styled.button`
  background-color: coral;
  color: white;
  width: 15.625rem;
  height: 3.125rem;
  border-radius: 1.25rem;
  font-size: 0.938rem;
  font-weight: 600;
`;
const RecentShipp = styled.div`
  margin-top: 1.875rem;
  height: 3.125rem;
  width: 46.875rem;
  border-bottom: 0.438rem solid #fafafa;
  display: flex;
  justify-content: space-between;
  font-size: 1.25rem;
  font-weight: 700;
  padding-bottom: 1.25rem;

  .More {
    color: gray;
    font-size: 1rem;
  }
`;
const RecentOrder = styled.div`
  margin-top: 1.875rem;
  height: 3.125rem;
  width: 46.875rem;
  border-bottom: 0.438rem solid #fafafa;
  display: flex;
  justify-content: space-between;
  font-size: 1.25rem;
  font-weight: 700;
  padding-bottom: 1.25rem;
  .More {
    color: gray;
    font-size: 1rem;
  }
`;
