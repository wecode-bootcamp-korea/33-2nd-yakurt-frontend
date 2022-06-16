import React from 'react';
import styled from 'styled-components';

const RecommendationContent = ({ product }) => {
  return (
    product && (
      <Box>
        <Description>{product?.product_title}</Description>
        <Name>{product?.product_name}</Name>
        <Image src={product?.product_image_url} />
        <Text>{product?.product_information}</Text>
      </Box>
    )
  );
};

const Box = styled.div`
  position: relative;
`;

const Description = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  width: 13rem;
  margin: 0.5rem 0;
`;

const Name = styled(Description)`
  font-weight: 700;
`;

const Image = styled.img`
  position: absolute;
  top: 1px;
  right: 1px;
  width: 5rem;
  height: 3rem;
`;

const Text = styled.p`
  margin: 1rem 0;
  color: #8395a7;
  font-size: 0.9rem;
  line-height: 1.5rem;
`;

export default RecommendationContent;
