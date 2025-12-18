import MainLayout from '../../layouts/MainLayout';
import ProductCard from '../../components/ProductCard';

const HomePage = () => {
    return (
        <MainLayout>
            <div>
                <div className="w-full h-full mt-[35px]">
                    <h1 className="text-2xl font-bold">Sản phẩm nổi bật </h1>

                    <div className="grid grid-cols-5 gap-3 mt-[35px] ">
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
                <div className="w-full h-full mt-[35px]">
                    <h1 className="text-2xl font-bold">Sản phẩm nổi bật </h1>

                    <div className="grid grid-cols-5 gap-3 mt-[35px] ">
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
            </div>

        </MainLayout>
    );
}

export default HomePage;
