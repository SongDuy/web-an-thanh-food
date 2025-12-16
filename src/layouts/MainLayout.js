import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />

            <main className="px-10 py-6">
                {children}
            </main>

            <Footer />
        </>
    );
}

export default MainLayout;