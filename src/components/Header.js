import { useState, useEffect, useRef } from "react";

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

import { NavLink } from "react-router-dom";

const Header = ({ onOpenSearch, onOpenNotify }) => {

  const [openAccount, setOpenAccount] = useState(false);
  const accountRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        accountRef.current &&
        !accountRef.current.contains(event.target)
      ) {
        setOpenAccount(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full h-[100px] bg-white border-b border-gray-300 text-black flex items-center px-[60px] z-50">
      {/* logo web */}
      <NavLink
        to="/">
        <div className="max-w-[75px] max-h-[75px] min-w-[85px] min-h-[75px] mr-1">
          <img
            src="/logo55.png"
            alt="An Thanh Food"
            className="max-w-[75px] max-h-[75px] min-w-full min-h-full object-contain scale-110"
          />
        </div>
      </NavLink>

      {/* Danh mục header */}
      <nav aria-label="Main navigation">
        <ul className="flex overflow-x-auto gap-5 mx-3 whitespace-nowrap">
          <li>
            <NavLink
              to="/luong-thuc"
              className={({ isActive }) =>
                `uppercase text-lg font-bold transition
                ${isActive ? "text-yellow-500" : "hover:text-yellow-500"}`
              }
            >
              Lương Thực
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/thuc-pham"
              className={({ isActive }) =>
                `uppercase text-lg font-bold transition
                ${isActive ? "text-yellow-500" : "hover:text-yellow-500"}`
              }
            >
              Thực Phẩm
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bang-xep-hang"
              className={({ isActive }) =>
                `uppercase text-lg font-bold transition
                ${isActive ? "text-yellow-500" : "hover:text-yellow-500"}`
              }
            >
              Bảng Xếp Hạng
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Các nút chức năng */}
      <div className="ml-auto flex items-center gap-2">
        <NavLink
          to="/cart"
        >
          <button className="w-[40px] h-[40px] flex items-center justify-center text-black shadow border rounded-full bg-gray-100 hover:bg-gray-200">
            <ShoppingCartOutlinedIcon />
          </button>
        </NavLink>

        <button
          onClick={onOpenNotify}
          className="w-[40px] h-[40px] flex items-center justify-center text-black shadow border rounded-full bg-gray-100 hover:bg-gray-200"
        >
          <NotificationsNoneOutlinedIcon />
        </button>

        {/* <NavLink
          to="/login"
        >
          <button className="flex items-center justify-center gap-2 text-md font-semibold px-4 py-2 rounded-full border shadow bg-gray-100 hover:bg-gray-200 transition">
            Đăng Nhập
          </button>
        </NavLink> */}

        {/* Chức năng tài khoản */}
        <div ref={accountRef} className="relative">
          <button
            onClick={() => setOpenAccount(!openAccount)}
            className="flex items-center justify-center gap-1 text-md font-semibold px-4 py-2 rounded-full border shadow bg-gray-100 hover:bg-gray-200 transition"
          >
            Tài Khoản
          </button>

          {/* Dropdown */}
          {openAccount && (
            <div className="absolute right-0 mt-2 w-56 bg-white border rounded-xl shadow-lg z-50">
              <ul className="px-2 py-2 text-sm flex flex-col gap-2">
                <li className="flex w-full h-[50px] border rounded-md bg-gray-50 shadow items-center justify-center gap-2">
                  <div className="w-[40px] h-[40px] rounded-full bg-blue-100 flex items-center justify-center">
                    <div className="w-[30px] h-[30px] text-blue-600 rounded-full bg-blue-200 flex items-center justify-center">
                      <SentimentVerySatisfiedIcon />
                    </div>
                  </div>
                  <span className="text-black text-md font-medium">
                    Lê Hoàng Song Duy
                  </span>
                </li>
                <li>
                  <NavLink
                    to="/account/profile"
                    className="flex w-full h-[40px] items-center px-2 py-2 gap-5 hover:rounded-md hover:bg-gray-100"
                    onClick={() => setOpenAccount(false)}
                  >
                    <AccountCircleIcon />
                    <span> Thông tin tài khoản </span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/account/orders"
                    className="flex w-full h-[40px] items-center px-2 py-2 gap-5 hover:rounded-md hover:bg-gray-100"
                    onClick={() => setOpenAccount(false)}
                  >
                    <InventoryIcon />
                    <span> Đơn hàng đã mua </span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/account/address"
                    className="flex w-full h-[40px] items-center px-2 py-2 gap-5 hover:rounded-md hover:bg-gray-100"
                    onClick={() => setOpenAccount(false)}
                  >
                    <HomeIcon />
                    <span> Địa chỉ nhận hàng </span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/account/favorites"
                    className="flex w-full h-[40px] items-center px-2 py-2 gap-5 hover:rounded-md hover:bg-gray-100"
                    onClick={() => setOpenAccount(false)}
                  >
                    <FavoriteIcon />
                    <span> Sản phẩm yêu thích </span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/account/settings"
                    className="flex w-full h-[40px] items-center px-2 py-2 gap-5 hover:rounded-md hover:bg-gray-100"
                    onClick={() => setOpenAccount(false)}
                  >
                    <SettingsIcon />
                    <span> Cài đặt hệ thống </span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/"
                    className="flex w-full h-[40px] items-center justify-center px-2 py-2 hover:rounded-md hover:bg-red-50 hover:shadow text-md font-semibold text-red-500"
                    onClick={() => setOpenAccount(false)}
                  >
                    Đăng Xuất
                  </NavLink>
                </li>
              </ul>
            </div>
          )}

        </div>

        <button
          onClick={onOpenSearch}
          className="w-[40px] h-[40px] flex items-center justify-center text-black shadow border rounded-full bg-gray-100 hover:bg-gray-200"
        >
          <SearchIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;