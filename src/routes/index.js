import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/home';
import NotFoundPage from '../pages/notFound';
import StaplesPage from '../pages/staples';
import GroceriesPage from '../pages/groceries';
import RankingsPage from '../pages/rankings';
import ProductDetailPage from '../pages/productDetail';
import CartPage from '../pages/cart';
import LoginPage from "../pages/auth/Login";
import RegisterPage from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword"

const AppRoutes = () => {

    return (
        <Routes>
            {/* Home - page */}
            <Route path="/" element={<HomePage />} />

            {/* Danh mục - page */}
            <Route path="/luong-thuc" element={<StaplesPage />} />
            <Route path="/thuc-pham" element={<GroceriesPage />} />
            <Route path="/bang-xep-hang" element={<RankingsPage />} />

            {/* Chi tiết sản phẩm - page */}
            <Route path="/:category/:id" element={<ProductDetailPage />} />

            {/* Giỏ hàng - page */}
            <Route path="/cart" element={<CartPage />} />

            {/* Auth - page */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            {/* 404 */}
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
    );
};

export default AppRoutes;