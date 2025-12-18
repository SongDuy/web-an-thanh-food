const ProductCard = () => {
  return (
    <div className="border p-4 rounded hover:shadow-md hover:bg-gray-50 transition-all duration-300">
      <div className="h-40 bg-gray-200 mb-2"></div>
      <h3 className="font-semibold">Rau cải xanh</h3>
      <p className="text-green-600">25.000 ₫</p>
      <button className="mt-2 bg-green-500 text-white px-3 py-1 rounded">
        Thêm vào giỏ
      </button>
    </div>
  );
}

export default ProductCard;