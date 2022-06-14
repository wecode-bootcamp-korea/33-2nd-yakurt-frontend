import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';

const ProductList = ({ itemList, setTotalPrice, onCheck, setCheck }) => {
  const { img, title, price, quantity } = itemList;
  const [boxChecking, setBoxChecking] = useState(true);
  const [itemQuantity, setItemQuantity] = useState(quantity);

  useEffect(() => {
    boxChecking
      ? setTotalPrice(prev => prev + price * itemQuantity)
      : setTotalPrice(prev => prev - price * itemQuantity);
  }, [boxChecking]);

  useEffect(() => {
    setCheck(prev => [...prev, itemList]);
  }, []);

  const handleClickPlus = () => {
    if (itemQuantity === 5) {
      return alert('제품별로 5개 이상은 구입이 불가합니다.');
    }
    setItemQuantity(prev => prev + 1);
    setTotalPrice(prev => prev + price);
  };

  const handleClickMinus = () => {
    if (itemQuantity === 1) {
      return;
    }
    setItemQuantity(prev => prev - 1);
    setTotalPrice(prev => prev - price);
  };

  const activeBox = () => {
    setBoxChecking(prev => !prev);
  };

  return (
    <Products boxChecking={boxChecking}>
      <input
        type="checkbox"
        onClick={e => {
          onCheck(e, itemList);
          activeBox();
        }}
        defaultChecked={boxChecking}
      />
      <img src={img} alt="product" />
      <CountList>
        <Items>
          <p>{title}</p>
          <span>{(price * itemQuantity).toLocaleString()}원</span>
        </Items>
        <CountItems>
          <button onClick={handleClickMinus} disabled={!boxChecking}>
            <FaMinus />
          </button>
          <span>{itemQuantity}</span>
          <button onClick={handleClickPlus} disabled={!boxChecking}>
            <FaPlus />
          </button>
        </CountItems>
      </CountList>
    </Products>
  );
};

const Products = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 0.1rem solid #e0e0e0;
  padding-bottom: 1rem;
  opacity: ${props => {
    if (props.boxChecking === false) {
      return 0.3;
    } else {
      return 1;
    }
  }};

  p {
    margin-top: 1rem;
    border-bottom: 0.1rem solid black;
    padding-bottom: 0.3rem;
    font-size: 2rem;
  }
  span {
    font-size: 1.3rem;
  }
  input {
    zoom: 2;
  }
  img {
    width: 100px;
    height: 100px;
    margin-left: 30px;
    margin-top: 1.5rem;
  }
`;

const CountList = styled.div`
  margin-left: 1.5rem;
  p {
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
  }
`;

const Items = styled.div`
  display: flex;
  justify-content: space-between;
  width: 560px;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 800;
`;

const CountItems = styled.div`
  align-items: center;

  button {
    border: 1px solid #e0e0e0;
    width: 2rem;
    height: 2rem;
    box-shadow: 2px 2px 1px #eee;
    color: grey;
  }
  span {
    padding: 1.5rem;
    font-weight: 800;
    font-size: 1.3rem;
  }
`;

export default ProductList;
