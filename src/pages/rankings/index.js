import { useState } from "react";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Search from '../../components/Search';
import RankingCard from '../../components/RankingCard';

import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

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
        category: "Thực phẩm",
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
        category: "Thực phẩm",
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
        category: "Thực phẩm",
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
        category: "Thực phẩm",
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
        category: "Thực phẩm",
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


const RankingsPage = () => {
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
                        <CheckOutlinedIcon fontSize="small" />
                        <span className="text-black ml-1">Xếp hạng</span>
                    </div>
                </div>
                <div className="w-full min-h-[650px] grid grid-cols-3 gap-3 mt-[25px]">
                    {products.map((product, index) => (
                        <RankingCard
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

export default RankingsPage;