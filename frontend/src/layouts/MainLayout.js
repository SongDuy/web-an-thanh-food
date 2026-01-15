import { useState } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import BannerSlider from '../components/BannerSlider';
import Search from '../components/Search';
import Notification from '../components/Notification'
const MainLayout = ({ children }) => {
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

            <BannerSlider />

            <main className="px-[160px] pb-[50px] bg-soft">
                {children}
            </main>

            <Footer />
        </>
    );
}

export default MainLayout;