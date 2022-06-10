import styled from 'styled-components';

const Pills = ({ img, title }) => {
  return (
    <PillWrapper>
      <img src={img} alt="pill" />
      <span>{title}</span>
    </PillWrapper>
  );
};

export default Pills;

const PillWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4rem;
  border-bottom: 1px solid lightgray;

  img {
    width: 2rem;
    height: 2rem;
    margin-left: 1rem;
  }

  span {
    margin-left: 1rem;
    font-size: 0.8rem;
  }
`;
