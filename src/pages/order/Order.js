import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, ButtonGroup, ToggleButton } from 'react-bootstrap';
import styled, { css } from 'styled-components';
import DaumPostcode from 'react-daum-postcode';
import Nav from '../../components/Nav';
import OrderItem from './OrderItem';
import CheckBox from './CheckBox';
import { usePostApi } from './PostApi';
import { useFetch } from '../../hooks/Fetch';
import 'bootstrap/dist/css/bootstrap.min.css';

const Order = () => {
  const location = useLocation();
  const [totalPrice, setTotal] = useState(0);
  const [isOpenPost, setIsOpenPost] = useState(false);
  const [radioValue, setRadioValue] = useState('1');
  const [orderItem, setOrderItem] = useState([]);
  const [postMessage, setPostMessage] = useState('');
  const [postData, setPostData] = useState({
    select_cart: [],
    delivery_message: '',
    payment_method_id: 1,
  });
  const { address, addressDetail, onCompletePost } = usePostApi(setIsOpenPost);
  const userData = useFetch('/data/userData.json');
  const navigate = useNavigate();

  const onChangeOpenPost = () => {
    setIsOpenPost(!isOpenPost);
  };

  const handleCheckClick = () => {
    const selectCart = orderItem.map(cart => {
      return cart.id;
    });

    setPostData({
      select_cart: selectCart,
      delivery_message: postMessage,
      payment_method_id: radioValue,
    });
  };

  const handleClick = () => {
    fetch('http://10.58.6.4:8000/orders', {
      method: 'POST',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.Ro8z9wYC94RH5eaNt0QxcUYZKd_wxQGzXRDVpYTw0do',
      },
      body: JSON.stringify(postData),
    })
      .then(res => res.json())
      .then(data => {
        alert(`주문 완료! \n 주문번호 : ${data.data.order_number}`);
        navigate('/');
      });
  };

  const handlePostMessageChange = e => {
    const { value } = e.target;
    setPostMessage(value);
  };

  useEffect(() => {
    if (orderItem) {
      orderItem.forEach(item =>
        setTotal(prev => prev + item.price * item.quantity)
      );
    }
  }, [orderItem]);

  useEffect(() => {
    setOrderItem(location.state);
  }, []);

  return (
    <>
      <Nav active={true} />
      <OrderWrapper>
        <OrderContent>
          <OrderText>
            <span>주문 내역</span> 및 <span>배송지 정보</span>
          </OrderText>
          <OrderListTitle>
            주문내역
            <hr />
            <OrderListTitleWrapper>
              <span>상품정보</span>
              <span>수량</span>
              <span>주문가격</span>
            </OrderListTitleWrapper>
            <hr />
          </OrderListTitle>
          {orderItem?.map(order => (
            <OrderItem key={order.id} {...order} />
          ))}
          <TotalPrice>
            <span>제품합계</span>
            <span>{totalPrice.toLocaleString()}원</span>
          </TotalPrice>
          <TotalPrice>
            <span>배송비</span>
            <span>2,500원</span>
          </TotalPrice>
          <SaleTopBox>
            <span>정기구독 세일</span>
            <span>-{(totalPrice * 0.1 + 2500).toLocaleString()}원</span>
          </SaleTopBox>
          <SaleBox>
            <span>배송비 무료</span>
            <span>-2,500원</span>
          </SaleBox>
          <SaleBox>
            <span>건강설문할인 이벤트</span>
            <span>-{(totalPrice * 0.1).toLocaleString()}원</span>
          </SaleBox>
          <Total>
            <h2>총 결제금액</h2>
            <h2>{(totalPrice - (totalPrice * 0.1 + 2500)).toLocaleString()}</h2>
          </Total>
          <UserInfoTitle>주문자 정보</UserInfoTitle>
          <InputLabel>이름</InputLabel>
          <UserInput placeholder="이름" defaultValue={userData?.userName} />
          <InputLabel>연락처</InputLabel>
          <UserInput placeholder="연락처" />
          <InputLabel>이메일</InputLabel>
          <UserInput placeholder="이메일" defaultValue={userData?.userEmail} />
          <CheckBoxWrapper>
            <input type="checkbox" defaultChecked />
            <label>주문자 정보 가져오기</label>
            <input type="checkbox" disabled />
            <label>최근 배송지 불러오기</label>
          </CheckBoxWrapper>
          <AdressInfo>배송지 정보</AdressInfo>
          <InputLabel>수령인 이름</InputLabel>
          <UserInput
            placeholder="수령인 이름"
            able={true}
            defaultValue={userData?.userName}
          />
          <InputLabel>수령인 연락처</InputLabel>
          <UserInput placeholder="수령인 연락처" able={true} />
          <InputLabel>우편번호</InputLabel>
          <PostInfo>
            <UserInput
              placeholder="우편번호를 입력해 주세요."
              defaultValue={address}
            />
            <PostBtn onClick={onChangeOpenPost} variant="dark">
              우편번호 검색
            </PostBtn>
          </PostInfo>
          {isOpenPost && (
            <div>
              <DaumPostcode
                style={postCodeStyle}
                autoClose
                onComplete={onCompletePost}
              />
            </div>
          )}
          <InputLabel>도로명 주소</InputLabel>
          <UserInput
            placeholder="우편번호를 입력해 주세요."
            defaultValue={addressDetail}
          />
          <InputLabel>나머지 주소</InputLabel>
          <UserInput placeholder="나머지 주소를 입력해주세요." able={true} />
          <InputLabel>배송시 요청사항</InputLabel>
          <UserInput
            placeholder="배송 요청사항을 입력해주세요."
            onChange={handlePostMessageChange}
            able={true}
          />
          <UserInfoTitle>결제정보 등록</UserInfoTitle>
          <CardInfo>
            <ul>
              {AGREEMENT.map(({ id, text }) => (
                <li key={id}>{text}</li>
              ))}
            </ul>
          </CardInfo>
          <CreditItemWrapper>
            {RADIOS.map((radio, idx) => (
              <CreditItem
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant="outline-danger"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={e => setRadioValue(e.currentTarget.value)}
              >
                <span>{radio.name}</span>
                <img src={radio.img} alt="" />
              </CreditItem>
            ))}
          </CreditItemWrapper>
          <CheckBox handleCheckClick={handleCheckClick} />
          <OrderBtn>
            <button onClick={handleClick}>주문하기</button>
          </OrderBtn>
        </OrderContent>
      </OrderWrapper>
    </>
  );
};

