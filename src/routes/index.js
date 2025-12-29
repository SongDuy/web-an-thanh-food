import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
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

    const location = useLocation();
    const background = location.state?.background;

    return (
        <>
            {/* Routes chính */}
            <Routes location={background || location}>
                <Route path="/" element={<HomePage />} />

                <Route path="/luong-thuc" element={<StaplesPage />} />
                <Route path="/thuc-pham" element={<GroceriesPage />} />
                <Route path="/bang-xep-hang" element={<RankingsPage />} />

                <Route path="/:category/:id" element={<ProductDetailPage />} />
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

            {/* Auth - modal */}
            {background && (
                <Routes>
                    <Route path="/login" element={<LoginPage isModal />} />
                    <Route path="/register" element={<RegisterPage isModal />} />
                </Routes>
            )}
        </>
    );
};

export default AppRoutes;