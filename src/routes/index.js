import { Routes, Route, Navigate } from 'react-router-dom';

import HomePage from '../pages/home';

import StaplesPage from '../pages/staples';
import GroceriesPage from '../pages/groceries';
import RankingsPage from '../pages/rankings';

import ProductDetailPage from '../pages/productDetail';
import CartPage from '../pages/cart';

import LoginPage from "../pages/auth/Login";
import RegisterPage from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";

import ProfilePage from '../pages/account/Profile';
import OrdersPage from '../pages/account/Orders';
import AddressPage from '../pages/account/Address';
import FavoritesPage from '../pages/account/Favorites';
import SettingsPage from '../pages/account/Settings';

import NotFoundPage from '../pages/notFound';

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

            {/* Danh mục Tài Khoản */}
            <Route path="/account/profile" element={<ProfilePage />} />
            <Route path="/account/orders" element={<OrdersPage />} />
            <Route path="/account/address" element={<AddressPage />} />
            <Route path="/account/favorites" element={<FavoritesPage />} />
            <Route path="/account/settings" element={<SettingsPage />} />

            {/* Auth - page */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* 404 */}
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
    );
};

export default AppRoutes;