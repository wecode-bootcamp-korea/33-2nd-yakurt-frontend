import React from 'react';
import styled from 'styled-components';

const RecommendationContent = () => {
  return (
    <Box>
      <Description>약쿠르트가 연구한</Description>
      <Name>비타민B</Name>
      <Image />
      <Text>
        비타민B6의 섭취량은 혈중 호모시스테인 수준을 유지하는데 필요합니다.
      </Text>
    </Box>
  );
};

const Box = styled.div`
  position: relative;
`;

const Description = styled.p`
  font-size: 1.3rem;
  font-weight: 300;
`;

const Name = styled(Description)`
  font-weight: 700;
  margin: 0.5rem 0;
`;

const Image = styled.img.attrs({
  src: 'https://velog.velcdn.com/images/eunnb05/post/4fd9756f-f5b8-4abe-a763-4507eb816a7a/image.jpg',
})`
  position: absolute;
  top: 1px;
  right: 1px;
  width: 4rem;
  height: 2rem;
`;

const Text = styled.p`
  margin: 1.5rem 0;
  color: #8395a7;
  font-size: 1.1rem;
  line-height: 1.5rem;
`;

export default RecommendationContent;
