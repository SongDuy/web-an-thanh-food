import { useState } from "react";

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

    // FORM STATE
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [isDefault, setIsDefault] = useState(false);

    // PHONE VERIFY
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState("");
    const [phoneVerified, setPhoneVerified] = useState(false);

    const canSave =
        fullName.trim() &&
        phone.trim() &&
        address.trim() &&
        phoneVerified;

    return (
        <>
            <Header
                onOpenSearch={() => {
                    setOpenNotification(false);
                    setOpenSearch(true);
                }}
                onOpenNotify={() => {
                    setOpenSearch(false);
                    setOpenNotification(true);
                }}
            />

            {openSearch && <Search onClose={() => setOpenSearch(false)} />}
            {openNotification && (
                <Notification onClose={() => setOpenNotification(false)} />
            )}

            <div className="w-full bg-soft px-[160px] pt-[100px] pb-[50px]">
                <div className="w-full py-[25px]">
                    <h1 className="text-[22px] font-semibold uppercase">
                        Địa Chỉ Nhận Hàng
                    </h1>
                </div>

                <div className="grid grid-cols-11 bg-white rounded-md border min-h-[555px]">
                    {/* LEFT */}
                    <div className="col-span-7 px-6 py-5 border-r">
                        <h2 className="text-lg text-gray-500 mb-5">
                            Địa chỉ đã lưu
                        </h2>

                        <div className="border rounded-lg p-5 flex gap-4">
                            <LocationOnOutlinedIcon className="text-blue-500" />
                            <div className="flex-1">
                                <div className="flex items-center gap-3">
                                    <span className="font-semibold">
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

                    {/* RIGHT */}
                    <div className="col-span-4 px-6 py-5">
                        <h2 className="text-lg text-gray-500 mb-5">
                            Thêm địa chỉ mới
                        </h2>

                        <div className="flex flex-col gap-5">
                            {/* NAME */}
                            <div className="relative">
                                <PersonOutlineOutlinedIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    placeholder="Họ và tên người nhận"
                                    className="w-full h-[40px] pl-10 pr-3 border rounded-md focus:ring-1 focus:ring-blue-400"
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
                                        className="w-full h-[40px] pl-10 pr-24 border rounded-md focus:ring-1 focus:ring-blue-400"
                                    />

                                    {!phoneVerified && (
                                        <button
                                            type="button"
                                            onClick={() => setOtpSent(true)}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 text-sm px-3 py-1 border rounded text-blue-500 hover:bg-blue-50"
                                        >
                                            Gửi OTP
                                        </button>
                                    )}
                                </div>

                                {phoneVerified && (
                                    <div className="text-sm text-green-600 flex items-center gap-1 mt-1">
                                        <VerifiedOutlinedIcon fontSize="small" />
                                        Số điện thoại đã xác minh
                                    </div>
                                )}
                            </div>

                            {/* OTP */}
                            {otpSent && !phoneVerified && (
                                <div className="flex gap-3">
                                    <input
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        placeholder="Nhập mã OTP"
                                        className="flex-1 h-[38px] border rounded-md px-3 focus:ring-1 focus:ring-blue-400"
                                    />
                                    <button
                                        onClick={() => {
                                            if (otp === "123456") {
                                                setPhoneVerified(true);
                                            }
                                        }}
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
                                    className="w-full pl-10 pr-3 py-2 border rounded-md focus:ring-1 focus:ring-blue-400 resize-none"
                                />
                            </div>

                            {/* DEFAULT */}
                            <label className="flex items-center gap-2 text-sm">
                                <input
                                    type="checkbox"
                                    checked={isDefault}
                                    onChange={(e) => setIsDefault(e.target.checked)}
                                    className="scale-125 accent-blue-500"
                                />
                                Đặt làm địa chỉ mặc định
                            </label>

                            {/* SAVE */}
                            <button
                                disabled={!canSave}
                                className={`w-full py-2.5 rounded font-medium transition
                                    ${canSave
                                        ? "bg-gradient-to-t from-blue-400 via-blue-500 to-blue-600 text-white hover:brightness-110"
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
