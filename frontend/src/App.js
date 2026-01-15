import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

// import NotFoundPage from './pages/notFound';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
