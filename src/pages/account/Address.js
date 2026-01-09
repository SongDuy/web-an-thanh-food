import { useState, useEffect } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Search from "../../components/Search";
import Notification from "../../components/Notification";

import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
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
        setCountdown(90);
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

                        <div className="w-full py-4">
                            <div className="flex flex-col gap-4">
                                {/* NAME */}
                                <div className="w-full">
                                    <div className="flex items-center">
                                        <div className="flex items-center gap-2 text-gray-500">
                                            <PersonIcon />
                                            <h3 className="text-black">Họ và tên</h3>
                                        </div>
                                    </div>

                                    <div className="w-full mt-4">
                                        <input
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            placeholder="Thêm họ và tên"
                                            className="w-full h-[38px] px-2.5 py-2 border rounded focus:ring-1 focus:ring-blue-400"
                                        />
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

                                    <div className="w-full mt-4">
                                        <div className="w-full relative">
                                            <input
                                                value={phone}
                                                onChange={(e) => {
                                                    setPhone(e.target.value);
                                                    setPhoneVerified(false);
                                                    setOtpSent(false);
                                                }}
                                                placeholder="Thêm số điện thoại"
                                                className="w-full h-[38px] pl-3 pr-[100px] border rounded focus:ring-1 focus:ring-blue-400"
                                            />

                                            {!phoneVerified && (
                                                <button
                                                    onClick={sendOtp}
                                                    disabled={countdown > 0}
                                                    className={`absolute right-0 top-0 h-full w-[95px] text-sm border rounded-r font-medium
                                                    ${countdown
                                                            ? "text-gray-400 cursor-not-allowed bg-gray-50"
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
                                                <input
                                                    value={otp}
                                                    onChange={(e) => setOtp(e.target.value)}
                                                    placeholder="Nhập OTP"
                                                    className="w-full h-[38px] pl-3 pr-[100px] border rounded focus:ring-1 focus:ring-blue-400"
                                                />
                                                <button
                                                    onClick={verifyOtp}
                                                    className="absolute right-0 top-0 h-full w-[95px] text-sm border rounded-r bg-blue-500 hover:bg-blue-600 text-white font-medium"
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
                                            placeholder="Thêm địa chỉ"
                                            className="w-full px-2.5 py-2 border rounded focus:ring-1 focus:ring-blue-400 resize-none"
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
                                <div className="w-full flex items-center justify-center mt-3">
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
            </div>

            <Footer />
        </>
    );
};

export default AddressPage;
