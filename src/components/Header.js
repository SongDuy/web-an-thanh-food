import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full h-[100px] bg-white border-b border-gray-300 text-black flex items-center px-[60px]">
      {/* logo web */}
      <NavLink
        to="/">
        <div className="max-w-[85px] max-h-[75px] min-w-[85px] min-h-[75px] mr-1">
          <img
            src="/logo55.png"
            alt="An Thanh Food"
            className="max-w-[85px] max-h-[75px] min-w-full min-h-full object-cover scale-110"
          />
        </div>

      </NavLink>

      {/* Danh mục header */}
      <nav aria-label="Main navigation">
        <ul className="flex overflow-x-auto gap-5 mx-3 whitespace-nowrap">
          {/* <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `uppercase text-lg font-bold transition
                ${isActive ? "text-yellow-500" : "hover:text-yellow-500"}`
              }
            >
              Trang Chủ
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/Lương-Thực"
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
              to="/Thực-Phẩm"
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
              to="/Thực-Phẩm"
              className={({ isActive }) =>
                `uppercase text-lg font-bold transition
                ${isActive ? "text-yellow-500" : "hover:text-yellow-500"}`
              }
            >
              Y Tế
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Các nút chức năng */}
      <div className="ml-auto">
        <button className="w-[40px] h-[40px] text-black shadow border rounded-full bg-gray-100 hover:bg-gray-200 mr-2">
          <ShoppingCartOutlinedIcon />
        </button>

        <button className="text-white font-semibold bg-black px-3 py-2 rounded-full mr-2">
          Đăng nhập
        </button>

        <button className="w-[40px] h-[40px] rounded-full border shadow bg-gray-100 hover:bg-gray-200">
          <SearchIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;