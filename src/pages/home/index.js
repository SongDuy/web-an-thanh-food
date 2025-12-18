import MainLayout from '../../layouts/MainLayout';
import ProductCard from '../../components/ProductCard';
import FastfoodIcon from '@mui/icons-material/Fastfood';
const HomePage = () => {
    return (
        <MainLayout>
            <div>
                <div className="w-full h-full mt-[35px]">
                    <h1 className="text-2xl font-bold"> Danh mục lương thực </h1>

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
                    <h1 className="text-2xl font-bold">Danh mục thực phẩm </h1>

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
