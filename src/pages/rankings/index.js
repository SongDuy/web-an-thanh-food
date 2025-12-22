import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';

const RankingsPage = () => {
    return (
        <>
            <Header />
            <div className="px-[160px] py-[45px]">
                <div className="w-full min-h-[650px] grid grid-cols-5 gap-3 mt-[35px]">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default RankingsPage;