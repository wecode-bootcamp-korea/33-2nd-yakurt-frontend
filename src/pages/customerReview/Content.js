import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useImageUpload, useStarRating } from '../../hooks/useReview';
import ImageUploading from 'react-images-uploading';
import styled from 'styled-components';
import { FaPlus, FaTrashAlt, FaStar } from 'react-icons/fa';
import { GrUpdate } from 'react-icons/gr';

const Content = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { images, maxNumber, onChange } = useImageUpload();
  console.log(location);
  const {
    currentValue,
    hoverValue,
    stars,
    handleClick,
    handleMouseOver,
    handleMouseLeave,
  } = useStarRating();
  const [userInput, setUserInput] = useState('');

  const submitForm = e => {
    e.preventDefault();
    console.log(location.state);
    const formData = new FormData();
    formData.append('file', images[0].file);
    formData.append('content', userInput);

    fetch(
      `http://10.58.5.236:8000/subscriptions/${location.state[0].subscription_id}/review`,
      {
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('access_token'),
        },
        body: formData,
      }
    );
    navigate('/subscriptions/reviews');
  };

  return (
    <Form onSubmit={submitForm}>
      <Header>
        <span>고객님</span>의 소중한 리뷰를 남겨주세요!
      </Header>

      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <ImageInput>
            <ImgUploadBtn
              style={isDragging ? { color: 'red' } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              <FaPlus />
            </ImgUploadBtn>
            <Overlay />
            {imageList.map((image, index) => (
              <div key={index}>
                <Image src={image.data_url} alt="" width="100" />
                <div>
                  <UpdateBtn onClick={() => onImageUpdate(index)}>
                    <GrUpdate />
                  </UpdateBtn>
                  <TrashBtn onClick={() => onImageRemove(index)}>
                    <FaTrashAlt />
                  </TrashBtn>
                </div>
              </div>
            ))}
          </ImageInput>
        )}
      </ImageUploading>

      <ReviewInput
        required
        value={userInput}
        onChange={e => setUserInput(e.target.value)}
      />

      <Stars>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              style={{ marginRight: 8, cursor: 'pointer' }}
              color={
                (hoverValue || currentValue) > index
                  ? 'rgb(240, 86, 59)'
                  : 'rgb(189, 195, 199)'
              }
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
      </Stars>

      <Button type="submit">등록</Button>
    </Form>
  );
};

const Form = styled.form``;

const Header = styled.h1`
  font-size: 1.3rem;
  font-weight: 700;

  span {
    color: #7bed9f;
  }
`;

const ImageInput = styled.div`
  position: relative;
  width: 100%;
  height: 9rem;
  margin-top: 2rem;
`;

const ImgUploadBtn = styled.button`
  position: absolute;
  left: 25%;
  width: 8rem;
  height: 8rem;
  border: 2px solid #bdc3c7;
  border-radius: 50%;
  color: rgb(240, 86, 59);
  font-size: 1.4rem;
`;

const Image = styled.img`
  position: absolute;
  right: 25%;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  right: 25%;
  width: 8rem;
  height: 8rem;
  border: 2px solid #bdc3c7;
  border-radius: 50%;
`;

const UpdateBtn = styled.button`
  position: absolute;
  top: 35%;
  left: 17%;
  font-size: 1.2rem;
`;

const TrashBtn = styled.button`
  position: absolute;
  top: 38%;
  right: 17%;
  font-size: 1.2rem;
`;

const Stars = styled.div`
  padding: 0 35%;
`;

const ReviewInput = styled.textarea.attrs({
  maxlength: '20',
  placeholder: '상품 리뷰를 작성해주세요.',
})`
  width: 100%;
  height: 12rem;
  margin: 1.5rem 0;
  padding: 0.5rem;
  border: 2px solid #bdc3c7;
  border-radius: 10px;
  font-size: 0.9rem;
  &:active {
    border: 2px solid rgb(240, 86, 59);
  }
`;

const Button = styled.button.attrs({
  type: 'submit',
})`
  width: 16rem;
  height: 3rem;
  margin: 1rem 25%;
  padding: 0.5rem;
  border-radius: 50px;
  background-color: rgb(240, 86, 59);
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 700;
`;

export default Content;
