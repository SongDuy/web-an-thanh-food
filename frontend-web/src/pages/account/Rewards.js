import Select from "react-select";

import { useState, useEffect, useMemo } from "react";

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

    // Chọn hệ và cấp ở mục nâng cấp thẻ nhận 
    const [selectedElement, setSelectedElement] = useState(null);
    const [selectedLevel, setSelectedLevel] = useState(null);

    // danh sách thẻ
    const [cardLevels, setCardLevels] = useState([
        { element: "tho", title: "Thẻ Hệ Thổ", cards: [3, 2, 1, 2, 0] },
        { element: "hoa", title: "Thẻ Hệ Hỏa", cards: [5, 3, 7, 1, 1] },
        { element: "thuy", title: "Thẻ Hệ Thủy", cards: [1, 1, 3, 2, 3] },
        { element: "moc", title: "Thẻ Hệ Mộc", cards: [2, 3, 2, 3, 1] },
        { element: "kim", title: "Thẻ Hệ Kim", cards: [0, 7, 5, 3, 4] },
    ]);

    //Hệ 
    const elementOptions = [
        { value: "kim", label: "Kim" },
        { value: "moc", label: "Mộc" },
        { value: "thuy", label: "Thủy" },
        { value: "hoa", label: "Hỏa" },
        { value: "tho", label: "Thổ" },
    ];

    const levelOptions = useMemo(() => {
        if (!selectedElement) return [];

        const row = cardLevels.find(e => e.element === selectedElement.value);
        if (!row) return [];

        return row.cards.map((qty, i) => ({
            value: i + 1,
            label: `Cấp ${i + 1}`, // hiện luôn số thẻ đang có
        }));
    }, [selectedElement, cardLevels]);

    useEffect(() => {
        if (selectedElement && selectedLevel) {
            setSelectedTarget({
                element: selectedElement.value,
                level: selectedLevel.value,
            });
        }
    }, [selectedElement, selectedLevel]);


    // Chỉnh css cho ô cuộn
    const selectStyles = {
        control: (base, state) => ({
            ...base,
            minHeight: "38px",
            height: "38px",
            borderRadius: "6px",
            borderWidth: "1px",
            borderColor: state.isFocused ? "#60a5fa" : "#d1d5db",
            boxShadow: "none",
            ":hover": {
                borderColor: "#60a5fa",
            },
            display: "flex",
            alignItems: "center",
        }),

        valueContainer: (base) => ({
            ...base,
            height: "38px",
            padding: "0 8px",
            display: "flex",
            alignItems: "center",
        }),

        /** ⭐ FIX PLACEHOLDER */
        placeholder: (base, state) => ({
            ...base,
            display: state.isFocused ? "none" : "block", // 🔥 biến mất khi focus
        }),

        indicatorsContainer: (base) => ({
            ...base,
            height: "38px",
            display: "flex",
            alignItems: "center",
        }),

        indicatorSeparator: (base) => ({
            ...base,
            width: "1.5px",
            height: "18px",
            backgroundColor: "#d1d5db",
            margin: "0 6px",
            alignSelf: "center",
        }),

        menuList: (base) => ({
            ...base,
            maxHeight: "175px",
        }),
    };

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
        <div className="flex flex-col items-center justify-between border border-gray-200 rounded-md p-3 shadow-sm bg-white text-center">

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

            <button className="w-full mt-2 px-1 py-1 font-medium shadow rounded text-white bg-gradient-to-t from-blue-400 via-blue-500 to-blue-600 hover:brightness-110 active:brightness-95 transition border-b-2 border-blue-500">
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
            <div className={`w-full h-[250px] flex flex-col ${bg} border-2 border-white shadow-sm rounded-md p-3`}>
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
                    className={`mt-auto w-full px-1 py-1 shadow rounded text-white font-medium transition ${selectedMaterials[type].length >= requirement
                        ? " bg-gradient-to-t from-blue-400 via-blue-500 to-blue-600 hover:brightness-110 active:brightness-95 transition border-b-2 border-blue-500"
                        : "bg-gray-400 border-b-2 border-gray-500 cursor-not-allowed"
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

        const materialsToUse = selectedMaterials[type];
        const { element: targetElement, level } = selectedTarget;

        // 1. Kiểm tra xem số lượng thẻ trong kho có đủ để trừ không
        let isStockValid = true;
        const tempCheck = {}; // Dùng để gom nhóm và kiểm tra tổng số lượng cần trừ

        materialsToUse.forEach(mat => {
            const key = `${mat.element}-${mat.level}`;
            tempCheck[key] = (tempCheck[key] || 0) + 1;
        });

        for (const key in tempCheck) {
            const [el, lvl] = key.split('-');
            const currentQty = getCardQty(el, parseInt(lvl));
            if (currentQty < tempCheck[key]) {
                isStockValid = false;
                break;
            }
        }

        if (!isStockValid) {
            alert("Lỗi: Số lượng thẻ trong kho không đủ để thực hiện!");
            return;
        }

        // 2. Nếu hợp lệ thì mới tiến hành cập nhật State
        setCardLevels(prev => {
            const newData = prev.map(row => ({
                ...row,
                cards: [...row.cards]
            }));

            // Trừ thẻ nguyên liệu
            materialsToUse.forEach(mat => {
                const row = newData.find(e => e.element === mat.element);
                if (row && row.cards[mat.level - 1] > 0) {
                    row.cards[mat.level - 1] -= 1;
                }
            });

            // Cộng thẻ cấp mới
            const targetRow = newData.find(e => e.element === targetElement);
            if (targetRow && targetRow.cards[level] !== undefined) {
                targetRow.cards[level] += 1;
            }

            return newData;
        });

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

                        <div className="w-full flex flex-col gap-5">
                            <div className="w-full">
                                <div className="w-full">
                                    <h2 className="text-lg text-gray-500">
                                        Cửa Hàng Nhận Thẻ
                                    </h2>
                                </div>

                                <div className="w-full mt-5">
                                    <div className="w-full mt-5 grid grid-cols-5 gap-3">
                                        {shopCards.map(card => (
                                            <ShopCardItem
                                                key={card.element}
                                                element={card.element}
                                                name={card.name}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="w-full">
                                <div className="w-full flex items-center">
                                    <h2 className="text-lg text-gray-500">
                                        Nâng Cấp Thẻ Nhận
                                    </h2>
                                    <div className="ml-auto flex gap-3">

                                        {/* CHỌN HỆ */}
                                        <div className="w-[150px] h-[38px]">
                                            <Select
                                                options={elementOptions}
                                                placeholder="Chọn Thẻ"
                                                value={selectedElement}
                                                onChange={setSelectedElement}
                                                styles={selectStyles}
                                            />
                                        </div>

                                        {/* CHỌN CẤP */}
                                        <div className="w-[150px] h-[38px]">
                                            <Select
                                                options={levelOptions}
                                                placeholder="Chọn Cấp"
                                                value={selectedLevel}
                                                onChange={setSelectedLevel}
                                                isDisabled={!selectedElement}
                                                styles={selectStyles}
                                            />
                                        </div>

                                    </div>

                                </div>

                                <div className="w-full mt-5">
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