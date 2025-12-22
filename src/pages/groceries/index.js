import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const GroceriesPage = () => {
    return (
        <>
            <Header />
            <div className="px-[160px] pb-[45px]">
                <div className="w-full h-[60px] border-b border-gray-300 flex items-center">
                    <div>
                        <span className="text-black font-bold mr-1">30</span>
                        <span className="text-gray-500">sản phẩm</span>
                    </div>
                    <div className="ml-auto">
                        <button className="pr-3 border-r">
                            <LocalMallOutlinedIcon fontSize="small" /> Phổ Biến
                        </button>
                        <button className="px-3 border-r">
                            <StarBorderOutlinedIcon fontSize="small" /> Đánh Giá
                        </button>
                        <button className="pl-3 border-l">
                            <FavoriteBorderOutlinedIcon fontSize="small" /> Yêu Thích
                        </button>
                    </div>
                </div>
                <div className="w-full min-h-[650px] grid grid-cols-5 gap-3 mt-[25px]">
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

export default GroceriesPage;