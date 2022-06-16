import { useState, useEffect } from 'react';

export const useReview = () => {
  const [review, setReview] = useState([]);
  const [visible, setVisible] = useState(3);

  const showMoreReviews = () => {
    setVisible(prevReview => prevReview + 3);
  };

  useEffect(() => {
    fetch(`http://10.58.5.236:8000/subscriptions/reviews`, {
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.XlUzgcSXSZv6CWzSs0ZL_IcaqbukQgMAWMXbbAwOoDs',
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
