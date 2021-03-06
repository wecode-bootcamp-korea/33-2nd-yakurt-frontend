import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IP } from './Fetch';

export const useCustomerReview = () => {
  const [userReview, setUserReview] = useState();
  const params = useParams();

  useEffect(() => {
    fetch(`${IP}products/list/${params.id}`)
      .then(response => {
        return response.json();
      })
      .then(data => setUserReview(data));
  }, [params.id]);

  return { userReview, setUserReview };
};

export const useExit = () => {
  const [showForm, setShowForm] = useState(true);
  const handleClose = () => setShowForm(false);

  return { showForm, handleClose };
};
