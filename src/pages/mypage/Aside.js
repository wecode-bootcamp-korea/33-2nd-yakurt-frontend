import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CATEGORY_LIST = [
  {
    id: 1,
    name: '건강설문관리',
    url: 'servey',
  },
  {
    id: 2,
    name: '정기구독',
    url: 'subscribe',
  },
  {
    id: 3,
    name: '결제관리',
    url: 'order ',
  },
];
function Aside() {
  const [Select, setSelect] = useState('');
  const handleSidebar = (id, url) => {
    setSelect(id);
    navigate(`/mypage/${url}`);
  };

  const navigate = useNavigate();

  const goTomypage = () => {
    navigate('/mypage');
  };

  return (
    <Container>
      <Info>
        <InfoText onClick={goTomypage}>My Yak</InfoText>
      </Info>
      <CategoryListBox>
        {CATEGORY_LIST.map(category => (
          <Category
            key={category.id}
            name={category.name}
            url={category.url}
            onClick={() => handleSidebar(category.id, category.url)}
            active={Select === category.id}
          >
            {category.name}
          </Category>
        ))}
      </CategoryListBox>
    </Container>
  );
}

export default Aside;
const Container = styled.div`
  position: relative;
  width: 10rem;
  margin-right: 1.875rem;
  padding-top: 3.125rem;
  padding-bottom: 8.75rem;
`;
const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.438rem;
  width: 10rem;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  text-align: center;
`;
const InfoText = styled.span`
  font-size: 1.563rem;
  font-weight: 700;
`;
const CategoryListBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 18rem;
`;
const Category = styled.span`
  text-align: center;
  margin-top: 2.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: ${props => (props.active ? 'coral' : 'black')};
`;
