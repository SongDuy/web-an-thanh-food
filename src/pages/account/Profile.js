import { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Search from "../../components/Search";
import Notification from "../../components/Notification";

const ProfilePage = () => {
    const [openSearch, setOpenSearch] = useState(false);
    const [openNotification, setOpenNotification] = useState(false);

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

            <div className="w-full bg-soft px-[160px] pt-[100px] pb-[45px]">
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

                        <div className="w-full grid grid-cols-1 gap-10">
                            <div className="w-full h-[120px] px-10 mt-5">
                                <div className="w-full h-full flex items-center gap-10 border">
                                    <div className="w-[120px] h-[120px] rounded-full border-4 border-blue-200 flex items-center justify-center">
                                        kkkk
                                    </div>
                                    <div className="grid grid-cols-1 gap-8 border">
                                        <div>
                                            <h1>
                                                kk
                                            </h1>
                                            <div>

                                            </div>
                                        </div>

                                        <div>
                                            <h1>
                                                kk
                                            </h1>
                                            <div>

                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="w-full grid grid-cols-1 gap-10 px-[100px]">
                                <div className="w-full h-[40px] flex items-center border">
                                    kk
                                </div>

                                <div className="w-full h-[40px] flex items-center">
                                    kk
                                </div>

                                <div className="w-full h-[40px] flex items-center">
                                    kk
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
                        <div className="w-full h-1/2 border-b">
                            <h1 className="text-lg text-gray-500">
                                Địa chỉ Email
                            </h1>
                        </div>

                        <div className="w-full h-1/2 border-t pt-3">
                            <h1 className="text-lg text-gray-500">
                                Bảo mật
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ProfilePage;