const ProductCard = () => {
  const productImg = "https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=2042&auto=format&fit=crop";

  return (
    <div className="border p-4 rounded hover:shadow-md hover:bg-red-50 transition-all duration-300 bg-white max-w-[250px] h-[320px] flex flex-col">
      
      {/* Khu vực ảnh: Giữ nguyên h-40 (~160px) */}
      <div className="w-full h-[160px] mb-3 overflow-hidden rounded flex-shrink-0">
        <img 
          src={productImg} 
          alt="Rau cải xanh" 
          className="w-full h-full object-cover transition-transform duration-500"
        />
      </div>

      {/* Nội dung text: flex-grow giúp vùng này chiếm không gian còn lại */}
      <div className="flex-grow">
        <h3 className="font-semibold text-gray-800 line-clamp-2">Rau cải xanh</h3>
        <p className="text-green-600 font-bold mt-1">25.000 ₫</p>
      </div>

      {/* Nút bấm: Sẽ luôn nằm ở đáy nhờ cấu trúc flex-col */}
      <button className="mt-auto w-full bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded transition-colors duration-300 font-medium text-sm">
        Thêm vào giỏ
      </button>
    </div>
  );
}

export default ProductCard;