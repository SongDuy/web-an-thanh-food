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

import AccountProfilePage from '../pages/account/Profile';
import AccountOrdersPage from '../pages/account/Orders';
import AccountAddressPage from '../pages/account/Address';
import AccountFavoritesPage from '../pages/account/Favorites';
import AccountSettingsPage from '../pages/account/Settings';

import AdminPage from '../pages/admin'
import AdminBannersPage from '../pages/admin/banners';
import AdminCategoriesPage from '../pages/admin/categories';
import AdminCustomersPage from '../pages/admin/customers';
import AdminOrdersPage from '../pages/admin/orders';
import AdminProductsPage from '../pages/admin/products';
import AdminSettingsPage from '../pages/admin/settings';
import AdminLoginPage from '../pages/admin/auth/Login';
import AdminDashboardPage from '../pages/admin/dashboard';

import NotFoundPage from '../pages/notFound';

const AppRoutes = () => {

    return (
        <Routes>
            {/* Home - page */}
            <Route path="/" element={<HomePage />} />

            {/* Auth - page */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Danh mục - page */}
            <Route path="/luong-thuc" element={<StaplesPage />} />
            <Route path="/thuc-pham" element={<GroceriesPage />} />
            <Route path="/bang-xep-hang" element={<RankingsPage />} />

            {/* Giỏ hàng - page */}
            <Route path="/cart" element={<CartPage />} />

            {/* Chi tiết sản phẩm - page */}
            <Route path="/:category/:id" element={<ProductDetailPage />} />

            {/* Danh mục Account - page */}
            <Route path="/account/profile" element={<AccountProfilePage />} />
            <Route path="/account/orders" element={<AccountOrdersPage />} />
            <Route path="/account/address" element={<AccountAddressPage />} />
            <Route path="/account/favorites" element={<AccountFavoritesPage />} />
            <Route path="/account/settings" element={<AccountSettingsPage />} />

            {/* Admin - page */}
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route path="/admin/banners" element={<AdminBannersPage />} />
            <Route path="/admin/categories" element={<AdminCategoriesPage />} />
            <Route path="/admin/customers" element={<AdminCustomersPage />} />
            <Route path="/admin/orders" element={<AdminOrdersPage />} />
            <Route path="/admin/products" element={<AdminProductsPage />} />
            <Route path="/admin/settings" element={<AdminSettingsPage />} />
            <Route path="/admin/dashboard" element={<AdminDashboardPage />} />

            {/*Không tìm thấy trang 404 */}
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
    );
};

export default AppRoutes;