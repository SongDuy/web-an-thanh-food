import { useState, useEffect } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Search from "../../components/Search";
import Notification from "../../components/Notification";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";

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
        setCountdown(60);
    };

    const verifyOtp = () => {
        if (otp === "123456") {
            setPhoneVerified(true);
        }
    };

    const formatTime = (s) =>
        `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

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

                            <div className="border rounded-lg p-4 flex gap-3">
                                <LocationOnOutlinedIcon className="text-blue-500" />
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
                        <h2 className="text-gray-500 mb-4">
                            Thêm địa chỉ mới
                        </h2>

                        <div className="flex flex-col gap-4">
                            {/* NAME */}
                            <div className="relative">
                                <PersonOutlineOutlinedIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    placeholder="Họ và tên người nhận"
                                    className="w-full h-10 pl-10 pr-3 border rounded focus:ring-1 focus:ring-blue-400"
                                />
                            </div>

                            {/* PHONE */}
                            <div>
                                <div className="relative">
                                    <PhoneOutlinedIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        value={phone}
                                        onChange={(e) => {
                                            setPhone(e.target.value);
                                            setPhoneVerified(false);
                                            setOtpSent(false);
                                        }}
                                        placeholder="Số điện thoại"
                                        className="w-full h-10 pl-10 pr-24 border rounded focus:ring-1 focus:ring-blue-400"
                                    />

                                    {!phoneVerified && (
                                        <button
                                            onClick={sendOtp}
                                            disabled={countdown > 0}
                                            className={`absolute right-2 top-1/2 -translate-y-1/2 text-sm px-3 py-1 rounded border
                                            ${countdown
                                                    ? "text-gray-400 cursor-not-allowed"
                                                    : "text-blue-500 hover:bg-blue-50"
                                                }`}
                                        >
                                            {countdown
                                                ? formatTime(countdown)
                                                : "Gửi OTP"}
                                        </button>
                                    )}
                                </div>

                                {phoneVerified && (
                                    <div className="mt-1 text-sm text-green-600 flex items-center gap-1">
                                        <VerifiedOutlinedIcon fontSize="small" />
                                        Đã xác minh
                                    </div>
                                )}
                            </div>

                            {/* OTP */}
                            {otpSent && !phoneVerified && (
                                <div className="flex gap-2">
                                    <input
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        placeholder="Nhập OTP"
                                        className="flex-1 h-10 border rounded px-3 focus:ring-1 focus:ring-blue-400"
                                    />
                                    <button
                                        onClick={verifyOtp}
                                        className="px-4 rounded bg-blue-500 text-white hover:bg-blue-600"
                                    >
                                        Xác minh
                                    </button>
                                </div>
                            )}

                            {/* ADDRESS */}
                            <div className="relative">
                                <AddLocationAltOutlinedIcon className="absolute left-3 top-3 text-gray-400" />
                                <textarea
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    rows={3}
                                    placeholder="Địa chỉ chi tiết"
                                    className="w-full pl-10 pr-3 py-2 border rounded focus:ring-1 focus:ring-blue-400 resize-none"
                                />
                            </div>

                            {/* DEFAULT */}
                            <label className="flex items-center gap-2 text-sm">
                                <input
                                    type="checkbox"
                                    checked={isDefault}
                                    onChange={(e) =>
                                        setIsDefault(e.target.checked)
                                    }
                                    className="accent-blue-500 scale-125"
                                />
                                Đặt làm địa chỉ mặc định
                            </label>

                            {/* SAVE */}
                            <button
                                disabled={!canSave}
                                className={`w-full py-2.5 rounded font-medium
                                ${canSave
                                        ? "bg-blue-500 text-white hover:bg-blue-600"
                                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    }`}
                            >
                                Lưu địa chỉ
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default AddressPage;
