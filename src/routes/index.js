import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/home';
import NotFoundPage from '../pages/notFound';
import StaplesPage from '../pages/staples';
import GroceriesPage from '../pages/groceries';
import ProductDetailPage from '../pages/productDetail';
const AppRoutes = () => {
    return (
        <Routes>
            {/* Trang chủ */}
            <Route path="/" element={<HomePage />} />
            <Route path="/Lương-Thực" element={<StaplesPage />} />
            <Route path="/Thực-Phẩm" element={<GroceriesPage />} />
            <Route path="/Chi-Tiet" element={<GroceriesPage />} />

            {/* Trang 404 */}
            <Route path="/404" element={<NotFoundPage />} />

            {/* Xử lý mọi route không tồn tại */}
            <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
    );
}

export default AppRoutes;