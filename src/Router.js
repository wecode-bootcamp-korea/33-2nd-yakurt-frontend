import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Cart from './pages/Cart/Cart';
import TempCart from './pages/Cart/TempCart';
import Products from './pages/products/Products';
import ProductDetail from './pages/productDetail/ProductDetail';
import Survey from './pages/survey/Survey';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/tempcart" element={<TempCart />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/detail" element={<ProductDetail />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
