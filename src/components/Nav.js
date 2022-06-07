import styled, { css } from 'styled-components';

const Nav = ({ category, handleSelect }) => {
  return (
    <NavWrapper>
      <h2 className="logo">Yakurt</h2>
      {NAV_DATA.map(navData => (
        <Category
          key={navData.id}
          onClick={() => handleSelect(navData.id)}
          active={category === navData.id}
        >
          {navData.text}
        </Category>
      ))}
    </NavWrapper>
  );
};

const NAV_DATA = [
  {
    id: 'recommend',
    text: '추천성분',
  },
  {
    id: 'product',
    text: '제품보기',
  },
  {
    id: 'review',
    text: '고객후기',
  },
  {
    id: 'cart',
    text: '장바구니',
  },
  {
    id: 'login',
    text: '로그인',
  },
  {
    id: 'story',
    text: '스토리',
  },
  {
    id: 'cs',
    text: '고객센터',
  },
  {
    id: 'service',
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

  .logo {
    width: 20rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    color: rgb(236, 103, 68);
  }
`;

const Category = styled.div`
  margin-left: 2rem;
  font-size: 0.9rem;
  padding-bottom: 5px;
  font-weight: 600;
  cursor: pointer;

  ${props =>
    props.active &&
    css`
      border-bottom: 2px solid black;
      &:hover {
        color: grey;
      }
    `};
`;

export default Nav;
