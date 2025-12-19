import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ProductDetailPage = () => {

    return (
        <>
            <Header />
            <div className="w-full h-full bg-gray-100 px-[160px] border pb-[45px]">
                {/* Hình ảnh sản phẩm và đặt hàng */}
                <div className="w-full h-[600px] mt-[35px] px-[25px] py-[25px] border rounded-lg bg-white grid grid-cols-5 gap-5">
                    {/* 1/3 */}
                    <div className="col-span-2 bg-gray-100">
                        Nội dung 2/5
                    </div>

                    {/* 2/3 */}
                    <div className="col-span-3 bg-gray-200">
                        Nội dung 3/5
                    </div>
                </div>


                {/* Thông tin mô tả của sản phẩm */}
                <div className=" w-full h-[550px] mt-[35px] px-[25px] py-[25px] border rounded-lg bg-white">
                    kkkk
                </div>

                {/* Phần bình luận phản hồi */}
                <div className=" w-full h-[550px] mt-[35px] px-[25px] py-[25px] border rounded-lg bg-white">
                    kkkk
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ProductDetailPage;