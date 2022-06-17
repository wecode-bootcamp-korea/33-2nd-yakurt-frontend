import { useState, useEffect } from 'react';
import { IP } from './Fetch';

export const useReview = () => {
  const [review, setReview] = useState([]);
  const [visible, setVisible] = useState(3);

  const showMoreReviews = () => {
    setVisible(prevReview => prevReview + 3);
  };

  useEffect(() => {
    fetch(`${IP}subscriptions/reviews`, {
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        setReview(data.results);
      });
  }, []);

  return { review, visible, showMoreReviews };
};

export const useImageUpload = () => {
  const [images, setImages] = useState([]);
  const maxNumber = 1;

  const onChange = imageList => {
    setImages(imageList);
  };

  return { images, onChange, maxNumber };
};

export const useStarRating = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const stars = Array(5).fill(0);

  const handleClick = value => {
    setCurrentValue(value);
  };

  const handleMouseOver = value => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return {
    currentValue,
    hoverValue,
    stars,
    handleClick,
    handleMouseOver,
    handleMouseLeave,
  };
};

export const useReviewDetail = id => {
  const [reviewDetail, setReviewDetail] = useState([]);

  useEffect(() => {
    fetch(`${IP}subscriptions/review/${id}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setReviewDetail(data.results);
      });
  }, []);

  return { reviewDetail, setReviewDetail };
};
