import { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Search from "../../components/Search";

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

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
              <div className="w-full grid grid-cols-[5.5fr_1.5fr_1.3fr_1.2fr_0.5fr] gap-2">
                <div className="w-full flex items-center">
                  <span> Tất cả (1 sản phẩm)</span>
                </div>

                <div className="w-full flex items-center justify-center">
                  <span> Đóng gói </span>
                </div>

                <div className="w-full flex items-center justify-center">
                  <span> Số lượng </span>
                </div>

                <div className="w-full flex items-center justify-center">
                  <span> Giá tiền </span>
                </div>

                <button className="w-full flex items-center justify-center">
                  <DeleteOutlineOutlinedIcon />
                </button>
              </div>
            </div>

            <div className="w-full min-h-[500px] mt-[15px] bg-white rounded-md px-3 py-3">
              <div className="w-full grid grid-cols-1 gap-5 py-3 ">

                {/* Sẳm phẩm */}
                <div className="w-full grid grid-cols-[5.5fr_1.5fr_1.3fr_1.2fr_0.5fr] gap-2 bg-red-50 shadow rounded border-b-2 border-red-100 pl-2.5 py-3">
                  <div className="w-full flex items-center gap-3 border">
                    <div className="w-[90px] h-[90px] bg-gray-300 rounded">

                    </div>
                    <div className="mb-auto">
                      kkk
                    </div>
                  </div>

                  <div className="w-full flex items-center justify-center">
                    3 túi * 1 kg
                  </div>

                  <div className="w-full flex items-center justify-center text-gray-400">
                    <div className="flex border-2 rounded overflow-hidden">
                      <div className="w-6 h-[22px] flex items-center justify-center font-bold border-r">
                        <RemoveOutlinedIcon sx={{ fontSize: 20 }} />
                      </div>
                      <div className="w-8 h-[22px] text-md font-semibold flex items-center justify-center border-l">
                        1
                      </div>
                      <div className="w-6 h-[22px] flex items-center justify-center font-bold border-l">
                        <AddOutlinedIcon sx={{ fontSize: 20 }} />
                      </div>
                    </div>
                  </div>

                  <div className="w-full flex items-center justify-center text-lg font-bold text-red-500">
                    0
                    <span className="text-sm ml-0.5 underline underline-offset-1.5 relative -top-1.5">
                      đ
                    </span>
                  </div>


                  <button className="w-full flex items-center justify-center">
                    <DeleteOutlineOutlinedIcon />
                  </button>
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
