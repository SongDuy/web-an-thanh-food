import { useState, useEffect, useRef } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Search from "../../components/Search";
import Notification from "../../components/Notification";

import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import ClearIcon from '@mui/icons-material/Clear';

const AddressPage = () => {
    const [openSearch, setOpenSearch] = useState(false);
    const [openNotification, setOpenNotification] = useState(false);

    // FORM
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [isDefault, setIsDefault] = useState(false);

    // VERIFY
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState("");
    const [countdown, setCountdown] = useState(0);
    const [phoneVerified, setPhoneVerified] = useState(false);

    const canSave =
        fullName.trim() &&
        phone.trim() &&
        address.trim() &&
        phoneVerified;

    /* ===== OTP ===== */
    useEffect(() => {
        if (countdown === 0) return;
        const timer = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [countdown]);

    const sendOtp = () => {
        setOtp("");
        setOtpSent(true);
        setCountdown(90);
    };

    const verifyOtp = () => {
        if (otp === "123456") {
            setPhoneVerified(true);
        }
    };

    const formatTime = (s) =>
        `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

    // chống bị nhảy ô nhập khi nhấn clear
    const fullNameRef = useRef(null);
    const phoneRef = useRef(null);
    const otpRef = useRef(null);

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
                        Địa chỉ nhận hàng
                    </h1>
                </div>

                <div className="w-full h-[555px] grid grid-cols-11 bg-white rounded-md border">
                    <div className="col-span-7 px-4 py-3 border-r">
                        <div className="w-full">
                            <h2 className="text-lg text-gray-500">
                                Địa chỉ đã lưu
                            </h2>
                        </div>

                        <div className="w-full py-4">

                            <div className="w-full border rounded-lg p-4 flex gap-3">
                                <HomeWorkIcon className="text-blue-500" />
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium">
                                            Nguyễn Văn A
                                        </span>
                                        <span className="text-sm text-gray-500">
                                            | 0909 123 456
                                        </span>
                                        <span className="text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-600 border">
                                            Mặc định
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-1">
                                        123 Nguyễn Trãi, Quận 1, TP.HCM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-4 px-4 py-3 border-l">
                        {/* RIGHT */}
                        <div className="w-full">
                            <h2 className="text-lg text-gray-500">
                                Thêm địa chỉ mới
                            </h2>
                        </div>

                        <div className="w-full flex flex-col py-4 gap-4 box-border">
                            {/* NAME */}
                            <div className="w-full">
                                <div className="flex items-center">
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <PersonIcon />
                                        <h3 className="text-black">Họ và tên</h3>
                                    </div>
                                </div>

                                <div className="relative w-full h-[38px] mt-4">
                                    <input
                                        type="text"
                                        value={fullName}
                                        onChange={(e) => {
                                            // Chuẩn hoá: bỏ ký tự lạ, gộp nhiều khoảng trắng, không cho space ở đầu
                                            const value = e.target.value
                                                .replace(/[^a-zA-ZÀ-ỹ\s]/g, "")   // chỉ cho chữ + tiếng Việt
                                                .replace(/\s+/g, " ")            // gộp nhiều space
                                                .trimStart();                   // không cho space đầu

                                            setFullName(value);
                                        }}
                                        placeholder="Ví dụ: Nguyễn Văn A"
                                        autoComplete="name"
                                        maxLength={100}
                                        className="w-full h-[38px] border rounded-md pl-2.5 pr-[35px] outline-none focus:ring-1 focus:ring-blue-400"
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


                            {/* PHONE */}
                            <div className="w-full">
                                <div className="flex items-center">
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <PhoneIcon />
                                        <h3 className="text-black">Số điện thoại</h3>
                                    </div>
                                </div>

                                <div className="w-full">

                                    <div className="w-full relative">
                                        <div className="relative w-full h-[38px] mt-4">
                                            <input
                                                type="tel"
                                                value={phone}
                                                onChange={(e) => {
                                                    // Chỉ cho nhập số và +
                                                    const value = e.target.value.replace(/[^0-9+]/g, "");
                                                    setPhone(value);
                                                    setPhoneVerified(false);
                                                    setOtpSent(false);
                                                }}
                                                placeholder="Ví dụ: 0901234567 hoặc +84901234567"
                                                inputMode="tel"
                                                autoComplete="tel"
                                                maxLength={15}
                                                pattern="(\+84|0)[0-9]{9}"
                                                className="w-full h-[38px] pl-3 pr-[130px] border rounded-md outline-none focus:ring-1 focus:ring-blue-400"
                                            />

                                            {phone && (
                                                <button
                                                    type="button"
                                                    onMouseDown={(e) => {
                                                        e.preventDefault(); // 🔥 ngăn mất focus
                                                        setPhone("");
                                                        phoneRef.current?.focus(); // giữ focus
                                                    }}
                                                    className="absolute pr-[95px] right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                >
                                                    <ClearIcon />
                                                </button>
                                            )}
                                        </div>

                                        {!phoneVerified && (
                                            <button
                                                onClick={sendOtp}
                                                disabled={countdown > 0}
                                                className={`absolute w-[95px] h-full right-0 top-0 text-sm border hover:border-r rounded-r-md font-medium
                                                    ${countdown
                                                        ? "text-gray-400 cursor-not-allowed bg-gray-100"
                                                        : "text-blue-500 hover:text-blue-600 hover:bg-blue-50"
                                                    }`}
                                            >
                                                {countdown ? formatTime(countdown) : "Gửi OTP"}
                                            </button>
                                        )}
                                    </div>

                                    {phoneVerified && (
                                        <div className="mt-2 text-sm text-green-600 flex items-center gap-1">
                                            <VerifiedOutlinedIcon fontSize="small" />
                                            Đã xác minh
                                        </div>
                                    )}

                                    {/* OTP */}
                                    {otpSent && !phoneVerified && (
                                        <div className="w-full relative mt-3">
                                            <div className="relative w-full h-[38px] mt-4">
                                                <input
                                                    type="text"
                                                    value={otp}
                                                    onChange={(e) => {
                                                        // Chỉ cho nhập số
                                                        const value = e.target.value.replace(/\D/g, "");
                                                        setOtp(value);
                                                    }}
                                                    placeholder="Nhập mã OTP"
                                                    inputMode="numeric"
                                                    autoComplete="one-time-code"
                                                    maxLength={6}
                                                    pattern="[0-9]{6}"
                                                    className="w-full h-[38px] pl-3 pr-[130px] border rounded-md outline-none focus:ring-1 focus:ring-blue-400"
                                                />

                                                {otp && (
                                                    <button
                                                        type="button"
                                                        onMouseDown={(e) => {
                                                            e.preventDefault(); // 🔥 ngăn mất focus
                                                            setOtp("");
                                                            otpRef.current?.focus(); // giữ focus
                                                        }}
                                                        className="absolute pr-[95px] right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                    >
                                                        <ClearIcon />
                                                    </button>
                                                )}
                                            </div>

                                            <button
                                                onClick={verifyOtp}
                                                className="absolute w-[95px] h-full right-0 top-0 text-sm border hover:border-r rounded-r-md bg-blue-500 hover:bg-blue-600 text-white font-medium"
                                            >
                                                Xác minh
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* ADDRESS */}
                            <div className="w-full">
                                <div className="flex items-center">
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <HomeWorkIcon />
                                        <h3 className="text-black">Địa chỉ</h3>
                                    </div>
                                </div>

                                <div className="w-full mt-4">
                                    <textarea
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        rows={3}
                                        placeholder="Ví dụ: 25 Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP.HCM"
                                        autoComplete="shipping street-address"
                                        minLength={10}
                                        maxLength={300}
                                        className="w-full h-[90px] border rounded-md px-2.5 py-2 resize-none overflow-y-auto outline-none focus:ring-1 focus:ring-blue-400"
                                    />

                                </div>
                            </div>

                            {/* DEFAULT */}
                            <div className="w-full">
                                <label className="flex items-center gap-2 text-sm">
                                    <input
                                        type="checkbox"
                                        checked={isDefault}
                                        onChange={(e) =>
                                            setIsDefault(e.target.checked)
                                        }
                                        className="accent-blue-500 scale-125"
                                    />
                                    <span className="h-full flex items-center pb-1">
                                        Đặt làm địa chỉ mặc định
                                    </span>
                                </label>
                            </div>

                            {/* SAVE */}
                            <div className="w-full mt-1 flex items-center justify-center">
                                <button
                                    disabled={!canSave}
                                    className={`w-[200px] h-full px-3 py-2 text-md  font-medium shadow rounded
                                         ${canSave
                                            ? "text-white bg-gradient-to-t from-blue-400 via-blue-500 to-blue-600 hover:brightness-110 active:brightness-95 transition border-b-2 border-blue-500 "
                                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                        }`}
                                >
                                    Lưu địa chỉ
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default AddressPage;
