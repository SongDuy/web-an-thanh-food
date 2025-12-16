import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

// import NotFoundPage from './pages/notFound';

function App() {
  useEffect(() => {
    document.title = 'An Thanh Food';
  }, []);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
