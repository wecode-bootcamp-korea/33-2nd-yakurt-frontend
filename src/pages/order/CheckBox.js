import { useState } from 'react';
import styled from 'styled-components';

const CheckBox = () => {
  const [checkedList, setCheckedLists] = useState([]);

  const onCheckedAll = checked => {
    const newCheckedList = checked ? [...CHECKBOX_AGREEMENT] : [];
    setCheckedLists(newCheckedList);
  };

  const onCheckedElement = (checked, item) => {
    if (checked) {
      setCheckedLists([...checkedList, item]);
    } else {
      setCheckedLists(checkedList.filter(checkedItem => checkedItem !== item));
    }
  };

  return (
    <>
      <CheckWrapper>
        <input
          type="checkbox"
          onChange={e => onCheckedAll(e.target.checked)}
          checked={checkedList.length === CHECKBOX_AGREEMENT.length}
        />
        <UserInfoTitle>모두 동의하기</UserInfoTitle>
      </CheckWrapper>
      {CHECKBOX_AGREEMENT.map(item => (
        <BottomCheckBox key={item.id}>
          <input
            type="checkbox"
            onChange={e => onCheckedElement(e.target.checked, item)}
            checked={checkedList.includes(item) || false}
          />
          <span>{item.data}</span>
        </BottomCheckBox>
      ))}
    </>
  );
};

export default CheckBox;

const CheckWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid lightgray;

  input {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 1rem;
    accent-color: rgb(261, 89, 51);
  }
`;

const BottomCheckBox = styled(CheckWrapper)`
  margin-top: 1rem;
  border: none;
`;

const UserInfoTitle = styled.h2`
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 1.3rem;
  font-weight: 600;
`;

const CHECKBOX_AGREEMENT = [
  { id: 1, data: '만 14세 이상입니다.' },
  { id: 2, data: '이용 약관 동의' },
  { id: 3, data: '개인정보처리방침 동의' },
  { id: 4, data: '마케팅 수신 동의 (선택)' },
];
