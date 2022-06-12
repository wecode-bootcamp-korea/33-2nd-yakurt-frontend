import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './pages/Main';
import Cart from './pages/Cart/Cart';
import EmptyCart from './pages/Cart/EmptyCart';
import Products from './pages/products/Products';
import ProductDetail from './pages/productDetail/ProductDetail';
import Survey from './pages/survey/Survey';
import Review from './pages/review/Review';
import ReviewDetail from './pages/reviewDetail/ReviewDetail';
import CustomerReview from './pages/customerReview/CustomerReview';
import Recommend from './pages/recommend/Recommend';
import Order from './pages/order/Order';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/EmptyCart" element={<EmptyCart />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/detail" element={<ProductDetail />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/review" element={<Review />} />
        <Route path="/review/detail" element={<ReviewDetail />} />
        <Route path="/review/customer" element={<CustomerReview />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
