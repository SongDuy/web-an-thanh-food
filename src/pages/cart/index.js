const cartItems = [
  {
    id: 1,
    name: "Tai nghe Bluetooth Sony",
    price: 1200000,
    quantity: 1,
    image: "https://via.placeholder.com/120",
  },
  {
    id: 2,
    name: "Chuột không dây Logitech",
    price: 650000,
    quantity: 2,
    image: "https://via.placeholder.com/120",
  },
];

const formatPrice = (price) =>
  price.toLocaleString("vi-VN") + "₫";

const CartPage = () => {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-6 text-3xl font-bold flex items-center gap-2">
          🛒 Giỏ hàng
        </h1>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Danh sách sản phẩm */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 rounded-xl object-cover"
                />

                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">
                    {formatPrice(item.price)}
                  </p>

                  <div className="mt-3 flex items-center gap-2">
                    <button className="h-8 w-8 rounded border text-lg">
                      −
                    </button>
                    <span className="w-8 text-center">
                      {item.quantity}
                    </span>
                    <button className="h-8 w-8 rounded border text-lg">
                      +
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <p className="font-semibold">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                  <button className="text-red-500 hover:text-red-600">
                    🗑
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Tóm tắt đơn hàng */}
          <div className="h-fit rounded-2xl bg-white p-6 shadow">
            <h2 className="mb-4 text-xl font-semibold">
              Tóm tắt đơn hàng
            </h2>

            <div className="space-y-3">
              <div className="flex justify-between text-gray-600">
                <span>Tạm tính</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Phí vận chuyển</span>
                <span>Miễn phí</span>
              </div>

              <hr />

              <div className="flex justify-between text-lg font-bold">
                <span>Tổng cộng</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>

              <button className="mt-4 w-full rounded-xl bg-black py-3 text-lg text-white hover:bg-gray-800">
                Tiến hành thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
