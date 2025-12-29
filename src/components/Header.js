import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

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

        <NavLink
          to="/login"
        >
          <button className="flex items-center justify-center gap-2 text-md font-semibold px-4 py-2 rounded-full border shadow bg-gray-100 hover:bg-gray-200 transition">
            Đăng Nhập
          </button>
        </NavLink>

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