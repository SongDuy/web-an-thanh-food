import Header from '../components/Header';
import Footer from '../components/Footer';
import BannerSlider from '../components/BannerSlider';

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />

            <BannerSlider />

            <main className="px-[160px] pb-[45px]">
                {children}
            </main>

            <Footer />
        </>
    );
}

export default MainLayout;