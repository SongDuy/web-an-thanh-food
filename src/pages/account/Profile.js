import { useState, useMemo } from "react";
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

countries.registerLocale(vi);

const ProfilePage = () => {
    const [openSearch, setOpenSearch] = useState(false);
    const [openNotification, setOpenNotification] = useState(false);

    // Ẩn cập nhật Email
    const [showEditEmail, setShowEditEmail] = useState(false);

    //Ẩn cập nhật Mật khẩu
    const [showEditPassword, setShowEditPassword] = useState(false);

    // Chọn Ngày tháng năm
    const dayOptions = Array.from({ length: 31 }, (_, i) => ({
        value: i + 1,
        label: i + 1,
    }));

    const monthOptions = Array.from({ length: 12 }, (_, i) => ({
        value: i + 1,
        label: i + 1,
    }));

    const yearOptions = Array.from({ length: 100 }, (_, i) => {
        const year = new Date().getFullYear() - i;
        return { value: year, label: year };
    });

    const selectStyles = {
        control: (base) => ({
            ...base,
            minHeight: "35px",
            height: "35px",
            borderRadius: "6px",
            borderColor: "#d1d5db", // gray-300
            boxShadow: "none",
            "&:hover": {
                borderColor: "#60a5fa", // blue-400
            },
        }),
        valueContainer: (base) => ({
            ...base,
            padding: "0 8px",
        }),
        indicatorsContainer: (base) => ({
            ...base,
            height: "35px",
        }),
        menuList: (base) => ({
            ...base,
            maxHeight: "200px", // scroll đẹp
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

                <div className="w-full h-[555px] grid grid-cols-11 bg-white rounded border">
                    <div className="col-span-7 px-4 py-3 border-r">
                        <div className="w-full">
                            <h1 className="text-lg text-gray-500">
                                Thông tin cá nhân
                            </h1>
                        </div>

                        <div className="w-full grid grid-cols-1 gap-8">
                            <div className="w-full h-[120px] px-10 mt-5">
                                <div className="w-full h-full flex items-center gap-5">

                                    <div className="w-[120px] h-[120px] rounded-full border-4 border-blue-200 text-blue-500 flex items-center justify-center">
                                        <PersonOutlineOutlinedIcon sx={{ fontSize: '85px' }} />
                                    </div>

                                    {/* 👇 PHẢI CÓ flex-1 */}
                                    <div className="grid grid-cols-1 gap-8 flex-1 min-w-0">
                                        <div className="w-full h-[35px] grid grid-cols-[auto_1fr] items-center gap-14">
                                            <span className="w-[75px] whitespace-nowrap">
                                                Họ & Tên
                                            </span>
                                            <div className="border w-full h-full flex items-center">
                                                kk
                                            </div>
                                        </div>

                                        <div className="w-full h-[35px] grid grid-cols-[auto_1fr] items-center gap-14">
                                            <span className="w-[75px] whitespace-nowrap">
                                                Nickname
                                            </span>
                                            <div className="border w-full h-full flex items-center">
                                                kk
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="w-full grid grid-cols-1 gap-8 px-[100px]">
                                <div className="w-full h-[35px] grid grid-cols-[auto_1fr] items-center gap-14">
                                    <span className="w-[75px] whitespace-nowrap">
                                        Ngày sinh
                                    </span>

                                    <div className="grid grid-cols-3 gap-3 h-full">
                                        {/* Ngày */}
                                        <Select
                                            options={dayOptions}
                                            placeholder="Ngày"
                                            styles={selectStyles}
                                        />

                                        {/* Tháng */}
                                        <Select
                                            options={monthOptions}
                                            placeholder="Tháng"
                                            styles={selectStyles}
                                        />

                                        {/* Năm */}
                                        <Select
                                            options={yearOptions}
                                            placeholder="Năm"
                                            styles={selectStyles}
                                        />
                                    </div>

                                </div>

                                <div className="w-full h-[35px] grid grid-cols-[auto_1fr] items-center gap-14">
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

                                <div className="w-full h-[35px] grid grid-cols-[auto_1fr] items-center gap-14">
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
                                            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                                        }}
                                        className="w-full"
                                    />

                                </div>
                            </div>


                            <div className="w-full flex items-center justify-center">
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
                                        className="ml-auto h-8 px-3 rounded-md border-2 border-blue-400 text-sm font-medium text-blue-500 hover:text-blue-600"
                                    >
                                        Cập nhật
                                    </button>
                                </div>

                                <div className="w-full min-h-[110px] mt-3">
                                    {showEditEmail && (
                                        <div className="w-full flex flex-col gap-8">
                                            <div className="w-full h-[35px] border">

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
                                        className="ml-auto h-8 px-3 rounded-md border-2 border-blue-400 text-sm font-medium text-blue-500 hover:text-blue-600"
                                    >
                                        Cập nhật
                                    </button>
                                </div>

                                <div className="w-full min-h-[180px] mt-3">
                                    {showEditPassword && (
                                        <div className="w-full flex flex-col gap-8 ">

                                            <div className="w-full h-[35px] border">

                                            </div>

                                            <div className="w-full h-[35px] border">

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