import { useState, useEffect } from 'react';

export const useReview = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch('/data/Review.json')
      .then(response => {
        return response.json();
      })
      .then(data => setReview(data));
  }, []);

  return { review };
};
