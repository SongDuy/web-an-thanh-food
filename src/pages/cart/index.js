import { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Search from "../../components/Search";

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const CartPage = () => {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <>
      <Header onOpenSearch={() => setOpenSearch(true)} />

      {openSearch && (
        <Search onClose={() => setOpenSearch(false)} />
      )}

      <div className="w-full bg-soft px-[160px] pt-[100px] pb-[45px]">
        <div className="w-full py-[25px] flex items-center gap-1">
          <h1 className="text-[22px] text-black font-semibold uppercase">
            Giỏ Hàng
          </h1>
        </div>

        <div className="w-full grid grid-cols-6 gap-5">
          <div className="col-span-4">
            <div className="w-full bg-white rounded-md px-3 py-2">
              <div className="w-full grid grid-cols-[5fr_1.5fr_1.5fr_1.5fr_0.5fr] gap-3">
                <div className="w-full flex items-center">
                  Tên sản phẩm
                </div>
                <div className="w-full flex items-center justify-center">
                  Đóng gói
                </div>
                <div className="w-full flex items-center justify-center">
                  Số lượng
                </div>
                <div className="w-full flex items-center justify-center">
                  Giá tiền
                </div>
                <div className="w-full flex items-center justify-center">
                  <DeleteOutlineOutlinedIcon />
                </div>
              </div>
            </div>

            <div className="w-full h-[500px] mt-[15px] bg-white rounded-md px-3 py-3">
              <div className="w-full grid grid-cols-[5fr_1.5fr_1.5fr_1.5fr_0.5fr] gap-3">
                <div className="w-full flex items-center">
                  Tên sản phẩm
                </div>
                <div className="w-full flex items-center justify-center">
                  3 túi * 1 kg
                </div>
                <div className="w-full flex items-center justify-center">
                  Số lượng
                </div>
                <div className="w-full flex items-center justify-center">
                  0đ
                </div>
                <div className="w-full flex items-center justify-center">
                  <DeleteOutlineOutlinedIcon />
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 bg-white rounded-md px-3 py-3">

          </div>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default CartPage;
