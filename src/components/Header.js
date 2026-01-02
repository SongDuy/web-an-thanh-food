import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import { NavLink } from "react-router-dom";

const Header = ({ onOpenSearch, onOpenNotify }) => {

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

        <div className="relative group">
          <button className="flex items-center justify-center gap-1 text-md font-semibold px-4 py-2 rounded-full border shadow bg-gray-100 hover:bg-gray-200 transition">
            {/* <AccountCircleOutlinedIcon /> */}
            Tài Khoản
          </button>

          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-56 bg-white border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <ul className="py-2 text-sm">
              <li>
                <NavLink
                  to="/account/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  👤 Thông tin tài khoản
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/account/orders"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  📦 Đơn hàng đã mua
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/account/address"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  📍 Địa chỉ nhận hàng
                </NavLink>
              </li>
               <li>
                <NavLink
                  to="/account/address"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  📍 Sản phẩm yêu thích
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/account/settings"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  ⚙️ Cài đặt
                </NavLink>
              </li>
               <li>
                <NavLink
                  to="/"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Đăng xuất
                </NavLink>
              </li>
            </ul>
          </div>
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