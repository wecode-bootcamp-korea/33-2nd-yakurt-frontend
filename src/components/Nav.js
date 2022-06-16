import { useNavigate, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const YAKURT_TOKEN = localStorage.getItem('access_token');
  const isLogin = !!YAKURT_TOKEN;

  const moveTo = path => {
    navigate(path);
  };

  return (
    <NavWrapper pathName={location.pathname}>
      <Logo>Yakurt</Logo>
      {NAV_DATA.map(({ id, text }) => (
        <Category
          id={id}
          key={id}
          onClick={() => moveTo(id)}
          active={location.pathname === id}
          isLogin={isLogin}
        >
          {text}
        </Category>
      ))}
    </NavWrapper>
  );
};

const NAV_DATA = [
  {
    id: '/recommend',
    text: '추천성분',
  },
  {
    id: '/products/list',
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
    id: '/mypage',
    text: 'My약쿠',
  },
  {
    id: '/login',
    text: '로그인',
  },
  {
    id: '/logout',
    text: '로그아웃',
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
  text-align: center;
  background-color: white;
  border-bottom: 1px solid lightgrey;
  z-index: 10;

  ${({ pathName }) =>
    pathName === '/' &&
    css`
      background-color: transparent;
      border: none;
    `}
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
  text-align: center;
  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      border-bottom: 2px solid black;
      &:hover {
        color: grey;
      }
    `};

  ${({ isLogin, id }) =>
    !isLogin &&
    id === '/mypage' &&
    css`
      display: none;
    `}

  ${({ isLogin, id }) =>
    !isLogin &&
    id === '/logout' &&
    css`
      display: none;
    `}

  ${({ isLogin, id }) =>
    isLogin &&
    id === '/login' &&
    css`
      display: none;
    `}
`;

export default Nav;
