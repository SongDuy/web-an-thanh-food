import { useState, useRef } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Search from "../../components/Search";
import Notification from "../../components/Notification";

import ClearIcon from '@mui/icons-material/Clear';

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

    // danh sách đơn hàng
    const [active, setActive] = useState(0);

    // Tìm đơn hàng
    const [valueSearch, setValueSearch] = useState("");

    // chống bị nhảy ô nhập khi clear
    const inputRef = useRef(null);
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

                    <div className="relative w-full h-[38px]">
                        <input
                            ref={inputRef}   // 👈 thiếu dòng này
                            type="text"
                            value={valueSearch}
                            onChange={(e) => setValueSearch(e.target.value)}
                            placeholder="Tìm đơn hàng theo Mã đơn hàng, Tên sản phẩm"
                            className="w-full h-full border-2 rounded-md px-2.5 pr-8 outline-none focus:ring-1 focus:ring-blue-400"
                        />

                        {valueSearch && (
                            <button
                                type="button"
                                onMouseDown={(e) => {
                                    e.preventDefault(); // 🔥 ngăn mất focus
                                    setValueSearch("");
                                    inputRef.current?.focus(); // giữ focus
                                }}
                                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                <ClearIcon />
                            </button>
                        )}
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