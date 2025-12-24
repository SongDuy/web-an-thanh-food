import { useState } from "react";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import Search from '../../components/Search';

import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const products = [
    {
        id: 1,
        name: "Rau cải xanh",
        image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
        price: 0,
        category: "Thực Phẩm",
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
        category: "Thực Phẩm",
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
        category: "Thực Phẩm",
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
        category: "Thực Phẩm",
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
        category: "Thực Phẩm",
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
        category: "Thực Phẩm",
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
        category: "Thực Phẩm",
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
        category: "Thực Phẩm",
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
        category: "Thực Phẩm",
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
        category: "Thực Phẩm",
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
        category: "Thực Phẩm",
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
        category: "Thực Phẩm",
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
        category: "Thực Phẩm",
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
        category: "Thực Phẩm",
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
        category: "Thực Phẩm",
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
        category: "Thực Phẩm",
        unit: "1 túi / 1kg",
        rating: 4.5,
        likes: 125,
        stock: 32
    },
];

const GroceriesPage = () => {
    const [openSearch, setOpenSearch] = useState(false);

    return (
        <>
            <Header onOpenSearch={() => setOpenSearch(true)} />

            {openSearch && (
                <Search onClose={() => setOpenSearch(false)} />
            )}

            <div className="px-[160px] pt-[100px] pb-[45px] bg-gray-100">
                <div className="w-full h-[60px] border-b border-gray-300 flex items-center">
                    <div>
                        <span className="text-black font-bold mr-1">{products.length}</span>
                        <span className="text-gray-500">sản phẩm</span>
                    </div>
                    <div className="ml-auto">
                        <button className="pr-3 border-r">
                            <LocalMallOutlinedIcon fontSize="small" /> Phổ Biến
                        </button>
                        <button className="px-3 border-r text-gray-500">
                            <StarBorderOutlinedIcon fontSize="small" /> Đánh Giá
                        </button>
                        <button className="pl-3 border-l text-gray-500">
                            <FavoriteBorderOutlinedIcon fontSize="small" /> Yêu Thích
                        </button>
                    </div>
                </div>
                <div className="w-full min-h-[650px] grid grid-cols-5 gap-3 mt-[25px]">
                    {products.map((product, index) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                index={index}
                            />
                        ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default GroceriesPage;