import { Link } from "react-router-dom";

const toSlug = (str) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9 ]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const ProductCard = ({ product, index }) => {
  if (!product) return null; // QUAN TRỌNG

  return (
    <>
      <Link to={`/${toSlug(product.category)}/${toSlug(product.name)}?id=${product.id}`}>
        <div className="border p-4 rounded shadow hover:bg-red-50 transition-all duration-300 bg-white max-w-[230px] h-[320px] flex flex-col">

          {/* Khu vực ảnh: Giữ nguyên h-40 (~160px) */}
          <div className=" relative w-full h-[160px] mb-3 overflow-hidden rounded flex-shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500"
            />
            <div className="absolute top-0 right-0 bg-gradient-to-t from-red-50 via-red-100 to-red-200 shadow text-white font-bold text-shadow-black px-2 py-0.5 rounded-bl-lg z-10">
              <span className="text-xl">
                {product.price}
              </span>
              <span className="text-sm align-top ml-0.5 underline underline-offset-2">
                đ
              </span>
            </div>
          </div>

          {/* Nội dung text: flex-grow giúp vùng này chiếm không gian còn lại */}
          <div className="flex-grow">
            <h3 className="w-full h-[50px] text-md font-semibold text-gray-800 line-clamp-2">
              {product.name}
            </h3>
            <p className="text-sm font-semibold text-red-300">
              {product.unit} * {product.weight}
            </p>
          </div>

          {/* Nút bấm: Sẽ luôn nằm ở đáy nhờ cấu trúc flex-col */}

          <div className="mt-auto grid grid-cols-2 gap-3 w-full">
            <button className="w-full bg-gradient-to-tr from-gray-100 via-red-50 to-red-100 shadow border text-black text-md px-1 py-1 rounded transition-colors font-medium">
              {Number(product.stock).toLocaleString("en-US")}
            </button>

            <button className={`w-full shadow text-white text-md px-1 py-1 rounded transition-colors font-medium ${product.stock === 0
              ? "bg-gradient-to-t from-red-400 via-red-500 to-red-600 hover:bg-red-700"
              : "bg-gradient-to-t from-green-400 via-green-500 to-green-600 hover:bg-green-700"
              }`}
            >
              {product.stock === 0 ? "Hết hàng" : "Mua ngay"}
            </button>

          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;