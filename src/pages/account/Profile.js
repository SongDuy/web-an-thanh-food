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
                    <h1 className="text-[22px] text-black font-medium uppercase">
                        Thông Tin Tài Khoản
                    </h1>
                </div>
                
                <div className="w-full h-[555px] bg-white rounded">
                    kk
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ProfilePage;