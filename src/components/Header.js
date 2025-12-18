import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full h-[100px] bg-white border-b border-gray-300 text-black flex items-center px-[60px]">
      {/* logo web */}
      <NavLink
        to="/">
        <div className="w-[85px] h-[75px] mr-1">
          <img
            src="/logo55.png"
            alt="An Thanh Food"
            className="w-full h-full object-cover scale-110"
          />
        </div>

      </NavLink>

      {/* Danh mục header */}
      <nav aria-label="Main navigation">
        <ul className="flex overflow-x-auto gap-5 mx-3 whitespace-nowrap">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `uppercase text-lg font-bold transition
                ${isActive ? "text-yellow-500" : "hover:text-yellow-500"}`
              }
            >
              Trang Chủ
            </NavLink>
          </li>
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
        </ul>
      </nav>

      {/* Các nút chức năng */}

    </header>
  );
};

export default Header;