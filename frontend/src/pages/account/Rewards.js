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
                                Vòng Quay Mai Mắn
                            </h2>
                        </div>
                    </div>

                    <div className="col-span-4 px-4 py-3 border-l">
                        <div className="w-full">
                            <h2 className="text-lg text-gray-500">
                                Lịch Sử Nhận Thẻ
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default AccountRewardsPage;