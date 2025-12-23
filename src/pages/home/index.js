import MainLayout from '../../layouts/MainLayout';
import ProductCard from '../../components/ProductCard';
import RankingCard from '../../components/RankingCard';

const HomePage = () => {
    return (
        <MainLayout>
            <div>
                <div className="w-full h-full mt-[35px]">
                    <h1 className="text-[22px] font-bold uppercase"> Danh mục lương thực </h1>

                    <div className="w-full min-h-[650px] grid grid-cols-5 gap-3 mt-[38px]">
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
                    <h1 className="text-[22px] font-bold uppercase">Danh mục thực phẩm </h1>

                    <div className="w-full min-h-[650px] grid grid-cols-5 gap-3 mt-[38px] ">
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
                    <h1 className="text-[22px] font-bold uppercase">Bảng Xếp Hạng </h1>

                    <div className="w-full min-h-[650px] grid grid-cols-2 gap-3 mt-[38px] ">
                        <div className="w-full grid grid-cols-1 gap-3">
                            <RankingCard />
                            <RankingCard />
                            <RankingCard />
                            <RankingCard />
                            <RankingCard />
                        </div>

                         <div className="w-full grid grid-cols-1 gap-3">
                            <RankingCard />
                            <RankingCard />
                            <RankingCard />
                            <RankingCard />
                            <RankingCard />
                        </div>
                    </div>
                </div>
            </div>

        </MainLayout>
    );
}

export default HomePage;
