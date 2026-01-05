import { useState, useMemo, useRef, useEffect } from "react";
import Select from "react-select";
import countries from "i18n-iso-countries";
import vi from "i18n-iso-countries/langs/vi.json";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Search from "../../components/Search";
import Notification from "../../components/Notification";

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockIcon from '@mui/icons-material/Lock';
import ClearIcon from '@mui/icons-material/Clear';

countries.registerLocale(vi);

const ProfilePage = () => {
    const [openSearch, setOpenSearch] = useState(false);
    const [openNotification, setOpenNotification] = useState(false);

    // Ẩn cập nhật Email
    const [showEditEmail, setShowEditEmail] = useState(false);

    // Ẩn cập nhật Mật khẩu
    const [showEditPassword, setShowEditPassword] = useState(false);

    // Nhập họ và tên
    const [fullName, setFullName] = useState("");

    // Nhập Nickname
    const [nickname, setNickname] = useState("");

    // Nhập Email
    const [email, setEmail] = useState("");

    // Nhập mật khẩu mới
    const [newPassword, setNewPassword] = useState("");

    //Nhập lại mật khẩu mới
    const [confirmPassword, setConfirmPassword] = useState("");

    // Chọn Ngày tháng năm
    const [day, setDay] = useState(null);
    const [month, setMonth] = useState(null);
    const [year, setYear] = useState(null);

    // Hàm xử lý năm nhuận
    const getDaysInMonth = (month, year) => {
        if (!month || !year) return 31;
        return new Date(year, month, 0).getDate();
    };

    const dayOptions = useMemo(() => {
        const days = getDaysInMonth(month?.value, year?.value);

        return Array.from({ length: days }, (_, i) => ({
            value: i + 1,
            label: i + 1,
        }));
    }, [month, year]);

    const monthOptions = Array.from({ length: 12 }, (_, i) => ({
        value: i + 1,
        label: i + 1,
    }));

    const yearOptions = Array.from({ length: 100 }, (_, i) => {
        const year = new Date().getFullYear() - i;
        return { value: year, label: year };
    });



    //RESET ngày nếu đổi tháng / năm mà ngày cũ không hợp lệ
    useEffect(() => {
        if (day && month && year) {
            const maxDay = getDaysInMonth(month.value, year.value);
            if (day.value > maxDay) {
                setDay(null);
            }
        }
    }, [day, month, year]);

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



    // Chọn quốc gia 
    const options = useMemo(() => {
        return Object.entries(
            countries.getNames("vi", { select: "official" })
        ).map(([code, name]) => ({
            value: code,
            label: name, // 👉 Có dấu tiếng Việt
        }));
    }, []);

    // chống bị nhảy ô nhập khi nhấn clear
    const fullNameRef = useRef(null);
    const nicknameRef = useRef(null);
    const emailRef = useRef(null);
    const newPasswordRef = useRef(null);
    const confirmPasswordRef = useRef(null);

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
                        Thông Tin Tài Khoản
                    </h1>
                </div>

                <div className="w-full h-[555px] grid grid-cols-11 bg-white rounded-md border">
                    <div className="col-span-7 px-4 py-3 border-r">
                        <div className="w-full">
                            <h1 className="text-lg text-gray-500">
                                Thông tin cá nhân
                            </h1>
                        </div>

                        <div className="w-full flex flex-col gap-7">
                            <div className="w-full h-[120px] px-10 mt-5">
                                <div className="w-full h-full flex items-center gap-5">

                                    <div className="w-[120px] h-[120px] rounded-full border-4 border-blue-200 text-blue-500 flex items-center justify-center">
                                        <PersonOutlineOutlinedIcon sx={{ fontSize: '85px' }} />
                                    </div>

                                    {/* 👇 PHẢI CÓ flex-1 */}
                                    <div className="grid grid-cols-1 gap-8 flex-1 min-w-0">
                                        <div className="w-full h-[38px] grid grid-cols-[auto_1fr] items-center gap-14">
                                            <span className="w-[75px] whitespace-nowrap">
                                                Họ & Tên
                                            </span>
                                            <div className="relative w-full h-[38px]">
                                                <input
                                                    ref={fullNameRef}   // 👈 thiếu dòng này
                                                    type="text"
                                                    value={fullName}
                                                    onChange={(e) => setFullName(e.target.value)}
                                                    placeholder="Thêm họ tên"
                                                    className="w-full h-full border rounded-md px-2.5 outline-none focus:ring-1 focus:ring-blue-400"
                                                />

                                                {fullName && (
                                                    <button
                                                        type="button"
                                                        onMouseDown={(e) => {
                                                            e.preventDefault(); // 🔥 ngăn mất focus
                                                            setFullName("");
                                                            fullNameRef.current?.focus(); // giữ focus
                                                        }}
                                                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                    >
                                                        <ClearIcon />
                                                    </button>
                                                )}
                                            </div>
                                        </div>

                                        <div className="w-full h-[38px] grid grid-cols-[auto_1fr] items-center gap-14">
                                            <span className="w-[75px] whitespace-nowrap">
                                                Nickname
                                            </span>
                                            <div className="relative w-full h-[38px]">
                                                <input
                                                    ref={nicknameRef}   // 👈 thiếu dòng này
                                                    type="text"
                                                    value={nickname}
                                                    onChange={(e) => setNickname(e.target.value)}
                                                    placeholder="Thêm Nickname"
                                                    className="w-full h-full border rounded-md px-2.5 outline-none focus:ring-1 focus:ring-blue-400"
                                                />

                                                {nickname && (
                                                    <button
                                                        type="button"
                                                        onMouseDown={(e) => {
                                                            e.preventDefault(); // 🔥 ngăn mất focus
                                                            setNickname("");
                                                            nicknameRef.current?.focus(); // giữ focus
                                                        }}
                                                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                    >
                                                        <ClearIcon />
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="w-full flex flex-col px-[100px]">
                                <div className="w-full h-[38px] grid grid-cols-[auto_1fr] items-center gap-14 mb-[25px]">
                                    <span className="w-[75px] whitespace-nowrap">
                                        Ngày sinh
                                    </span>

                                    <div className="grid grid-cols-3 gap-3 h-full">
                                        {/* Ngày */}
                                        <Select
                                            options={dayOptions}
                                            placeholder="Ngày"
                                            value={day}
                                            onChange={setDay}
                                            isDisabled={!year || !month}
                                            styles={selectStyles}
                                        />

                                        {/* Tháng */}
                                        <Select
                                            options={monthOptions}
                                            placeholder="Tháng"
                                            value={month}
                                            onChange={(m) => {
                                                setMonth(m);
                                                setDay(null); // reset ngày khi đổi tháng
                                            }}
                                            isDisabled={!year}
                                            styles={selectStyles}
                                        />

                                        {/* Năm */}
                                        <Select
                                            options={yearOptions}
                                            placeholder="Năm"
                                            value={year}
                                            onChange={(y) => {
                                                setYear(y);
                                                setMonth(null);
                                                setDay(null);
                                            }}
                                            styles={selectStyles}
                                        />

                                    </div>
                                </div>

                                <div className="w-full h-[38px] grid grid-cols-[auto_1fr] items-center gap-14">
                                    <span className="w-[75px] whitespace-nowrap">
                                        Giới tính
                                    </span>
                                    <div className="w-full h-full flex items-center px-3 gap-8">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="male"
                                                className="scale-150 accent-blue-500"
                                            />
                                            <span>Nam</span>
                                        </label>

                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="female"
                                                className="scale-150 accent-blue-500"
                                            />
                                            <span>Nữ</span>
                                        </label>

                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="other"
                                                className="scale-150 accent-blue-500"
                                            />
                                            <span>Khác</span>
                                        </label>
                                    </div>

                                </div>

                                <div className="w-full h-[38px] grid grid-cols-[auto_1fr] items-center gap-14 mt-[22px]">
                                    <span className="w-[75px] whitespace-nowrap">
                                        Quốc tịch
                                    </span>

                                    <Select
                                        options={options}
                                        placeholder="Quốc gia"
                                        menuPortalTarget={document.body}
                                        menuPosition="fixed"
                                        menuPlacement="auto"
                                        styles={{
                                            ...selectStyles, // ⭐ QUAN TRỌNG
                                            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                                        }}
                                        className="w-full h-full"
                                    />
                                </div>
                            </div>

                            <div className="w-full flex items-center justify-center mt-1.5">
                                <button className="w-[200px] px-2 py-2 text-md text-white font-medium shadow rounded bg-gradient-to-t from-blue-400 via-blue-500 to-blue-600 hover:brightness-110 active:brightness-95 transition border-b-2 border-blue-500">
                                    Lưu thay đổi
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className="col-span-4 px-4 py-3 border-l">
                        <div className="w-full h-full flex flex-col gap-10">
                            <div className="w-full">
                                <h1 className="text-lg text-gray-500">Email</h1>

                                <div className="mt-5 flex items-center">
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <EmailOutlinedIcon />
                                        <span className="text-black">Địa chỉ Email</span>
                                    </div>

                                    <button
                                        onClick={() => setShowEditEmail(v => !v)}
                                        className="ml-auto h-8 px-3 rounded border-2 border-blue-400 text-sm font-medium text-blue-500 hover:text-blue-600"
                                    >
                                        Cập nhật
                                    </button>
                                </div>

                                <div className="w-full min-h-[112px] mt-3">
                                    {showEditEmail && (
                                        <div className="w-full flex flex-col gap-8">
                                            <div className="relative w-full h-[38px]">
                                                <input
                                                    ref={emailRef}   // 👈 thiếu dòng này
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="Nhập Email"
                                                    className="w-full h-[38px] border rounded-md px-2.5 outline-none focus:ring-1 focus:ring-blue-400"
                                                />

                                                {email && (
                                                    <button
                                                        type="button"
                                                        onMouseDown={(e) => {
                                                            e.preventDefault(); // 🔥 ngăn mất focus
                                                            setEmail("");
                                                            emailRef.current?.focus(); // giữ focus
                                                        }}
                                                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                    >
                                                        <ClearIcon />
                                                    </button>
                                                )}
                                            </div>
                                            <div className="w-full flex items-center justify-center">
                                                <button className="w-[200px] h-full px-3 py-2 text-md text-white font-medium shadow rounded bg-gradient-to-t from-blue-400 via-blue-500 to-blue-600 hover:brightness-110 active:brightness-95 transition border-b-2 border-blue-500">
                                                    Lưu thay đổi
                                                </button>

                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="w-full">
                                <h1 className="text-lg text-gray-500">Bảo mật</h1>

                                <div className="mt-5 flex items-center">
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <LockIcon />
                                        <span className="text-black">Thiết lập mật khẩu</span>
                                    </div>

                                    <button
                                        onClick={() => setShowEditPassword(v => !v)}
                                        className="ml-auto h-8 px-3 rounded border-2 border-blue-400 text-sm font-medium text-blue-500 hover:text-blue-600"
                                    >
                                        Cập nhật
                                    </button>
                                </div>

                                <div className="w-full min-h-[180px] mt-3">
                                    {showEditPassword && (
                                        <div className="w-full flex flex-col gap-8 ">

                                            {/* Mật khẩu mới */}
                                            <div className="relative w-full h-[38px]">
                                                <input
                                                    ref={newPasswordRef}   // 👈 thiếu dòng này
                                                    type="password"
                                                    value={newPassword}
                                                    onChange={(e) => setNewPassword(e.target.value)}
                                                    placeholder="Nhập mật khẩu mới"
                                                    className="w-full h-full border rounded-md px-2.5 outline-none focus:ring-1 focus:ring-blue-400"
                                                />
                                                {newPassword && (
                                                    <button
                                                        type="button"
                                                        onMouseDown={(e) => {
                                                            e.preventDefault(); // 🔥 ngăn mất focus
                                                            setNewPassword("");
                                                            newPasswordRef.current?.focus(); // giữ focus
                                                        }}
                                                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                    >
                                                        <ClearIcon />
                                                    </button>
                                                )}
                                            </div>

                                            {/* Nhập lại mật khẩu */}
                                            <div className="relative w-full h-[38px]">
                                                <input
                                                    ref={confirmPasswordRef}   // 👈 thiếu dòng này
                                                    type="password"
                                                    value={confirmPassword}
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                    placeholder="Nhập lại mật khẩu mới"
                                                    className="w-full h-full border rounded-md px-2.5 outline-none focus:ring-1 focus:ring-blue-400"
                                                />

                                                {confirmPassword && (
                                                    <button
                                                        type="button"
                                                        onMouseDown={(e) => {
                                                            e.preventDefault(); // 🔥 ngăn mất focus
                                                            setConfirmPassword("");
                                                            confirmPasswordRef.current?.focus(); // giữ focus
                                                        }}
                                                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                    >
                                                        <ClearIcon />
                                                    </button>
                                                )}
                                            </div>

                                            <div className="w-full flex items-center justify-center">
                                                <button className="w-[200px] h-full px-3 py-2 text-md text-white font-medium shadow rounded bg-gradient-to-t from-blue-400 via-blue-500 to-blue-600 hover:brightness-110 active:brightness-95 transition border-b-2 border-blue-500">
                                                    Lưu thay đổi
                                                </button>
                                            </div>
                                        </div>
                                    )}
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

export default ProfilePage;