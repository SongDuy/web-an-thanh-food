import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full h-[100px] bg-white text-black flex items-center px-[60px]">
      {/* logo web */}
      <img
        src={``}
        alt="An Thanh Food"
        className="w-[75px] mr-3 bg-gray-200"
      />

      {/* Danh mục header */}
      <nav aria-label="Main navigation">
        <ul className="flex overflow-x-auto gap-5 mx-3 whitespace-nowrap">
          <li>
            <Link
              to="/"
              className="uppercase text-lg font-bold text-10 hover:text-yellow-500">
              Trang Chủ
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="uppercase text-lg font-bold text-10 hover:text-yellow-500">
              Lương Thực
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="uppercase text-lg font-bold text-10 hover:text-yellow-500">
              Thực Phẩm
            </Link>
          </li>
        </ul>
      </nav>

      {/* Các nút chức năng */}

    </header>
  );
};

export default Header;