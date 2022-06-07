import { useNavigate, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const moveTo = path => {
    navigate(`${path}`);
  };

  return (
    <NavWrapper>
      <Logo>Yakurt</Logo>
      {NAV_DATA.map(({ id, text }) => (
        <Category
          key={id}
          onClick={() => moveTo(id)}
          active={`${location.pathname}` === id}
        >
          {text}
        </Category>
      ))}
    </NavWrapper>
  );
};

const NAV_DATA = [
  {
    id: '/survey',
    text: '추천성분',
  },
  {
    id: '/product',
    text: '제품보기',
  },
  {
    id: '/review',
    text: '고객후기',
  },
  {
    id: '/cart',
    text: '장바구니',
  },
  {
    id: '/login',
    text: '로그인',
  },
  {
    id: '/story',
    text: '스토리',
  },
  {
    id: '/cs',
    text: '고객센터',
  },
  {
    id: '/service',
    text: '기업복지',
  },
];

const NavWrapper = styled.aside`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 6rem;
  padding-bottom: 5px;
  padding-right: 10rem;
`;

const Logo = styled.h2`
  width: 20rem;
  color: rgb(261, 89, 51);
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

const Category = styled.div`
  min-width: 4rem;
  margin-left: 3%;
  padding-bottom: 5px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      border-bottom: 2px solid black;
      &:hover {
        color: grey;
      }
    `};
`;

export default Nav;
