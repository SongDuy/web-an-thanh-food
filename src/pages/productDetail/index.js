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

                <div className="w-full h-[600px] px-[25px] py-[25px] border rounded bg-white grid grid-cols-5 gap-5">
                    {/* 1/3 */}
                    <div className="col-span-2 bg-white">
                        <div className="w-full h-full grid grid-cols-1 gap-3">
                            <div className="w-full h-[450px] bg-gray-200 rounded">
                                kk
                            </div>
                            <div className="w-full h-full grid grid-cols-5 gap-3">
                                <div className="w-full h-[85px] bg-gray-200 rounded">

                                </div>
                                <div className="w-full h-[85px] bg-gray-200 rounded">

                                </div>
                                <div className="w-full h-[85px] bg-gray-200 rounded">

                                </div>
                                <div className="w-full h-[85px] bg-gray-200 rounded">

                                </div>
                                <div className="w-full h-[85px] bg-gray-200 rounded">

                                </div>
                            </div>

                        </div>

                    </div>

                    {/* 2/3 */}
                    <div className="col-span-3 bg-white">
                        <div className="w-full h-[65px]">
                            <h1 className="w-full h-full text-[21px] line-clamp-2">
                                [SỈ] 10KG Gạo Lứt Huyết Rồng Loại 1- Gạo lức trong thực dưỡng _ Gạo lứt cho người ăn kiêng, tiểu đường, xương khớp.
                            </h1>
                        </div>
                        <div className="w-full h-[65px]">
                            <h1 className="w-full h-full text-[21px]">

                            </h1>
                        </div>
                        <div className="w-full h-[65px] bg-red-50 shadow-md rounded">
                            <h1 className="w-full h-full flex items-center justify-center text-white text-shadow-black font-bold">
                                <span className="text-[40px] tracking-tight">0</span>
                                <span className="text-[20px] ml-1 underline underline-offset-2 relative -top-[4px]">
                                    đ
                                </span>
                            </h1>

                        </div>
                        <div className="w-full h-[65px]">
                            <h1 className="w-full h-full text-[21px] flex items-center justify-center">
                                kk
                            </h1>
                        </div>
                         <div className="w-full h-[65px]">
                            <h1 className="w-full h-full text-[21px] flex items-center justify-center">
                                kk
                            </h1>
                        </div>
                         <div className="w-full h-[65px]">
                            <h1 className="w-full h-full text-[21px] flex items-center justify-center">
                                kk
                            </h1>
                        </div>
                         <div className="w-full h-[65px]">
                            <h1 className="w-full h-full text-[21px] flex items-center justify-center">
                                kk
                            </h1>
                        </div>

                    </div>
                </div>



                <div className="w-full h-full mt-[15px] rounded border bg-white">
                    {/* Thông tin mô tả của sản phẩm */}
                    <div className=" w-full h-[310px] px-[25px] py-[25px]">
                        <div className="w-full h-[50px] px-3 bg-red-50 rounded">
                            <h1 className="w-full h-full flex items-center text-[21px] line-clamp-1 uppercase">
                                CHI TIẾT SẢN PHẨM
                            </h1>
                        </div>

                    </div>

                    {/* Phần bình luận phản hồi */}
                    <div className=" w-full h-[575px] px-[25px] py-[25px]">
                        <div className="w-full h-[50px] px-3 bg-red-50 rounded">
                            <h1 className="w-full h-full flex items-center text-[21px] line-clamp-1 uppercase">
                                MÔ TẢ SẢN PHẨM
                            </h1>
                        </div>

                    </div>
                </div>

                <div className="w-full h-[500px] mt-[15px] rounded border bg-white">
                    <div className=" w-full h-[310px] px-[25px] py-[25px]">
                        <div className="w-full h-[50px] px-3 bg-white rounded">
                            <h1 className="w-full h-full flex items-center text-[21px] line-clamp-1 uppercase  border-b-2">
                                ĐÁNH GIÁ SẢN PHẨM
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ProductDetailPage;