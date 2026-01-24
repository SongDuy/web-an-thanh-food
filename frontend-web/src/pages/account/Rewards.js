import { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Search from "../../components/Search";
import Notification from "../../components/Notification";

const cardLevels = [
    { element: "tho", title: "Thẻ Hệ Thổ", cards: [300, 4, 8, 1, 2] },
    { element: "hoa", title: "Thẻ Hệ Hỏa", cards: [0, 3, 0, 0, 1] },
    { element: "thuy", title: "Thẻ Hệ Thủy", cards: [0, 1, 0, 2, 0] },
    { element: "moc", title: "Thẻ Hệ Mộc", cards: [2, 0, 2, 0, 1] },
    { element: "kim", title: "Thẻ Hệ Kim", cards: [0, 7, 1, 0, 4] },
];

const AccountRewardsPage = () => {
    const [openSearch, setOpenSearch] = useState(false);
    const [openNotification, setOpenNotification] = useState(false);

    // Bảng sung khắc
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

    // Màu thẻ
    const elementStyles = {
        kim: "from-gray-300 via-gray-200 to-gray-400",
        moc: "from-green-300 via-green-200 to-green-400",
        thuy: "from-blue-300 via-blue-200 to-blue-400",
        hoa: "from-red-300 via-red-200 to-red-400",
        tho: "from-yellow-300 via-yellow-200 to-yellow-400",
    };

    // Thẻ của tôi
    const CardBox = ({ title, element, left, right }) => (
        <div
            title={title}
            className={`w-[70px] h-[35px] cursor-default grid grid-cols-[35%_65%] bg-gradient-to-tr ${elementStyles[element]} shadow border border-white items-center justify-center rounded-md`}
        >
            <span className="text-white text-shadow-black font-medium flex items-center justify-center border-r border-white">
                {left}
            </span>
            <span className="text-black flex items-center justify-center border-l border-white">
                {right}
            </span>
        </div>
    );

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
                                        <div className="grid grid-cols-6 border border-black text-[13px] text-center font-serifBook">

                                            {/* Header */}
                                            <div className="bg-white border border-black font-semibold">Quy Đổi</div>
                                            <div className="bg-white border border-black font-semibold">Kim (+)</div>
                                            <div className="bg-white border border-black font-semibold">Mộc (+)</div>
                                            <div className="bg-white border border-black font-semibold">Thủy (+)</div>
                                            <div className="bg-white border border-black font-semibold">Hỏa (+)</div>
                                            <div className="bg-white border border-black font-semibold">Thổ (+)</div>

                                            {/* Kim */}
                                            <div className="bg-white border border-black font-semibold">Kim (-)</div>
                                            <Cell>-3,+1</Cell>
                                            <Cell>-3,+1</Cell>
                                            <Cell color="green">-2,+1</Cell>
                                            <Cell color="red">-5,+1</Cell>
                                            <Cell>-3,+1</Cell>

                                            {/* Mộc */}
                                            <div className="bg-white border border-black font-semibold">Mộc (-)</div>
                                            <Cell color="red">-5,+1</Cell>
                                            <Cell>-3,+1</Cell>
                                            <Cell>-3,+1</Cell>
                                            <Cell color="green">-2,+1</Cell>
                                            <Cell>-3,+1</Cell>

                                            {/* Thủy */}
                                            <div className="bg-white border border-black font-semibold">Thủy (-)</div>
                                            <Cell>-3,+1</Cell>
                                            <Cell color="green">-2,+1</Cell>
                                            <Cell>-3,+1</Cell>
                                            <Cell>-3,+1</Cell>
                                            <Cell color="red">-5,+1</Cell>

                                            {/* Hỏa */}
                                            <div className="bg-white border border-black font-semibold">Hỏa (-)</div>
                                            <Cell>-3,+1</Cell>
                                            <Cell>-3,+1</Cell>
                                            <Cell color="red">-5,+1</Cell>
                                            <Cell>-3,+1</Cell>
                                            <Cell color="green">-2,+1</Cell>

                                            {/* Thổ */}
                                            <div className="bg-white border border-black font-semibold">Thổ (-)</div>
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
                                        Tất Cả Thẻ Của Tôi
                                    </h2>
                                </div>

                                <div className="flex flex-col gap-5 items-center justify-center">
                                    {cardLevels.map((level) => (
                                        <div key={level.element} className="w-full grid grid-cols-5 items-center gap-3">
                                            {level.cards.map((rightValue, index) => (
                                                <CardBox
                                                    key={index}
                                                    title={level.title}
                                                    element={level.element}
                                                    left={index + 1}
                                                    right={rightValue}
                                                />
                                            ))}
                                        </div>
                                    ))}
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