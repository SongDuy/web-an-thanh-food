import { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Search from "../../components/Search";
import Notification from "../../components/Notification";

const OrdersPage = () => {
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
                        Đơn Hàng Của Tôi
                    </h1>
                </div>

                <div className="w-full min-h-[555px] flex flex-col gap-3">
                    <div className="w-full h-[45px] flex items-center px-3 rounded-md border bg-white">
                        <ul className="w-full h-full">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <div className="w-full h-[38px] flex items-center px-3 rounded-md border bg-white">
                        kk
                    </div>

                    <div className="w-full grid grid-cols-1 gap-3">
                        <div className="w-full h-[260px] flex px-3 py-3 rounded-md border bg-white">
                            kk
                        </div>
                        <div className="w-full h-[260px] flex px-3 py-3 rounded-md border bg-white">
                            kk
                        </div>
                        <div className="w-full h-[260px] flex px-3 py-3 rounded-md border bg-white">
                            kk
                        </div>
                        <div className="w-full h-[260px] flex px-3 py-3 rounded-md border bg-white">
                            kk
                        </div>
                        <div className="w-full h-[260px] flex px-3 py-3 rounded-md border bg-white">
                            kk
                        </div>
                        <div className="w-full h-[260px] flex px-3 py-3 rounded-md border bg-white">
                            kk
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
};

export default OrdersPage;