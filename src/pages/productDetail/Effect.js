import React from 'react';
import styled from 'styled-components';
import { icon } from '../../hooks/useProduct';

const Effect = ({ productDetail }) => {
  return (
    <Flex>
      <Icon>{productDetail.product_effect?.map(effect => icon[effect])}</Icon>
      <Name>{productDetail.product_effect}</Name>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 8.5rem;
  height: 3rem;
  margin-right: 1rem;
  line-height: 50%;
  opacity: 0.8;
`;

const Icon = styled.div`
  font-size: 40px;
`;

const Name = styled.h4`
  font-size: 0.95rem;
`;

export default Effect;
