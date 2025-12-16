import MainLayout from '../../layouts/MainLayout';
import ProductCard from '../../components/ProductCard';

const HomePage = () => {
    return (
        <MainLayout>
            <h1 className="text-2xl font-bold mb-6">Sản phẩm nổi bật</h1>

            <div className="grid grid-cols-4 gap-6">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </MainLayout>
    );
}

export default HomePage;
