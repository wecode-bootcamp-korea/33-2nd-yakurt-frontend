import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './pages/Main';
import Cart from './pages/Cart/Cart';
import Products from './pages/products/Products';
import ProductDetail from './pages/productDetail/ProductDetail';
import Survey from './pages/survey/Survey';
import Review from './pages/review/Review';
import ReviewDetail from './pages/reviewDetail/ReviewDetail';
import CustomerReview from './pages/customerReview/CustomerReview';
import Recommend from './pages/recommend/Recommend';
import Order from './pages/order/Order';
import Login from './pages/Login/Login';
import Mypage from './pages/mypage/Mypage';
import KakaoLogin from './pages/Login/KakaoLogin';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/reviews" element={<Review />} />
        <Route path="/reviews/:id" element={<ReviewDetail />} />
        <Route path="/review/customer" element={<CustomerReview />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage/*" element={<Mypage />} />
        <Route path="/kakaoLogin" element={<KakaoLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
