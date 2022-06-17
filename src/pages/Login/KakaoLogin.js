import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IP } from '../../hooks/Fetch';
function KakaoLogin() {
  const location = useLocation();

  const KAKAO_CODE = location.search;

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${IP}users/kakao/callback${KAKAO_CODE}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('access_token', data.data.access_token);
        navigate('/');
      });
  }, []);
  return <div>kakaoLogin</div>;
}

export default KakaoLogin;
