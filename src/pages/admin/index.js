import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

// Import Icons
import PieChartIcon from '@mui/icons-material/PieChart';
import PeopleIcon from '@mui/icons-material/People';
import CollectionsIcon from '@mui/icons-material/Collections';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
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
        { id: 'dashboard', label: '대시보드', path: '/admin/dashboard', icon: <PieChartIcon /> },
        { id: 'banners', label: '배너', path: '/admin/banners', icon: <CollectionsIcon /> },
        { id: 'about', label: '정보', path: '/admin/About', icon: <InfoIcon /> },
        { id: 'terms', label: '약관', path: '/admin/Terms', icon: <GavelIcon /> },
        { id: 'privacy', label: '사생활', path: '/admin/Privacy', icon: <PrivacyTipIcon /> },
        { id: 'advertise', label: '광고하다', path: '/admin/Advertise', icon: <FeaturedVideoIcon /> },
        { id: 'contact', label: '연락처', path: '/admin/Contact', icon: <ContactsIcon /> },
        { id: 'users', label: '사용자', path: '/admin/users', icon: <PeopleIcon /> },
        { id: 'originals', label: '오리지널', path: '/admin/originals', icon: <AutoStoriesIcon /> },
        { id: 'videos', label: '비디오', path: '/admin/videos', icon: <VideoLibraryIcon /> },
        { id: 'payments', label: '결제', path: '/admin/payments', icon: <AttachMoneyIcon /> },
        { id: 'bank', label: '수신 계좌', path: '/admin/bank', icon: <AccountBalanceIcon /> },
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
        <div className="w-full h-screen border bg-white">
            <div className="flex h-full">
                
                {/* Sidebar */}
                <div className="w-[300px] h-full py-5 bg-gray-100 border-r">
                    <div className="w-full px-5">
                        <div className="w-full h-[50px] flex items-center border-b-2">
                            <h1 className="font-bold text-xl text-gray-800">관리자</h1>
                        </div>
                    </div>

                    <div className="w-full px-2">
                        <div className="w-full h-[calc(100vh-120px)] px-3 my-5 overflow-y-auto custom-scrollbar">
                            <ul className="grid grid-cols-1 gap-2 pb-5">
                                {menuItems.map((item) => (
                                    <li
                                        key={item.id}
                                        onClick={() => handleNavigation(item.id, item.path)}
                                        className={`w-full h-[50px] cursor-pointer px-5 py-2 shadow-sm flex items-center rounded transition-all ${
                                            isTitle === item.id 
                                            ? 'text-yellow-600 bg-yellow-50 border-l-4 border-yellow-500 font-bold' 
                                            : 'hover:text-yellow-500 bg-white text-gray-600'
                                        }`}
                                    >
                                        <span className="mr-4">{item.icon}</span>
                                        <span className="text-sm">{item.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 h-full px-8 py-5 bg-white overflow-auto">
                    
                    {/* Header */}
                    <div className="w-full h-[50px] flex items-center border-b-2 mb-5">
                        <div className="flex items-center text-gray-600">
                            <h1 className="font-semibold">관리자</h1>
                            <NavigateNextIcon className="mx-1" />
                            <span className="font-semibold text-yellow-500">
                                {currentMenuLabel}
                            </span>
                        </div>
                        
                        {/* Mock User Button */}
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
                </div>

            </div>
        </div>
    );
}

export default AdminPage;