import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';

const ProductList = ({ itemlist }) => {
  const { img, title, price, quantity } = itemlist;
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const handleClickPlus = () => {
    setItemQuantity(prev => prev + 1);
  };

  const handleClickMinus = () => {
    if (itemQuantity === 1) {
      return;
    }
    setItemQuantity(prev => prev - 1);
  };

  return (
    <Products>
      <input type="checkbox" />
      <img src={img} alt="product" />
      <CountList>
        <Items>
          <p>{title}</p>
          <span>
            {(price * itemQuantity)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            원
          </span>
        </Items>
        <CountItems>
          <button onClick={handleClickMinus}>
            <FaMinus />
          </button>
          <span>{itemQuantity}</span>
          <button onClick={handleClickPlus}>
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
