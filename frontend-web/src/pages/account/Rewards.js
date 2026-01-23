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
                            <div className="w-full">
                                <h2 className="text-lg text-gray-500 mb-4">
                                    Cửa Hàng Đổi Thẻ
                                </h2>
                            </div>

                            <div className="w-full">

                            </div>

                        </div>

                        <div className="w-full">
                            <div className="w-full">
                                <h2 className="text-lg text-gray-500 mb-4">
                                    Nâng Cấp Thẻ Mua
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
                                        Thẻ Mua Của Bạn
                                    </h2>
                                </div>

                                <div className="w-full flex items-center justify-center">
                                    <div className="h-full text-md text-black flex items-center gap-2">

                                        <div className="h-full flex items-center gap-3">
                                            <div
                                                title="Thẻ cấp 1 (Hệ Thổ)"
                                                className="w-[65px] h-[35px] cursor-default grid grid-cols-[35%_65%] bg-gradient-to-tr from-yellow-300 via-yellow-200 to-yellow-400 shadow border border-white items-center justify-center rounded-md"
                                            >
                                                <span className="text-white text-shadow-black font-medium flex items-center justify-center border-r border-white">
                                                    1
                                                </span>
                                                <span className="text-black flex items-center justify-center border-l border-white">
                                                    3
                                                </span>
                                            </div>

                                            <div
                                                title="Thẻ cấp 2 (Hệ Hỏa)"
                                                className="w-[65px] h-[35px] cursor-default grid grid-cols-[35%_65%] bg-gradient-to-tr from-red-300 via-red-200 to-red-400 shadow border border-white items-center justify-center rounded-md"
                                            >
                                                <span className="text-white text-shadow-black font-medium flex items-center justify-center border-r border-white">
                                                    2
                                                </span>
                                                <span className="text-black flex items-center justify-center border-l border-white">
                                                    0
                                                </span>
                                            </div>

                                            <div
                                                title="Thẻ cấp 3 (Hệ Thủy)"
                                                className="w-[65px] h-[35px] cursor-default grid grid-cols-[35%_65%] bg-gradient-to-tr from-blue-300 via-blue-200 to-blue-400 shadow border border-white items-center justify-center rounded-md"
                                            >
                                                <span className="text-white text-shadow-black font-medium flex items-center justify-center border-r border-white">
                                                    3
                                                </span>
                                                <span className="text-black flex items-center justify-center border-l border-white">
                                                    0
                                                </span>
                                            </div>

                                            <div
                                                title="Thẻ cấp 4 (Hệ Mộc)"
                                                className="w-[65px] h-[35px] cursor-default grid grid-cols-[35%_65%] bg-gradient-to-tr from-green-300 via-green-200 to-green-400 shadow border border-white items-center justify-center rounded-md"
                                            >
                                                <span className="text-white text-shadow-black font-medium flex items-center justify-center border-r border-white">
                                                    4
                                                </span>
                                                <span className="text-black flex items-center justify-center border-l border-white">
                                                    0
                                                </span>
                                            </div>

                                            <div
                                                title="Thẻ cấp 5 (Hệ Kim)"
                                                className="w-[65px] h-[35px] cursor-default grid grid-cols-[35%_65%] bg-gradient-to-tr from-gray-300 via-gray-200 to-gray-400 shadow border border-white items-center justify-center rounded-md"
                                            >
                                                <span className="text-white text-shadow-black font-medium flex items-center justify-center border-r border-white">
                                                    5
                                                </span>
                                                <span className="text-black flex items-center justify-center border-l border-white">
                                                    0
                                                </span>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="w-full h-[65px] flex items-center justify-center bg-red-50 rounded">
                                    <div className="w-full grid grid-cols-5">
                                        <div className="w-full flex flex-col items-center justify-center">
                                            <span className="text-black text-xs font-serifBook">
                                                Chúc phúc
                                            </span>
                                            <span className="text-black text-xs font-serifBook">
                                                = 10X
                                            </span>
                                            <span className="text-black text-xs font-serifBook">
                                                Thẻ cấp 1
                                            </span>
                                        </div>

                                        <div className="w-full flex flex-col items-center justify-center">
                                            <span className="text-black text-xs font-serifBook">
                                                Thẻ cấp 1
                                            </span>
                                            <span className="text-black text-xs font-serifBook">
                                                = 10X
                                            </span>
                                            <span className="text-black text-xs font-serifBook">
                                                Thẻ cấp 2
                                            </span>
                                        </div>

                                        <div className="w-full flex flex-col items-center justify-center">
                                            <span className="text-black text-xs font-serifBook">
                                                Thẻ cấp 2
                                            </span>
                                            <span className="text-black text-xs font-serifBook">
                                                = 10X
                                            </span>
                                            <span className="text-black text-xs font-serifBook">
                                                Thẻ cấp 3
                                            </span>
                                        </div>

                                        <div className="w-full flex flex-col items-center justify-center">
                                            <span className="text-black text-xs font-serifBook">
                                                Thẻ cấp 3
                                            </span>
                                            <span className="text-black text-xs font-serifBook">
                                                = 10X
                                            </span>
                                            <span className="text-black text-xs font-serifBook">
                                                Thẻ cấp 4
                                            </span>
                                        </div>

                                        <div className="w-full flex flex-col items-center justify-center">
                                            <span className="text-black text-xs font-serifBook">
                                                Thẻ cấp 4
                                            </span>
                                            <span className="text-black text-xs font-serifBook">
                                                = 10X
                                            </span>
                                            <span className="text-black text-xs font-serifBook">
                                                Thẻ cấp 5
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="w-full flex flex-col gap-5">
                                <div className="w-full">
                                    <h2 className="text-lg text-gray-500">
                                        Lịch Sử Nhận Thẻ
                                    </h2>
                                </div>

                                <div className="w-full max-h-[285px] pr-3 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                                    <div className="w-full flex flex-col gap-2.5 pb-5">
                                        <div className="w-full h-[48px] flex items-center justify-center px-3 py-3 bg-white border rounded shadow-sm">
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

                                        <div className="w-full h-[48px] flex items-center justify-center px-3 py-3 bg-white border rounded shadow-sm">
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

                                        <div className="w-full h-[48px] flex items-center justify-center px-3 py-3 bg-white border rounded shadow-sm">
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

                                        <div className="w-full h-[48px] flex items-center justify-center px-3 py-3 bg-white border rounded shadow-sm">
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

                                        <div className="w-full h-[48px] flex items-center justify-center px-3 py-3 bg-white border rounded shadow-sm">
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

                                        <div className="w-full h-[48px] flex items-center justify-center px-3 py-3 bg-white border rounded shadow-sm">
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

                                        <div className="w-full h-[48px] flex items-center justify-center px-3 py-3 bg-white border rounded shadow-sm">
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

                                        <div className="w-full h-[48px] flex items-center justify-center px-3 py-3 bg-white border rounded shadow-sm">
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

                                        <div className="w-full h-[48px] flex items-center justify-center px-3 py-3 bg-white border rounded shadow-sm">
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