import { useState } from "react";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Search from '../../components/Search';
import ProductCard from '../../components/ProductCard';

import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

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
                        <span className="text-black font-bold mr-1">30</span>
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
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                     <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default RankingsPage;