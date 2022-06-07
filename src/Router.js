import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useCallback } from 'react';
import Nav from './components/Nav';
import Main from './pages/Main';

const Router = () => {
  const [category, setCategory] = useState('');
  const handleSelect = useCallback(category => setCategory(category), []);

  return (
    <BrowserRouter>
      <Nav category={category} handleSelect={handleSelect} />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
