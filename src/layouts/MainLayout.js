import { useState } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import BannerSlider from '../components/BannerSlider';
import Search from '../components/Search';

const MainLayout = ({ children }) => {
    const [openSearch, setOpenSearch] = useState(false);

    return (
        <>
            <Header onOpenSearch={() => setOpenSearch(true)} />

            {openSearch && (
                <Search onClose={() => setOpenSearch(false)} />
            )}

            <BannerSlider />

            <main className="px-[160px] pb-[45px] bg-soft">
                {children}
            </main>

            <Footer />
        </>
    );
}

export default MainLayout;