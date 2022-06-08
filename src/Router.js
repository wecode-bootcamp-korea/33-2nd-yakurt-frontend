import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Products from './pages/products/Products';
import ProductDetail from './pages/productDetail/ProductDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/detail" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
