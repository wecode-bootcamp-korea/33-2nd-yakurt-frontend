import React from 'react';
import styled from 'styled-components';
import { icon } from '../../hooks/useProduct';

const Effect = ({ productDetail }) => {
  return (
    <Flex>
      {productDetail[0]?.product_effect?.map(effect => (
        <>
          <Icon>{icon[effect]}</Icon>
          <Name>{effect}</Name>
        </>
      ))}
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  margin-right: 1rem;
  line-height: 50%;
  opacity: 0.8;
`;

const Icon = styled.div`
  font-size: 40px;
  margin: 0 0.5rem;
`;

const Name = styled.h4`
  font-size: 0.95rem;
`;

export default Effect;
