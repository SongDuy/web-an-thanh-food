import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ProductDetailPage = () => {
    const [activeImage, setActiveImage] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const product = {
        name: "Gạo Lứt Huyết Rồng Cao Cấp",
        category: "Lương Thực Hữu Cơ",
        price: 155000,
        images: [
            "/path-to-image1.jpg",
            "/path-to-image2.jpg",
            "/path-to-image3.jpg",
        ],
        description:
            "Gạo lứt huyết rồng được canh tác hữu cơ, giàu chất xơ, vitamin và khoáng chất, hỗ trợ tim mạch và giảm cân.",
        benefits: [
            "Giàu chất xơ, tốt cho tiêu hóa",
            "Hỗ trợ giảm cân tự nhiên",
            "Không chất bảo quản",
            "Phù hợp cho người ăn kiêng",
        ],
    };

    return (
        <div className="bg-[#fafafa] min-h-screen">
            <Header />

            <main className="max-w-[1400px] mx-auto px-6 py-12">
                {/* Breadcrumb */}
                <div className="text-sm text-gray-500 mb-8">
                    Trang chủ / {product.category} /{" "}
                    <span className="text-gray-900 font-medium">
                        {product.name}
                    </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* IMAGE GALLERY */}
                    <div className="lg:col-span-5 flex gap-4">
                        <div className="flex flex-col gap-4">
                            {product.images.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveImage(i)}
                                    className={`w-20 h-20 rounded-lg overflow-hidden border
                                        ${activeImage === i
                                            ? "border-green-600"
                                            : "border-gray-200"
                                        }`}
                                >
                                    <img
                                        src={img}
                                        alt="ảnh"
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>

                        <div className="flex-1 bg-white rounded-2xl overflow-hidden shadow-sm">
                            <img
                                src={product.images[activeImage]}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* PRODUCT INFO */}
                    <div className="lg:col-span-4">
                        <span className="text-green-700 uppercase tracking-widest text-xs font-bold">
                            {product.category}
                        </span>

                        <h1 className="text-4xl font-semibold text-gray-900 mt-3 mb-6 leading-snug">
                            {product.name}
                        </h1>

                        <p className="text-gray-600 leading-relaxed mb-8">
                            {product.description}
                        </p>

                        <div className="space-y-3 mb-10">
                            {product.benefits.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 text-sm text-gray-700"
                                >
                                    <span className="text-green-600">✔</span>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* BUY BOX - STICKY */}
                    <div className="lg:col-span-3">
                        <div className="sticky top-28 bg-white rounded-2xl p-6 shadow-md border">
                            <div className="text-3xl font-bold text-red-600 mb-6">
                                {product.price.toLocaleString("vi-VN")} đ
                            </div>

                            <div className="flex items-center justify-between mb-6">
                                <span className="text-sm font-medium">
                                    Số lượng
                                </span>
                                <div className="flex items-center border rounded-lg">
                                    <button
                                        onClick={() =>
                                            setQuantity(Math.max(1, quantity - 1))
                                        }
                                        className="px-3 py-1"
                                    >
                                        −
                                    </button>
                                    <span className="px-4 font-semibold">
                                        {quantity}
                                    </span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="px-3 py-1"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <button className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition mb-3">
                                Mua ngay
                            </button>

                            <button className="w-full border border-green-600 text-green-700 py-3 rounded-xl font-semibold hover:bg-green-50 transition">
                                Thêm vào giỏ
                            </button>

                            <div className="mt-6 text-xs text-gray-500 space-y-2">
                                <div>🚚 Giao hàng nhanh 2h</div>
                                <div>🔄 Đổi trả trong 7 ngày</div>
                                <div>🌿 Cam kết hữu cơ</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ProductDetailPage;