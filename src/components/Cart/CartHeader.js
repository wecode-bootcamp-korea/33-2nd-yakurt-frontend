import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';

const CartHeader = ({ clear }) => {
  const navigate = useNavigate();

  return (
    <MyCart>
      <Cart>
        <p>장바구니</p>
      </Cart>
      <AddItem>
        <FirstBtn>
          <button onClick={() => navigate('/product')}>
            <FaPlus /> 제품추가
          </button>
        </FirstBtn>
        <SecondBtn>
          <button onClick={clear}>
            <FaTrashAlt />
          </button>
        </SecondBtn>
      </AddItem>
    </MyCart>
  );
};

const MyCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8rem;
  font-size: 1rem;
`;

const Cart = styled.div`
  font-size: 2rem;
`;

const AddItem = styled.div`
  display: flex;
`;

const FirstBtn = styled.div`
  width: 7rem;
  height: 3rem;
  border: 0.063rem solid #e0e0e0;
  border-radius: 2rem;
  padding: 0.8rem;
  margin: 0.3rem;
`;

const SecondBtn = styled(FirstBtn)`
  width: 3rem;
  height: 3rem;
  border-radius: 5rem;
`;

export default CartHeader;
