import { useState } from "react";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Search from '../../components/Search';
import RankingCard from '../../components/RankingCard';

import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

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
                        <CheckOutlinedIcon fontSize="small" />
                        <span className="text-black ml-1">Bảng xếp hạng</span>
                    </div>
                </div>
                <div className="w-full min-h-[650px] grid grid-cols-3 gap-3 mt-[25px]">
                    <RankingCard />
                    <RankingCard />
                    <RankingCard />
                    <RankingCard />
                    <RankingCard />
                    <RankingCard />
                    <RankingCard />
                    <RankingCard />
                    <RankingCard />
                    <RankingCard />
                    <RankingCard />
                    <RankingCard />
                    <RankingCard />
                    <RankingCard />
                    <RankingCard />
                    <RankingCard />
                    <RankingCard />
                    <RankingCard />
                    <RankingCard />
                    <RankingCard />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default RankingsPage;