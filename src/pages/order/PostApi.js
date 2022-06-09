import { useState } from 'react';

export const usePostApi = setIsOpenPost => {
  const [address, setAddress] = useState('');
  const [addressDetail, setAddressDetail] = useState('');

  const onCompletePost = ({ address, bname, buildingName, zonecode }) => {
    const extraAddress = [bname, buildingName].join(' ');
    const fullAddress = [address, extraAddress].join(', ');
    setAddress(zonecode);
    setAddressDetail(fullAddress);
    setIsOpenPost(false);
  };

  return { address, addressDetail, onCompletePost };
};
