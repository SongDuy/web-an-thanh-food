import { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Search from "../../components/Search";
import Notification from "../../components/Notification";

const AccountRewardsPage = () => {
    const [openSearch, setOpenSearch] = useState(false);
    const [openNotification, setOpenNotification] = useState(false);

    return (
        <>
            <Header
                onOpenSearch={() => {
                    setOpenNotification(false)
                    setOpenSearch(true)
                }}
                onOpenNotify={() => {
                    setOpenSearch(false)
                    setOpenNotification(true)
                }}
            />

            {openSearch && (
                <Search onClose={() => setOpenSearch(false)} />
            )}

            {openNotification && (
                <Notification onClose={() => setOpenNotification(false)} />
            )}

            <div className="w-full bg-soft px-[160px] pt-[100px] pb-[50px]">
                <div className="w-full py-[25px] flex items-center gap-1">
                    <h1 className="text-[22px] text-black font-semibold uppercase">
                        Đổi Điểm Nhận Thẻ
                    </h1>
                </div>

                <div className="w-full h-[555px] grid grid-cols-11 bg-white rounded-md border">
                    <div className="col-span-7 px-4 py-3 border-r">
                        <div className="w-full">
                            <h2 className="text-lg text-gray-500">
                                Tham Gia Vòng Quay
                            </h2>
                        </div>
                    </div>

                    <div className="col-span-4 px-4 py-3 rounded-r-md bg-gray-100">
                        <div className="w-full">
                            <h2 className="text-lg text-gray-500">
                                Lịch Sử Nhận Thẻ
                            </h2>
                        </div>

                        <div className="w-full mt-5 max-h-[465px] pr-3 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                            <div className="w-full h-full flex flex-col gap-3 ">
                                <div className="w-full h-[55px] bg-white border rounded shadow-sm">

                                </div>
                                <div className="w-full h-[55px] bg-white border rounded shadow-sm">

                                </div>
                                <div className="w-full h-[55px] bg-white border rounded shadow-sm">

                                </div>
                                <div className="w-full h-[55px] bg-white border rounded shadow-sm">

                                </div>
                                <div className="w-full h-[55px] bg-white border rounded shadow-sm">

                                </div>
                                <div className="w-full h-[55px] bg-white border rounded shadow-sm">

                                </div>
                                <div className="w-full h-[55px] bg-white border rounded shadow-sm">

                                </div>
                                <div className="w-full h-[55px] bg-white border rounded shadow-sm">

                                </div>
                                <div className="w-full h-[55px] bg-white border rounded shadow-sm">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default AccountRewardsPage;