import { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Search from "../../components/Search";
import Notification from "../../components/Notification";

const rewards = [
    { name: "Chúc phúc", weight: 100000 },
    { name: "Thẻ cấp 1 (Hệ Thổ)", weight: 10000 },
    { name: "Thẻ cấp 2 (Hệ Hỏa)", weight: 1000 },
    { name: "Thẻ cấp 3 (Hệ Thủy)", weight: 100 },
    { name: "Thẻ cấp 4 (Hệ Mộc)", weight: 10 },
    { name: "Thẻ cấp 5 (Hệ Kim)", weight: 1 },
];

const AccountRewardsPage = () => {
    const [openSearch, setOpenSearch] = useState(false);
    const [openNotification, setOpenNotification] = useState(false);

    // (---Tạo vòng quay phải ở backend nếu không sẽ bị hack kết quả---)
    const [activeIndex, setActiveIndex] = useState(null); // Ô đang sáng (hiệu ứng quay)
    const [points, setPoints] = useState(10000); // Điểm người chơi
    const [result, setResult] = useState(null); // Kết quả trúng thưởng
    const [spinning, setSpinning] = useState(false); // Trạng thái đang quay (chống spam click)

    const getWeightedIndex = () => {  // Hàm random theo trọng số (xác suất)

        const total = rewards.reduce((s, r) => s + r.weight, 0); // Tổng trọng số tất cả phần thưởng
        let rand = Math.random() * total; // Số ngẫu nhiên trong [0, total)

        for (let i = 0; i < rewards.length; i++) { // Duyệt từng phần thưởng

            if (rand < rewards[i].weight) return i; // Nếu rand rơi vào khoảng của item hiện tại => trúng

            rand -= rewards[i].weight; // Nếu chưa trúng, trừ đi weight và xét tiếp
        }

        return 0; // Fallback (hiếm khi dùng)
    };

    const spin = () => {

        if (points < 100 || spinning) return;

        setSpinning(true);
        setPoints(p => p - 100);

        const target = getWeightedIndex(); // kết quả thật

        let flashes = 15;     // số lần nháy
        const speed = 250;    // TỐC ĐỘ CỐ ĐỊNH (ms)

        const run = () => {
            // mỗi lần sáng ngẫu nhiên 1 ô
            const randomIndex = Math.floor(Math.random() * rewards.length);
            setActiveIndex(randomIndex);
            flashes--;

            // hết lượt => dừng ở kết quả thật
            if (flashes <= 0) {
                setActiveIndex(target);
                setResult(rewards[target]);
                setSpinning(false);
                return;
            }

            setTimeout(run, speed); // KHÔNG thay đổi speed
        };

        run();
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
                        <h2 className="text-lg text-gray-500 mb-4">Tham Gia Vòng Quay</h2>

                        {/* Điểm */}
                        <div className="mb-4 text-sm text-gray-600">
                            Điểm hiện tại: <b>{points}</b>
                        </div>

                        {/* Vòng quay */}
                        <div className="grid grid-cols-3 gap-3 mb-6">
                            {rewards.map((item, i) => (
                                <div
                                    key={i}
                                    className={`h-24 flex items-center justify-center text-center text-sm font-medium rounded-lg border shadow-sm transition-all duration-200
                                        ${activeIndex === i
                                            ? "bg-yellow-300 border-yellow-500"
                                            : "bg-gray-50"}
                                        `}
                                >
                                    {item.name}
                                </div>
                            ))}
                        </div>

                        {/* Kết quả */}
                        {result && !spinning && (
                            <div className="mb-4 text-green-600 font-semibold animate-pulse">
                                🎯 Kết quả: {result.name}
                            </div>
                        )}

                        {/* Nút quay */}
                        <button
                            onClick={spin}
                            disabled={spinning}
                            className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
                        >
                            {spinning ? "Đang quay..." : "Quay (100 điểm)"}
                        </button>
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