import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { BsShieldPlus } from 'react-icons/bs';
import {
  FaHeartbeat,
  FaHandSparkles,
  FaSquarespace,
  FaEye,
  FaBone,
  FaSuperpowers,
} from 'react-icons/fa';
import { GiCycle, GiLiver } from 'react-icons/gi';
import {
  MdOutlineWaterDrop,
  MdOutlineTimer,
  MdOutlineBloodtype,
} from 'react-icons/md';

export const useProduct = () => {
  const [product, setProduct] = useState([]);
  const [message, setMessage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    fetch(`http://10.58.5.236:8000/products${location.search}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setProduct(data.results);
      });
  }, [location.search]);

  const showMessage = () => {
    setMessage(true);
    setTimeout(() => setMessage(false), 3000);
  };

  const handleAddCart = (index, setAddToCart, handleIsClick) => {
    const data = {
      product_id: product[index].id,
      quantity: 1,
      is_user_survey: 0,
    };
    setAddToCart(prev => !prev);
    handleIsClick();
    setTimeout(handleIsClick, 3000);

    fetch('http://10.58.5.236:8000/carts', {
      method: 'POST',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.XlUzgcSXSZv6CWzSs0ZL_IcaqbukQgMAWMXbbAwOoDs',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(response => {
        if (response.message === 'SUCCESS') {
          showMessage();
        }
      });
  };

  return { product, message, handleAddCart };
};

export const useProductDetail = () => {
  const [productDetail, setProductDetail] = useState([]);
  const params = useParams();
  useEffect(() => {
    fetch(`http://10.58.5.236:8000/products/${params.id}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setProductDetail(data.results);
      });
  }, [params.id]);

  return productDetail;
};

export const icon = {
  항산화: <GiCycle />,
  '높은 혈압감소': <FaHeartbeat />,
  '피부 보습': <MdOutlineWaterDrop />,
  '피부 건강': <FaHandSparkles />,
  면역: <BsShieldPlus />,
  지구력: <MdOutlineTimer />,
  장: <FaSquarespace />,
  눈: <FaEye />,
  '혈액 순환': <MdOutlineBloodtype />,
  뼈: <FaBone />,
  에너지: <FaSuperpowers />,
  간: <GiLiver />,
};
