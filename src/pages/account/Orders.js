import { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Search from "../../components/Search";
import Notification from "../../components/Notification";

const tabs = [
    "Tất cả đơn",
    "Đang xử lý",
    "Đang vận chuyển",
    "Đã giao",
    "Đã hủy",
];

const OrdersPage = () => {
    const [openSearch, setOpenSearch] = useState(false);
    const [openNotification, setOpenNotification] = useState(false);

    // dnh sách đơn hàng
    const [active, setActive] = useState(0);

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
                    <div className="w-full h-[45px] flex items-center rounded-t-md border bg-white">
                        <ul className="w-full h-full grid grid-cols-5 items-center justify-center">
                            {tabs.map((tab, index) => (
                                <li
                                    key={index}
                                    className={`w-full h-full border-b-2 ${active === index ? "border-blue-500" : "border-transparent"
                                        }`}
                                >
                                    <button
                                        onClick={() => setActive(index)}
                                        className="w-full h-full"
                                    >
                                        {tab}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-full h-[38px]">
                        <input
                            type="text"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            placeholder="Nhập đơn hàng"
                            className="w-full h-[38px] border-2 rounded-md px-2.5 outline-none focus:ring-1 focus:ring-blue-400"
                        />
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