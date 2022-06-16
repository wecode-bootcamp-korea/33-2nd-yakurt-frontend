import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function KakaoLogin() {
  const location = useLocation();
  const IP = '10.58.5.236:8000';

  const KAKAO_CODE = location.search.split('=')[1];

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://${IP}/users/kakao/callback?code=${KAKAO_CODE}`, {
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
