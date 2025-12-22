import { Link } from "react-router-dom";

const ProductCard = () => {
  const productImg = "https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=2042&auto=format&fit=crop";

  return (
    <Link to="/Lương-Thực/Chi-Tiết">
      <div className="border p-4 rounded hover:shadow-md hover:bg-red-50 transition-all duration-300 bg-white max-w-[230px] h-[320px] flex flex-col">

        {/* Khu vực ảnh: Giữ nguyên h-40 (~160px) */}
        <div className=" relative w-full h-[160px] mb-3 overflow-hidden rounded flex-shrink-0">
          <img
            src={productImg}
            alt="Rau cải xanh"
            className="w-full h-full object-cover transition-transform duration-500"
          />
          <div className="absolute top-0 right-0 bg-yellow-500 text-red-100 font-bold text-shadow-black px-3 py-0.5 rounded-bl-xl z-10">
            <span className="text-xl">
              0
            </span>
            <span className="text-sm align-top ml-0.5 underline underline-offset-2">
              đ
            </span>

          </div>
        </div>

        {/* Nội dung text: flex-grow giúp vùng này chiếm không gian còn lại */}
        <div className="flex-grow">
          <h3 className="text-md font-semibold text-gray-800 line-clamp-2">Rau cải xanh Rau cải xanh Rau cải xanh Rau cải xanh Rau cải xanh</h3>
          <p className="text-sm font-semibold text-red-300">1 gói / 1kg</p>
        </div>

        {/* Nút bấm: Sẽ luôn nằm ở đáy nhờ cấu trúc flex-col */}
        <div className="mt-auto grid grid-cols-2 gap-3 w-full">
          <button className="w-full bg-gray-100 shadow border text-black text-md px-1 py-1 rounded transition-colors font-medium">
            {Number(10000000).toLocaleString("vi-VN")}
          </button>
          {/* <button className="bg-green-500 hover:bg-green-600 shadow text-white text-shadow-black text-md px-1 py-1 rounded transition-colors font-medium ">
            Mua ngay
          </button> */}
          <button className="w-full bg-red-500 hover:bg-red-600 shadow text-white text-md px-1 py-1 rounded transition-colors font-medium ">
            Hết hàng
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;