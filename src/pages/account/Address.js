import { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Search from "../../components/Search";
import Notification from "../../components/Notification";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";

const AddressPage = () => {
    const [openSearch, setOpenSearch] = useState(false);
    const [openNotification, setOpenNotification] = useState(false);

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
                {/* Title */}
                <div className="w-full py-[25px] flex items-center gap-1">
                    <h1 className="text-[22px] text-black font-semibold uppercase">
                        Địa Chỉ Nhận Hàng
                    </h1>
                </div>

                <div className="w-full min-h-[555px] grid grid-cols-11 bg-white rounded-md border">
                    {/* LEFT – Danh sách địa chỉ */}
                    <div className="col-span-7 px-6 py-5 border-r">
                        <h2 className="text-lg text-gray-500 mb-5">
                            Địa chỉ đã lưu
                        </h2>

                        <div className="flex flex-col gap-5">
                            {/* Card địa chỉ */}
                            <div className="w-full border rounded-lg p-5 flex gap-4 hover:shadow transition">
                                <div className="text-blue-500">
                                    <LocationOnOutlinedIcon />
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center gap-3">
                                        <span className="font-semibold text-black">
                                            Nguyễn Văn A
                                        </span>
                                        <span className="text-sm text-gray-500">
                                            | 0909 123 456
                                        </span>
                                        <span className="ml-2 text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-600 border border-blue-200">
                                            Mặc định
                                        </span>
                                    </div>

                                    <p className="text-gray-600 mt-1 text-sm">
                                        123 Nguyễn Trãi, Phường Bến Thành,
                                        Quận 1, TP. Hồ Chí Minh
                                    </p>

                                    <div className="flex gap-5 mt-3 text-sm">
                                        <button className="text-blue-500 hover:underline">
                                            Chỉnh sửa
                                        </button>
                                        <button className="text-red-500 hover:underline">
                                            Xoá
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Card địa chỉ khác */}
                            <div className="w-full border rounded-lg p-5 flex gap-4 hover:shadow transition">
                                <div className="text-gray-400">
                                    <LocationOnOutlinedIcon />
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center gap-3">
                                        <span className="font-semibold text-black">
                                            Trần Thị B
                                        </span>
                                        <span className="text-sm text-gray-500">
                                            | 0988 888 888
                                        </span>
                                    </div>

                                    <p className="text-gray-600 mt-1 text-sm">
                                        45 Lê Duẩn, Quận Hải Châu, Đà Nẵng
                                    </p>

                                    <div className="flex gap-5 mt-3 text-sm">
                                        <button className="text-blue-500 hover:underline">
                                            Chỉnh sửa
                                        </button>
                                        <button className="text-red-500 hover:underline">
                                            Xoá
                                        </button>
                                        <button className="text-gray-500 hover:underline">
                                            Đặt làm mặc định
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT – Thêm địa chỉ */}
                    <div className="col-span-4 px-6 py-5">
                        <h2 className="text-lg text-gray-500 mb-5">
                            Thêm địa chỉ mới
                        </h2>

                        <div className="flex flex-col gap-5">
                            {/* Tên */}
                            <div className="relative">
                                <PersonOutlineOutlinedIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Họ và tên người nhận"
                                    className="w-full h-[40px] pl-10 pr-3 border rounded-md outline-none focus:ring-1 focus:ring-blue-400"
                                />
                            </div>

                            {/* SĐT */}
                            <div className="relative">
                                <PhoneOutlinedIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Số điện thoại liên hệ"
                                    className="w-full h-[40px] pl-10 pr-3 border rounded-md outline-none focus:ring-1 focus:ring-blue-400"
                                />
                            </div>

                            {/* Địa chỉ */}
                            <div className="relative">
                                <AddLocationAltOutlinedIcon className="absolute left-3 top-3 text-gray-400" />
                                <textarea
                                    rows={3}
                                    placeholder="Địa chỉ chi tiết (Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành phố)"
                                    className="w-full pl-10 pr-3 py-2 border rounded-md outline-none focus:ring-1 focus:ring-blue-400 resize-none"
                                />
                            </div>

                            {/* Checkbox */}
                            <label className="flex items-center gap-2 text-sm cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="scale-125 accent-blue-500"
                                />
                                Đặt làm địa chỉ mặc định
                            </label>

                            {/* Button */}
                            <button className="w-full py-2.5 text-white font-medium rounded bg-gradient-to-t from-blue-400 via-blue-500 to-blue-600 hover:brightness-110 active:brightness-95 transition shadow border-b-2 border-blue-500">
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
