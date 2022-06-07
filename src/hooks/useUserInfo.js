import { useState, useEffect } from 'react';

export const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState({
    userName: '',
    userAge: 0,
    userTall: 0,
    userWeight: 0,
  });

  const handleUserInfo = e => {
    const { value, name } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };
  return { userInfo, handleUserInfo };
};

export const useUserGender = () => {
  const [gender, setGender] = useState('');

  const handleRadioChange = e => {
    const { value } = e.target;
    setGender(value);
  };

  return { gender, handleRadioChange };
};

export const useQuestionData = () => {
  const [question, setQuestion] = useState([]);
  const [symptom, setSymptom] = useState([]);

  useEffect(() => {
    fetch('/data/questionData.json')
      .then(res => res.json())
      .then(data => {
        setQuestion(data);
      });
  }, []);

  useEffect(() => {
    fetch('/data/symptomData.json')
      .then(res => res.json())
      .then(data => setSymptom(data));
  }, []);

  return { question, symptom };
};
