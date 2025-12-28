import { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Search from "../../components/Search";
import Notification from "../../components/Notification";

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const CartPage = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);

  return (
    <>
      <Header
        onOpenSearch={() => {
          setOpenNotification(false)
          setOpenSearch(true)
        }}
        onOpenNotify={() => {
          setOpenSearch(false)
          setOpenNotification(true)
        }}
      />

      {openSearch && (
        <Search onClose={() => setOpenSearch(false)} />
      )}

      {openNotification && (
        <Notification onClose={() => setOpenNotification(false)} />
      )}

      <div className="w-full bg-soft px-[160px] pt-[100px] pb-[45px]">
        <div className="w-full py-[25px] flex items-center gap-1">
          <h1 className="text-[22px] text-black font-semibold uppercase">
            Giỏ Hàng
          </h1>
        </div>

        <div className="w-full grid grid-cols-6 gap-5">
          <div className="col-span-4">
            <div className="w-full bg-white rounded-md pr-3 py-2">

              <div className="w-full grid grid-cols-[5.3fr_1.55fr_1.35fr_1.25fr_0.55fr] gap-2 pl-5">
                <div className="w-full flex items-center">
                  <span> Tất cả (1 sản phẩm)</span>
                </div>

                <div className="w-full flex items-center justify-center text-gray-500">
                  <span> Đóng gói </span>
                </div>

                <div className="w-full flex items-center justify-center text-gray-500">
                  <span> Số lượng </span>
                </div>

                <div className="w-full flex items-center justify-center text-gray-500">
                  <span> Giá tiền </span>
                </div>

                <div className="w-full flex items-center justify-center text-gray-500">
                  <DeleteOutlineIcon />
                </div>
              </div>
            </div>

            <div className="w-full min-h-[500px] mt-[15px] bg-white rounded-md px-3 py-3">
              <div className="w-full grid grid-cols-1 gap-3 py-2 ">

                {/* Sẳm phẩm */}
                <div className="w-full grid grid-cols-[5.3fr_1.55fr_1.35fr_1.25fr_0.55fr] gap-2 bg-red-50 shadow rounded border-b-2 border-red-100 pl-2.5 py-3">
                  <div className="w-full flex items-center gap-3">
                    <div className="w-[90px] h-[90px] bg-gray-300 rounded">
                      <div className="w-[90px] h-[90px] bg-gray-300 rounded overflow-hidden">
                        <img
                          src="https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png"
                          alt="Sữa tươi Vinamilk 1L"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="w-full h-full mb-auto flex items-center">
                      <div className="flex flex-col">
                        <h1 className="w-full h-[50px] text-md font-semibold text-gray-800 line-clamp-2">
                          Sữa Tiệt Trùng - Không Đường
                        </h1>
                        <span className=" w-full text-sm font-semibold text-gray-400">
                          HSD: 12 tháng
                        </span>
                        <div className="w-full">
                          <span className="text-sm font-semibold text-gray-400 pr-2 border-r border-gray-300">
                            Vinamilk
                          </span>
                          <span className="text-sm font-semibold text-gray-400 pl-2 border-l border-gray-300">
                            Việt Nam
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="w-full flex items-center justify-center">
                    3 túi * 1 kg
                  </div>

                  <div className="w-full flex items-center justify-center text-black">
                    <div className="flex border-2 border-gray-300 rounded overflow-hidden">
                      <div className="w-6 h-[22px] flex items-center justify-center font-bold border-r border-gray-300">
                        <RemoveOutlinedIcon sx={{ fontSize: 20 }} />
                      </div>
                      <div className="w-8 h-[22px] text-md font-semibold flex items-center justify-center border-l border-r border-gray-300">
                        1
                      </div>
                      <div className="w-6 h-[22px] flex items-center justify-center font-bold border-l border-gray-300">
                        <AddOutlinedIcon sx={{ fontSize: 20 }} />
                      </div>
                    </div>
                  </div>

                  <div className="w-full flex items-center justify-center text-lg font-bold text-white text-shadow-black">
                    0
                    <span className="text-sm ml-0.5 underline underline-offset-2 relative -top-1.5">
                      đ
                    </span>
                  </div>

                  <div className="w-full flex items-center justify-center">
                    <button className="text-gray-500 hover:text-red-500">
                      <DeleteOutlineIcon />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="w-full h-[555px] col-span-2 bg-white rounded-md px-3 py-3">

          </div>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default CartPage;
