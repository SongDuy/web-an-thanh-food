import { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Search from "../../components/Search";
import Notification from "../../components/Notification";

const AccountRewardsPage = () => {
    const [openSearch, setOpenSearch] = useState(false);
    const [openNotification, setOpenNotification] = useState(false);

    const Cell = ({ children, color }) => {
        const bg =
            color === "red"
                ? "bg-red-400"
                : color === "green"
                    ? "bg-green-400"
                    : "bg-yellow-100";

        return (
            <div className={`${bg} border border-black flex items-center justify-center`}>
                ({children})
            </div>
        );
    };

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
                            <div className="w-full">
                                <h2 className="text-lg text-gray-500 mb-4">
                                    Cửa Hàng Nhận Thẻ
                                </h2>
                            </div>

                            <div className="w-full">

                            </div>

                        </div>

                        <div className="w-full">
                            <div className="w-full">
                                <h2 className="text-lg text-gray-500 mb-4">
                                    Nâng Cấp Thẻ Nhận
                                </h2>
                            </div>

                            <div className="w-full">

                            </div>
                        </div>


                    </div>

                    <div className="col-span-4 px-4 py-3 border-l">
                        <div className="w-full h-full flex flex-col gap-5">
                            <div className="w-full flex flex-col gap-5">
                                <div className="w-full">
                                    <h2 className="text-lg text-gray-500">
                                        Bảng Nâng Cấp Thẻ
                                    </h2>
                                </div>

                                <div className="w-full flex items-center justify-center bg-red-50 rounded">
                                    <div className="w-full bg-white rounded">
                                        <div className="grid grid-cols-6 border border-black text-[11px] text-center font-serifBook">

                                            {/* Header */}
                                            <div className="bg-white border border-black font-semibold">Quy Đổi</div>
                                            <div className="bg-white border border-black font-semibold">Kim</div>
                                            <div className="bg-white border border-black font-semibold">Mộc</div>
                                            <div className="bg-white border border-black font-semibold">Thủy</div>
                                            <div className="bg-white border border-black font-semibold">Hỏa</div>
                                            <div className="bg-white border border-black font-semibold">Thổ</div>

                                            {/* Kim */}
                                            <div className="bg-white border border-black font-semibold">Kim</div>
                                            <Cell>-3,+1</Cell>
                                            <Cell>-3,+1</Cell>
                                            <Cell color="green">-2,+1</Cell>
                                            <Cell color="red">-5,+1</Cell>
                                            <Cell>-3,+1</Cell>

                                            {/* Mộc */}
                                            <div className="bg-white border border-black font-semibold">Mộc</div>
                                            <Cell color="red">-5,+1</Cell>
                                            <Cell>-3,+1</Cell>
                                            <Cell>-3,+1</Cell>
                                            <Cell color="green">-2,+1</Cell>
                                            <Cell>-3,+1</Cell>

                                            {/* Thủy */}
                                            <div className="bg-white border border-black font-semibold">Thủy</div>
                                            <Cell>-3,+1</Cell>
                                            <Cell color="green">-2,+1</Cell>
                                            <Cell>-3,+1</Cell>
                                            <Cell>-3,+1</Cell>
                                            <Cell color="red">-5,+1</Cell>

                                            {/* Hỏa */}
                                            <div className="bg-white border border-black font-semibold">Hỏa</div>
                                            <Cell>-3,+1</Cell>
                                            <Cell>-3,+1</Cell>
                                            <Cell color="red">-5,+1</Cell>
                                            <Cell>-3,+1</Cell>
                                            <Cell color="green">-2,+1</Cell>

                                            {/* Thổ */}
                                            <div className="bg-white border border-black font-semibold">Thổ</div>
                                            <Cell color="green">-2,+1</Cell>
                                            <Cell color="red">-5,+1</Cell>
                                            <Cell>-3,+1</Cell>
                                            <Cell>-3,+1</Cell>
                                            <Cell>-3,+1</Cell>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="w-full flex flex-col gap-5">
                                <div className="w-full">
                                    <h2 className="text-lg text-gray-500">
                                        Tất Cả Thẻ Của Bạn
                                    </h2>
                                </div>

                                <div className="w-full max-h-[285px] pr-3 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                                    <div className="w-full flex flex-col gap-1.5 pb-5">
                                        <div className="w-full h-[45px] flex items-center justify-center px-3 py-3 bg-white border rounded shadow-sm">
                                            <div className="font-medium text-gray-500">
                                                Bạn nhận được thẻ cấp 5 (Hệ Kim)
                                            </div>

                                            <div className="ml-auto flex flex-col items-center justify-center">
                                                <span className="text-xs text-gray-500">
                                                    11/02/2026
                                                </span>
                                                <span className="text-xs text-gray-500">
                                                    9:30:48
                                                </span>
                                            </div>
                                        </div>

                                        <div className="w-full h-[45px] flex items-center justify-center px-3 py-3 bg-white border rounded shadow-sm">
                                            <div className="font-medium text-blue-500">
                                                Bạn nhận được thẻ cấp 3 (Hệ Thủy)
                                            </div>

                                            <div className="ml-auto flex flex-col items-center justify-center">
                                                <span className="text-xs text-gray-500">
                                                    11/02/2026
                                                </span>
                                                <span className="text-xs text-gray-500">
                                                    9:30:48
                                                </span>
                                            </div>
                                        </div>

                                        <div className="w-full h-[45px] flex items-center justify-center px-3 py-3 bg-white border rounded shadow-sm">
                                            <div className="font-medium text-red-500">
                                                Bạn nhận được thẻ cấp 2 (Hệ Hỏa)
                                            </div>

                                            <div className="ml-auto flex flex-col items-center justify-center">
                                                <span className="text-xs text-gray-500">
                                                    11/02/2026
                                                </span>
                                                <span className="text-xs text-gray-500">
                                                    9:30:48
                                                </span>
                                            </div>
                                        </div>

                                        <div className="w-full h-[45px] flex items-center justify-center px-3 py-3 bg-white border rounded shadow-sm">
                                            <div className="font-medium text-green-500">
                                                Bạn nhận được thẻ cấp 4 (Hệ Mộc)
                                            </div>
                                            <div className="ml-auto flex flex-col items-center justify-center">
                                                <span className="text-xs text-gray-500">
                                                    11/02/2026
                                                </span>
                                                <span className="text-xs text-gray-500">
                                                    9:30:48
                                                </span>
                                            </div>
                                        </div>

                                        <div className="w-full h-[45px] flex items-center justify-center px-3 py-3 bg-white border rounded shadow-sm">
                                            <div className="font-medium text-red-500">
                                                Bạn nhận được thẻ cấp 2 (Hệ Hỏa)
                                            </div>

                                            <div className="ml-auto flex flex-col items-center justify-center">
                                                <span className="text-xs text-gray-500">
                                                    11/02/2026
                                                </span>
                                                <span className="text-xs text-gray-500">
                                                    9:30:48
                                                </span>
                                            </div>
                                        </div>

                                        <div className="w-full h-[45px] flex items-center justify-center px-3 py-3 bg-white border rounded shadow-sm">
                                            <div className="font-medium text-yellow-500">
                                                Bạn nhận được thẻ cấp 1 (Hệ Thổ)
                                            </div>

                                            <div className="ml-auto flex flex-col items-center justify-center">
                                                <span className="text-xs text-gray-500">
                                                    11/02/2026
                                                </span>
                                                <span className="text-xs text-gray-500">
                                                    9:30:48
                                                </span>
                                            </div>
                                        </div>

                                        <div className="w-full h-[45px] flex items-center justify-center px-3 py-3 bg-white border rounded shadow-sm">
                                            <div className="font-medium text-red-500">
                                                Bạn nhận được thẻ cấp 2 (Hệ Hỏa)
                                            </div>

                                            <div className="ml-auto flex flex-col items-center justify-center">
                                                <span className="text-xs text-gray-500">
                                                    11/02/2026
                                                </span>
                                                <span className="text-xs text-gray-500">
                                                    9:30:48
                                                </span>
                                            </div>
                                        </div>

                                        <div className="w-full h-[45px] flex items-center justify-center px-3 py-3 bg-white border rounded shadow-sm">
                                            <div className="font-medium text-red-500">
                                                Bạn nhận được thẻ cấp 2 (Hệ Hỏa)
                                            </div>

                                            <div className="ml-auto flex flex-col items-center justify-center">
                                                <span className="text-xs text-gray-500">
                                                    11/02/2026
                                                </span>
                                                <span className="text-xs text-gray-500">
                                                    9:30:48
                                                </span>
                                            </div>
                                        </div>

                                        <div className="w-full h-[45px] flex items-center justify-center px-3 py-3 bg-white border rounded shadow-sm">
                                            <div className="font-medium text-blue-500">
                                                Bạn nhận được thẻ cấp 3 (Hệ Thủy)
                                            </div>

                                            <div className="ml-auto flex flex-col items-center justify-center">
                                                <span className="text-xs text-gray-500">
                                                    11/02/2026
                                                </span>
                                                <span className="text-xs text-gray-500">
                                                    9:30:48
                                                </span>
                                            </div>
                                        </div>
                                    </div>
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