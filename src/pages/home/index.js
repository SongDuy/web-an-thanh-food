import MainLayout from '../../layouts/MainLayout';
import ProductCard from '../../components/ProductCard';
import RankingCard from '../../components/RankingCard';

const products = [
    {
        id: 1,
        name: "Rau cải xanh",
        image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
        price: 0,
        category: "Lương thực",
        unit: "1 túi / 1kg",
        rating: 4.5,
        likes: 125,
        stock: 32
    },
    {
        id: 2,
        name: "Rau cải xanh",
        image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
        price: 0,
        category: "Lương thực",
        unit: "1 túi / 1kg",
        rating: 4.5,
        likes: 125,
        stock: 32
    },
    {
        id: 3,
        name: "Rau cải xanh",
        image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
        price: 0,
        category: "Lương thực",
        unit: "1 túi / 1kg",
        rating: 4.5,
        likes: 125,
        stock: 32
    },
    {
        id: 4,
        name: "Rau cải xanh",
        image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
        price: 0,
        category: "Lương thực",
        unit: "1 túi / 1kg",
        rating: 4.5,
        likes: 125,
        stock: 32
    },
    {
        id: 5,
        name: "Rau cải xanh",
        image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
        price: 0,
        category: "Lương thực",
        unit: "1 túi / 1kg",
        rating: 4.5,
        likes: 125,
        stock: 32
    },
    {
        id: 6,
        name: "Rau cải xanh",
        image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
        price: 0,
        category: "Lương thực",
        unit: "1 túi / 1kg",
        rating: 4.5,
        likes: 125,
        stock: 32
    },
    {
        id: 7,
        name: "Rau cải xanh",
        image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
        price: 0,
        category: "Lương thực",
        unit: "1 túi / 1kg",
        rating: 4.5,
        likes: 125,
        stock: 32
    },
    {
        id: 8,
        name: "Rau cải xanh",
        image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
        price: 0,
        category: "Lương thực",
        unit: "1 túi / 1kg",
        rating: 4.5,
        likes: 125,
        stock: 32
    },
    {
        id: 9,
        name: "Rau cải xanh",
        image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
        price: 0,
        category: "Lương thực",
        unit: "1 túi / 1kg",
        rating: 4.5,
        likes: 125,
        stock: 32
    },
    {
        id: 10,
        name: "Rau cải xanh",
        image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
        price: 0,
        category: "Lương thực",
        unit: "1 túi / 1kg",
        rating: 4.5,
        likes: 125,
        stock: 32
    },
    {
        id: 11,
        name: "Rau cải xanh",
        image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
        price: 0,
        category: "Lương thực",
        unit: "1 túi / 1kg",
        rating: 4.5,
        likes: 125,
        stock: 32
    },
    {
        id: 12,
        name: "Rau cải xanh",
        image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
        price: 0,
        category: "Lương thực",
        unit: "1 túi / 1kg",
        rating: 4.5,
        likes: 125,
        stock: 32
    },
    {
        id: 13,
        name: "Rau cải xanh",
        image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
        price: 0,
        category: "Lương thực",
        unit: "1 túi / 1kg",
        rating: 4.5,
        likes: 125,
        stock: 32
    },
    {
        id: 14,
        name: "Rau cải xanh",
        image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
        price: 0,
        category: "Lương thực",
        unit: "1 túi / 1kg",
        rating: 4.5,
        likes: 125,
        stock: 32
    },
    {
        id: 15,
        name: "Rau cải xanh",
        image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
        price: 0,
        category: "Lương thực",
        unit: "1 túi / 1kg",
        rating: 4.5,
        likes: 125,
        stock: 32
    },
    {
        id: 16,
        name: "Rau cải xanh",
        image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
        price: 0,
        category: "Lương thực",
        unit: "1 túi / 1kg",
        rating: 4.5,
        likes: 125,
        stock: 32
    },
];

const HomePage = () => {
    return (
        <MainLayout>
            <div>
                <div className="w-full h-full mt-[35px]">
                    <h1 className="text-[22px] font-bold uppercase"> Danh mục lương thực </h1>

                    <div className="w-full min-h-[650px] grid grid-cols-5 gap-3 mt-[38px]">
                        {products.slice(0, 10).map((product, index) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
                <div className="w-full h-full mt-[35px]">
                    <h1 className="text-[22px] font-bold uppercase">Danh mục thực phẩm </h1>

                    <div className="w-full min-h-[650px] grid grid-cols-5 gap-3 mt-[38px] ">
                        {products.slice(0, 10).map((product, index) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
                <div className="w-full h-full mt-[35px]">
                    <h1 className="text-[22px] font-bold uppercase">Bảng Xếp Hạng </h1>

                    <div className="w-full min-h-[650px] grid grid-cols-3 gap-3 mt-[38px] ">
                        {products.slice(0, 15).map((product, index) => (
                            <RankingCard
                                key={product.id}
                                product={product}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>

        </MainLayout>
    );
}

export default HomePage;
