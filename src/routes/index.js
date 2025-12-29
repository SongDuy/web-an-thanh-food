import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/home';
import NotFoundPage from '../pages/notFound';
import StaplesPage from '../pages/staples';
import GroceriesPage from '../pages/groceries';
import RankingsPage from '../pages/rankings';
import ProductDetailPage from '../pages/productDetail';
import CartPage from '../pages/cart';
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword"

const AppRoutes = () => {
    return (
        <Routes>
            {/* Trang chủ */}
            <Route path="/" element={<HomePage />} />

            <Route path="/luong-thuc" element={<StaplesPage />} />
            <Route path="/thuc-pham" element={<GroceriesPage />} />
            <Route path="/bang-xep-hang" element={<RankingsPage />} />

            <Route path="/:category/:id" element={<ProductDetailPage />} />

            <Route path="/cart" element={<CartPage />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            {/* Trang 404 */}
            <Route path="/404" element={<NotFoundPage />} />

            {/* Xử lý mọi route không tồn tại */}
            <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
    );
}

export default AppRoutes;