import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

import AdminLayout from '../../layouts/AdminLayout';

// Import Icons
import PieChartIcon from '@mui/icons-material/PieChart';
import PeopleIcon from '@mui/icons-material/People';
import CollectionsIcon from '@mui/icons-material/Collections';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CategoryIcon from '@mui/icons-material/Category';
import SettingsIcon from '@mui/icons-material/Settings';
import InventoryIcon from '@mui/icons-material/Inventory';
import InfoIcon from '@mui/icons-material/Info';
import GavelIcon from '@mui/icons-material/Gavel';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
import ContactsIcon from '@mui/icons-material/Contacts';

const AdminPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Dữ liệu giả định thay thế cho Redux/Firebase
  const mockAdmin = { displayName: "Admin User" };
  const [isTitle, setIsTitle] = useState('dashboard');

  // Danh sách menu để dễ quản lý giao diện
  const menuItems = [
    // --- NHÓM TỔNG QUAN ---
    { id: 'dashboard', label: 'Bảng điều khiển', path: '/admin/dashboard', icon: <PieChartIcon /> },

    // --- NHÓM KINH DOANH & NGƯỜI DÙNG ---
    { id: 'customers', label: 'Quản lý người dùng', path: '/admin/customers', icon: <PeopleIcon /> },
    { id: 'orders', label: 'Quản lý đơn hàng', path: '/admin/orders', icon: <InventoryIcon /> },

    // --- NHÓM NỘI DUNG ---
    { id: 'categories', label: 'Quản lý danh mục', path: '/admin/categories', icon: <CategoryIcon /> },
    { id: 'products', label: 'Quản lý sản phẩm', path: '/admin/products', icon: <FastfoodIcon /> },
    { id: 'banners', label: 'Quản lý Banner', path: '/admin/banners', icon: <CollectionsIcon /> },

    // --- NHÓM TRUYỀN THÔNG ---
    { id: 'advertise', label: 'Quản lý quảng cáo', path: '/admin/advertise', icon: <FeaturedVideoIcon /> },
    { id: 'contact', label: 'Liên hệ hỗ trợ', path: '/admin/contact', icon: <ContactsIcon /> },
    { id: 'about', label: 'Thông tin giới thiệu', path: '/admin/about', icon: <InfoIcon /> },

    // --- NHÓM HỆ THỐNG & PHÁP LÝ ---
    { id: 'terms', label: 'Điều khoản sử dụng', path: '/admin/terms', icon: <GavelIcon /> },
    { id: 'privacy', label: 'Chính sách bảo mật', path: '/admin/privacy', icon: <PrivacyTipIcon /> },
    { id: 'settings', label: 'Cài đặt hệ thống', path: '/admin/settings', icon: <SettingsIcon /> },
  ];

  const capitalizeFirstLetter = (string) => {
    return string?.charAt(0)?.toUpperCase() + string?.slice(1)?.toLowerCase();
  };

  useEffect(() => {
    const path = location.pathname.split('/').pop().toLowerCase();
    setIsTitle(path || 'dashboard');
  }, [location]);

  const handleNavigation = (id, path) => {
    setIsTitle(id);
    navigate(path);
  };

  // Tìm tên tiếng Hàn hiển thị trên Breadcrumb
  const currentMenuLabel = menuItems.find(item => item.id === isTitle)?.label || capitalizeFirstLetter(isTitle);

  return (
    <AdminLayout
      menuItems={menuItems}         // PHẢI CÓ DÒNG NÀY
      isTitle={isTitle}             // PHẢI CÓ DÒNG NÀY
      handleNavigation={handleNavigation} // PHẢI CÓ DÒNG NÀY
    >
      {/* Header */}
      <div className="w-full h-[50px] flex items-center border-b-2 mb-5">
        <div className="flex items-center text-gray-600">
          <h1 className="font-semibold">Admin</h1>
          <NavigateNextIcon className="mx-1" />
          <span className="font-semibold text-yellow-500">
            {currentMenuLabel}
          </span>
        </div>

        <div className="ml-auto">
          <button className="px-4 py-1.5 bg-gray-50 border border-gray-300 rounded-full font-medium text-sm text-gray-600 hover:bg-gray-100 transition">
            {mockAdmin.displayName} (Log Out)
          </button>
        </div>
      </div>

      {/* Sub-route Content */}
      <div className="w-full">
        <Outlet />
      </div>
    </AdminLayout>
  );
}

export default AdminPage;