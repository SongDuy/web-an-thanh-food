import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';

const ProductDetailPage = () => {

    return (
        <>
            <Header />
            <div className="w-full h-full bg-gray-100 px-[160px] border pb-[45px]">
                {/* Hình ảnh sản phẩm và đặt hàng */}
                <div className="w-full h-[35px] flex items-center">
                    <Link to="/">
                        <span className="text-blue-800 text-sm">
                            Trang chủ
                        </span>
                    </Link>

                    <NavigateNextIcon className="relative top-[2px]" fontSize="small" />

                    <Link to="/Lương-Thực">
                        <span className="text-blue-800 text-sm">
                            Lương thực
                        </span>
                    </Link>

                    <NavigateNextIcon className="relative top-[2px]" fontSize="small" />

                    <span className="text-black text-sm">
                        Chi tiết
                    </span>

                </div>

                <div className="w-full h-[600px] px-[25px] py-[25px] border rounded-lg bg-white grid grid-cols-5 gap-5">
                    {/* 1/3 */}
                    <div className="col-span-2 bg-white">
                        <div className="w-full h-full grid grid-cols-1 gap-3">
                            <div className="w-full h-[450px] bg-black rounded-sm">
                                kk
                            </div>
                            <div className="w-full h-full grid grid-cols-5 gap-3">
                                <div className="w-full h-[85px] bg-gray-200 rounded-sm">

                                </div>
                                 <div className="w-full h-[85px] bg-gray-200 rounded-sm">

                                </div>
                                 <div className="w-full h-[85px] bg-gray-200 rounded-sm">

                                </div>
                                 <div className="w-full h-[85px] bg-gray-200 rounded-sm">

                                </div>
                                 <div className="w-full h-[85px] bg-gray-200 rounded-sm">

                                </div>
                            </div>

                        </div>

                    </div>

                    {/* 2/3 */}
                    <div className="col-span-3 bg-gray-200">
                        Nội dung 3/5
                    </div>
                </div>


                {/* Thông tin mô tả của sản phẩm */}
                <div className=" w-full h-[550px] mt-[15px] px-[25px] py-[25px] border rounded-lg bg-white">
                    kkkk
                </div>

                {/* Phần bình luận phản hồi */}
                <div className=" w-full h-[550px] mt-[15px] px-[25px] py-[25px] border rounded-lg bg-white">
                    kkkk
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ProductDetailPage;