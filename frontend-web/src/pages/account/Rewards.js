import { useState, useEffect } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Search from "../../components/Search";
import Notification from "../../components/Notification";

// Cửa hàng đổi điểm
const shopCards = [
    { element: "tho", name: "Thẻ Thổ Cấp 1" },
    { element: "hoa", name: "Thẻ Hỏa Cấp 1" },
    { element: "thuy", name: "Thẻ Thủy Cấp 1" },
    { element: "moc", name: "Thẻ Mộc Cấp 1" },
    { element: "kim", name: "Thẻ Kim Cấp 1" },
];

const AccountRewardsPage = () => {
    const [openSearch, setOpenSearch] = useState(false);
    const [openNotification, setOpenNotification] = useState(false);

    // Tương sinh tương khắc
    const [selectedTarget, setSelectedTarget] = useState(null); // { element: "kim", level: 1 }
    const [selectedMaterials, setSelectedMaterials] = useState({ tuongSinh: [], trungTinh: [], tuongKhac: [] });

    // danh sách thẻ
    const [cardLevels, setCardLevels] = useState([
        { element: "tho", title: "Thẻ Hệ Thổ", cards: [1, 4, 8, 1, 2] },
        { element: "hoa", title: "Thẻ Hệ Hỏa", cards: [25, 3, 7, 21, 1] },
        { element: "thuy", title: "Thẻ Hệ Thủy", cards: [1, 10, 3, 2, 3] },
        { element: "moc", title: "Thẻ Hệ Mộc", cards: [2, 3, 2, 3, 1] },
        { element: "kim", title: "Thẻ Hệ Kim", cards: [0, 7, 15, 3, 4] },
    ]);

    useEffect(() => {
        setSelectedMaterials({ tuongSinh: [], trungTinh: [], tuongKhac: [] });
    }, [selectedTarget]);

    // Nâng cấp tối đa 5
    const MAX_LEVEL = 5;

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

    // quy tắc tương sinh tương khắc
    const elementRelations = {
        kim: {
            sinhBy: "tho",   // Thổ sinh Kim
            khacBy: "hoa",   // Hỏa khắc Kim
        },
        moc: {
            sinhBy: "thuy",  // Thủy sinh Mộc
            khacBy: "kim",   // Kim Khắc Mộc
        },
        thuy: {
            sinhBy: "kim",   // Kim sinh Thủy
            khacBy: "tho",   // Thổ Khắc Thủy
        },
        hoa: {
            sinhBy: "moc",   // Mộc sinh Hỏa
            khacBy: "thuy",  // Thủy Khắc Hỏa
        },
        tho: {
            sinhBy: "hoa",   // Hỏa sinh Thổ
            khacBy: "moc",   // Mộc Khắc Thổ
        },
    };

    // Cửa hàng đổi thẻ
    const ShopCardItem = ({ element, name }) => (
        <div className="flex flex-col items-center justify-between border border-gray-200 rounded-lg p-3 shadow-sm bg-white text-center">

            <div
                className={`w-[70px] h-[35px] cursor-default grid grid-cols-[35%_65%] bg-gradient-to-tr ${elementStyles[element]} shadow border border-white items-center justify-center rounded-md`}
            >
                <span className="text-white text-shadow-black font-medium flex items-center justify-center border-r border-white">
                    1
                </span>
                <span className="text-black flex items-center justify-center border-l border-white">
                    1
                </span>
            </div>

            <p className="font-semibold text-black mt-2 text-sm leading-tight">{name}</p>

            <p className="text-xs text-gray-500 mt-1">
                Giá: <span className="text-yellow-600 font-semibold">1000</span>
            </p>

            <button className="px-1 py-1  font-medium shadow rounded mt-2 w-full text-white bg-gradient-to-t from-blue-400 via-blue-500 to-blue-600 hover:brightness-110 active:brightness-95 transition border-b-2 border-blue-500">
                Đổi
            </button>
        </div>
    );

    //Nâng cấp thẻ 
    const getCardQty = (element, level) => {
        const row = cardLevels.find(e => e.element === element);
        return row ? row.cards[level - 1] : 0;
    };

    const buildMaterialSlots = (element, level, need, type) => {
        const qty = getCardQty(element, level);
        const slotsToShow = Math.min(qty, need);

        return Array.from({ length: slotsToShow }, (_, i) => ({
            id: `${type}-${element}-${level}-${i}`, // ✅ ỔN ĐỊNH
            element,
            level,
        }));
    };

    const UpgradeBox = ({ type, color, title, requirement }) => {
        const bg =
            color === "green"
                ? "bg-green-100"
                : color === "yellow"
                    ? "bg-yellow-100"
                    : "bg-red-100";

        // CHƯA CHỌN THẺ
        if (!selectedTarget) {
            return (
                <div className={`w-full h-[250px] flex flex-col ${bg} border-2 border-white shadow-sm rounded-lg p-3`}>
                    <h3 className="font-semibold text-center mb-2">{title}</h3>
                    <p className="text-center text-sm text-gray-600 font-semibold mt-16">
                        Hãy chọn thẻ cần nâng cấp!
                    </p>
                </div>
            );
        }

        const level = selectedTarget.level;
        const isMaxLevel = level === MAX_LEVEL;

        // ĐÃ MAX LEVEL
        if (isMaxLevel) {
            return (
                <div className={`w-full h-[250px] flex flex-col ${bg} border-2 border-white shadow-sm rounded-lg p-3`}>
                    <h3 className="font-semibold text-center mb-2">{title}</h3>
                    <p className="text-center text-sm text-gray-600 font-semibold mt-16">
                        Thẻ chọn đã đạt cấp tối đa!
                    </p>
                </div>
            );
        }

        let availableCards = [];

        if (type === "tuongSinh") {
            const e = elementRelations[selectedTarget.element].sinhBy;
            availableCards = buildMaterialSlots(e, level, requirement, type);
        } else if (type === "tuongKhac") {
            const e = elementRelations[selectedTarget.element].khacBy;
            availableCards = buildMaterialSlots(e, level, requirement, type);
        } else {
            const ALL_ELEMENTS = ["tho", "hoa", "thuy", "moc", "kim"];

            const neutralElements = ALL_ELEMENTS.filter(
                e =>
                    e !== elementRelations[selectedTarget.element].sinhBy &&
                    e !== elementRelations[selectedTarget.element].khacBy
            );

            for (const e of neutralElements) {
                const qty = getCardQty(e, level);

                // mỗi hệ tối đa 3 thẻ
                const showCount = Math.min(qty, 3);

                for (let i = 0; i < showCount; i++) {
                    availableCards.push({
                        id: `${type}-${e}-${level}-${i}`, // ⭐ DUY NHẤT
                        element: e,
                        level
                    });

                }
            }
        }


        const emptySlots = requirement - availableCards.length;
        for (let i = 0; i < emptySlots; i++) {
            availableCards.push({ empty: true });
        }

        return (
            <div className={`w-full h-[250px] flex flex-col ${bg} border-2 border-white shadow-sm rounded-lg p-3`}>
                <h3 className="font-semibold text-center mb-1">{title}</h3>

                <p className="text-xs text-center mb-2">
                    Cần <b>{requirement}</b> thẻ nguyên liệu
                </p>

                <div className="flex flex-wrap gap-2 justify-center">
                    {availableCards.map((card, i) => {
                        const isPicked = selectedMaterials[type].some(c => c.id === card.id);

                        if (card.empty) {
                            return (
                                <div
                                    key={i}
                                    // calc((100% / 3) - khoảng cách gap) để ép tối đa 3 thẻ/dòng
                                    className="w-[calc(33.33%-8px)] h-[35px] border-2 border-dashed border-gray-400 rounded-md opacity-40"
                                />
                            );
                        }

                        return (
                            <div
                                key={i}
                                onClick={() => {
                                    const exists = selectedMaterials[type].some(c => c.id === card.id);
                                    if (exists) {
                                        setSelectedMaterials(prev => ({
                                            ...prev,
                                            [type]: prev[type].filter(c => c.id !== card.id)
                                        }));
                                    } else if (selectedMaterials[type].length < requirement) {
                                        setSelectedMaterials(prev => ({
                                            ...prev,
                                            [type]: [...prev[type], card]
                                        }));
                                    }
                                }}
                                className="w-[calc(33.33%-8px)] cursor-pointer transition"
                            >
                                <CardBox element={card.element} left={card.level} right={1} picked={isPicked} />
                            </div>
                        );
                    })}
                </div>
                <button
                    disabled={selectedMaterials[type].length < requirement}
                    onClick={() => handleUpgrade(type)}
                    className={`mt-auto w-full py-1 rounded text-white font-semibold transition ${selectedMaterials[type].length >= requirement
                        ? "bg-green-500"
                        : "bg-gray-400 cursor-not-allowed"
                        }`}
                >
                    {selectedMaterials[type].length < requirement
                        ? `Đã chọn ${selectedMaterials[type].length} / ${requirement}`
                        : "Nâng Cấp"}
                </button>
            </div>
        );
    };

    const handleUpgrade = (type) => {
        if (!selectedTarget) return;

        const { element: targetElement, level } = selectedTarget;

        // Kiểm tra lần cuối xem thẻ đích có còn để nâng cấp không
        if (getCardQty(targetElement, level) <= 0) {
            alert("Bạn không còn thẻ này để nâng cấp!");
            return;
        }

        setCardLevels(prev => {
            // Sử dụng cấu trúc mới để tránh lỗi tham chiếu sâu
            const newData = prev.map(row => ({
                ...row,
                cards: [...row.cards]
            }));

            // 1. Trừ các thẻ nguyên liệu đã chọn
            selectedMaterials[type].forEach(mat => {
                const row = newData.find(e => e.element === mat.element);
                if (row) row.cards[mat.level - 1] -= 1;
            });

            // 2. Trừ 1 thẻ đích cũ và Cộng 1 thẻ cấp mới
            const targetRow = newData.find(e => e.element === targetElement);
            targetRow.cards[level - 1] -= 1;
            targetRow.cards[level] += 1;

            return newData;
        });

        // Reset trạng thái
        setSelectedMaterials({ tuongSinh: [], trungTinh: [], tuongKhac: [] });
        setSelectedTarget(null);
        alert("Nâng cấp thành công!");
    };


    // Thẻ của tôi
    const CardBox = ({ title, element, left, right, onClick, active, picked }) => {

        const outerBorder = picked || active
            ? "border-black"
            : "border-white hover:border-black";

        const innerBorder = picked || active
            ? "border-black"
            : "border-white";

        return (
            <div
                onClick={onClick}
                title={title}
                className={`w-full h-[35px] cursor-pointer grid grid-cols-[35%_65%] bg-gradient-to-tr ${elementStyles[element]} shadow border-2 ${outerBorder} items-center justify-center rounded-md transition`}
            >
                <span className={`text-white font-medium flex items-center justify-center border-r ${innerBorder}`}>
                    {left}
                </span>
                <span className={`text-black flex items-center justify-center border-l ${innerBorder}`}>
                    {right}
                </span>
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
                        <div className="w-full mb-5">
                            <div className="w-full">
                                <h2 className="text-lg text-gray-500 mb-4">
                                    Cửa Hàng Nhận Thẻ
                                </h2>
                            </div>

                            <div className="w-full grid grid-cols-5 gap-3">
                                {shopCards.map(card => (
                                    <ShopCardItem
                                        key={card.element}
                                        element={card.element}
                                        name={card.name}
                                    />
                                ))}
                            </div>

                        </div>

                        <div className="w-full">
                            <div className="w-full">
                                <h2 className="text-lg text-gray-500 mb-4">
                                    Nâng Cấp Thẻ Nhận
                                </h2>
                            </div>

                            <div className="w-full">
                                <div className="w-full grid grid-cols-3 gap-3">

                                    {/* TƯƠNG SINH */}
                                    <UpgradeBox
                                        type="tuongSinh"
                                        color="green"
                                        title="Nâng Cấp Tương Sinh"
                                        requirement={2}
                                        filterFn={(card) =>
                                            selectedTarget &&
                                            card.element === elementRelations[selectedTarget.element].sinhBy
                                        }
                                    />

                                    {/* TRUNG TÍNH */}
                                    <UpgradeBox
                                        type="trungTinh"
                                        color="yellow"
                                        title="Nâng Cấp Trung Tính"
                                        requirement={3}
                                        filterFn={(card) =>
                                            selectedTarget &&
                                            card.element !== elementRelations[selectedTarget.element].sinhBy &&
                                            card.element !== elementRelations[selectedTarget.element].khacBy
                                        }
                                    />

                                    {/* TƯƠNG KHẮC */}
                                    <UpgradeBox
                                        type="tuongKhac"
                                        color="red"
                                        title="Nâng Cấp Tương Khắc"
                                        requirement={5}
                                        filterFn={(card) =>
                                            selectedTarget &&
                                            card.element === elementRelations[selectedTarget.element].khacBy
                                        }
                                    />

                                </div>
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
                                            <Cell color="red">-5,+1</Cell>
                                            <Cell color="green">-2,+1</Cell>
                                            <Cell>-3,+1</Cell>
                                            <Cell>-3,+1</Cell>

                                            {/* Mộc */}
                                            <div className="bg-white border border-black font-semibold">Mộc (-)</div>
                                            <Cell>-3,+1</Cell>
                                            <Cell>-3,+1</Cell>
                                            <Cell>-3,+1</Cell>
                                            <Cell color="green">-2,+1</Cell>
                                            <Cell color="red">-5,+1</Cell>

                                            {/* Thủy */}
                                            <div className="bg-white border border-black font-semibold">Thủy (-)</div>
                                            <Cell>-3,+1</Cell>
                                            <Cell color="green">-2,+1</Cell>
                                            <Cell>-3,+1</Cell>
                                            <Cell color="red">-5,+1</Cell>
                                            <Cell>-3,+1</Cell>

                                            {/* Hỏa */}
                                            <div className="bg-white border border-black font-semibold">Hỏa (-)</div>
                                            <Cell color="red">-5,+1</Cell>
                                            <Cell>-3,+1</Cell>
                                            <Cell>-3,+1</Cell>
                                            <Cell>-3,+1</Cell>
                                            <Cell color="green">-2,+1</Cell>

                                            {/* Thổ */}
                                            <div className="bg-white border border-black font-semibold">Thổ (-)</div>
                                            <Cell color="green">-2,+1</Cell>
                                            <Cell>-3,+1</Cell>
                                            <Cell color="red">-5,+1</Cell>
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
                                                    active={
                                                        selectedTarget?.element === level.element &&
                                                        selectedTarget?.level === index + 1
                                                    }
                                                    onClick={() =>
                                                        setSelectedTarget({ element: level.element, level: index + 1 })
                                                    }
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