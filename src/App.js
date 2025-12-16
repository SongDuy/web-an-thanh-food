import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import HomePage from './pages/home';
import NotFoundPage from './pages/notFound';

function App() {
  useEffect(() => {
    document.title = 'An Thanh Food';
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Xử lý trang lỗi */}
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