export default Order;

const OrderWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100vw;
  padding-top: 5rem;
  background-color: #fff;
`;

const OrderContent = styled.div`
  width: 55%;
  padding-top: 7rem;
`;

const OrderText = styled.h2`
  margin-bottom: 5rem;
  font-size: 1.5rem;

  span {
    font-weight: 550;
  }
`;

const OrderListTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;

  hr {
    margin-top: 1.3rem;
    margin-bottom: 1.3rem;
    &:last-of-type {
      margin-bottom: 0;
    }
  }

  span {
    font-size: 1rem;
    &:first-of-type {
      flex: 3;
    }

    &:last-of-type {
      margin-left: 5rem;
    }
  }
`;

const OrderListTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
`;

const SaleTopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 0 2rem;
  background-color: rgb(247, 247, 247);
  font-weight: 600;
`;

const SaleBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem;
  background-color: rgb(250, 250, 250);
`;

const Total = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 2px solid black;

  h2 {
    font-size: 1.4rem;
    font-weight: 600;

    &:last-of-type {
      color: rgb(240, 86, 59);
    }
  }
`;

const UserInfoTitle = styled.h2`
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 1.3rem;
  font-weight: 600;
`;

const InputLabel = styled.span`
  color: lightgrey;
  font-size: 0.9rem;
  font-weight: 600;
`;

const UserInput = styled.input`
  width: 100%;
  height: 4rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  background-color: #fafafa;
  border: 1px solid rgb(206, 206, 206);
  border-radius: 0.5rem;
  text-indent: 2rem;

  &::placeholder {
    color: rgb(206, 206, 206);
    font-size: 1.3rem;
    text-indent: 2rem;
  }

  ${({ able }) =>
    able &&
    css`
      background-color: #fff;
    `}
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  input {
    margin-left: 2rem;
    width: 1.7em;
    height: 1.7rem;
    accent-color: black;
  }

  label {
    margin-left: 0.5rem;
  }
`;

const AdressInfo = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const PostBtn = styled(Button)`
  border-radius: 3rem;
  width: 20rem;
  height: 4rem;
  margin-left: 2rem;
  margin-bottom: 0.7rem;
`;

const CardInfo = styled(SaleBox)`
  flex-direction: column;
  font-size: 0.8rem;
  color: grey;
  ul {
    list-style: disc;
  }
  li {
    margin-top: 0.5rem;
    margin-left: 2rem;
  }
`;

const CreditItemWrapper = styled(ButtonGroup)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
`;

const CreditItem = styled(ToggleButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;

  img {
    width: 3.5rem;
    height: 1rem;
    margin-left: 1rem;
  }
`;

const OrderBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  button {
    width: 60%;
    height: 4rem;
    margin-top: 4rem;
    color: white;
    background-color: rgb(261, 89, 51);
    font-weight: 600;
    border-radius: 2rem;
    box-shadow: 4px 8px 8px hsl(0deg 0% 0% / 0.38);
    margin-bottom: 20rem;
  }
`;

const postCodeStyle = {
  position: 'relative',
  display: 'block',
  top: '0%',
  width: '100%',
  height: '400px',
  padding: '7px',
  border: '1px solid rgb(261, 89, 51)',
  borderRadius: '1rem',
};

const RADIOS = [
  {
    name: '네이버페이',
    value: '1',
    img: 'https://pilly.kr/images/order/pg-logo-naver.png',
  },
  {
    name: '카카오페이',
    value: '2',
    img: 'https://pilly.kr/images/order/pg-logo-kakao.png',
  },
  {
    name: '페이코',
    value: '3',
    img: 'https://pilly.kr/images/order/pg-logo-payco.png',
  },
];

const AGREEMENT = [
  {
    id: 1,
    text: '결제 정보를 등록하여 필리 정기구독을 이용하실 수 있습니다.',
  },
  {
    id: 2,
    text: '입력하신 결제 정보는 암호화되어 결제사에 전달되며 필리에는 저장되지 않습니다.',
  },
  {
    id: 3,
    text: '정기구독 서비스는 언제든 종료가 가능하며 종료 후에는 결제되지 않습니다.',
  },
];
