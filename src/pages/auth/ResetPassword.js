import { useState } from "react";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Search from '../../components/Search';
import Notification from '../../components/Notification'

const ResetPasswordPage = () => {

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

            <div>

            </div>

            <Footer />
        </>
    );
};

export default ResetPasswordPage;