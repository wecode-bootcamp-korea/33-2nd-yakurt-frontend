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
