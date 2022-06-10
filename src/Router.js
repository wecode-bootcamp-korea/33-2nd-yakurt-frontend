import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './pages/Main';
import Cart from './pages/Cart/Cart';
import TempCart from './pages/Cart/TempCart';
import Products from './pages/products/Products';
import ProductDetail from './pages/productDetail/ProductDetail';
import Survey from './pages/survey/Survey';
import Review from './pages/review/Review';
import ReviewDetail from './pages/reviewDetail/ReviewDetail';
import CustomerReview from './pages/customerReview/CustomerReview';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/tempcart" element={<TempCart />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/detail" element={<ProductDetail />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/review" element={<Review />} />
        <Route path="/review/detail" element={<ReviewDetail />} />
        <Route path="/review/customer" element={<CustomerReview />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
