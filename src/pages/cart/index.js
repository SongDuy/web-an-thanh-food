import { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Search from "../../components/Search";
import Notification from "../../components/Notification";

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import HomeIcon from '@mui/icons-material/Home';

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

        <div className="w-full grid grid-cols-10 gap-5">
          <div className="col-span-7">
            <div className="w-full bg-white rounded-md pr-3 py-2 border">

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
                  <DeleteForeverIcon />
                </div>
              </div>
            </div>

            <div className="w-full min-h-[500px] mt-[15px] bg-white rounded-md px-3 py-3 border">
              <div className="w-full grid grid-cols-1 gap-3 py-2 ">

                {/* Sẳm phẩm */}
                <div className="w-full grid grid-cols-[5.3fr_1.55fr_1.35fr_1.25fr_0.55fr] gap-2 bg-red-50 shadow rounded border border-b-2 border-red-100 pl-2.5 py-3">
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

                  <div className="w-full flex items-center justify-center text-lg font-medium text-black">
                    0
                    <span className="text-sm ml-0.5 underline underline-offset-2 relative -top-1.5">
                      đ
                    </span>
                  </div>

                  <div className="w-full flex items-center justify-center">
                    <button className="text-gray-500 hover:text-red-500">
                      <DeleteForeverIcon />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="col-span-3 w-full h-[555px]">

            <div className="w-full h-full grid grid-rows-[35%_1fr] gap-3">
              {/* Địa chỉ */}
              <div className="w-full h-full flex flex-col gap-2 bg-white rounded-md px-4 pt-3 pb-4 border">
                <div className="w-full flex items-center">
                  <h1 className="text-lg text-gray-500">
                    Giao tới
                  </h1>
                  <button className="ml-auto text-sm font-medium text-blue-500 hover:text-blue-600">
                    Thay đổi
                  </button>
                </div>

                <div className="w-full flex flex-col items-center gap-3">
                  <div className="w-full">
                    <span className="text-[15px] text-black font-medium pr-2 border-r border-gray-300">
                      Lê Hoàng Song Duy
                    </span>
                    <span className="text-[15px] text-black font-medium pl-2 border-l border-gray-300">
                      0437789776
                    </span>
                  </div>

                  <div className="w-full inline-flex items-center gap-3 text-gray-500">
                    <span className="w-[35px] h-[35px] text-green-500 px-2 bg-green-100 rounded-md shadow flex items-center justify-center shrink-0">
                      <HomeIcon />
                    </span>

                    Số nhà 108, ấp Nhơn Hưng A, xã Nhơn Nghĩa, huyện Phong Điền, TP. Cần Thơ
                  </div>

                </div>
              </div>

              {/* Thanh toán */}
              <div className="w-full h-full flex flex-col gap-3 bg-white rounded-md px-4 pt-3 pb-4 border">
                <div className="w-full flex items-center">
                  <h1 className="text-md text-gray-500">
                    Tổng tiền hàng
                  </h1>
                  <div className="ml-auto text-lg flex items-center justify-center font-medium text-black">
                    0
                    <span className="ml-0.5 text-sm underline underline-offset-2 relative -top-1.5">
                      đ
                    </span>
                  </div>
                </div>

                <div className="w-full flex items-center">
                  <h1 className="text-md text-gray-500">
                    Phí vận chuyển
                  </h1>
                  <button className="ml-auto text-md font-medium text-green-600">
                    Miễn phí
                  </button>
                </div>

                <div className="w-full flex items-center border-t-2 pt-2">
                  <h1 className="text-md text-black">
                    Tổng tiền thanh toán
                  </h1>
                  <div className="ml-auto text-2xl flex items-center justify-center font-bold text-white text-shadow-black">
                    0
                    <span className="ml-0.5 text-sm underline underline-offset-2 relative -top-1.5">
                      đ
                    </span>
                  </div>
                </div>

                <div className="w-full mt-3 flex flex-col items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 p-4 shadow">
                  <span className="text-sm text-gray-500 font-medium">
                    Thời gian xác nhận mua hàng
                  </span>

                  <span className="text-2xl font-bold text-green-600">
                    5 phút
                  </span>
                </div>

                <button className="w-full h-[50px] mt-auto text-md text-white font-medium shadow rounded bg-gradient-to-t from-green-400 via-green-500 to-green-600 hover:brightness-110 active:brightness-95 transition border-b-2 border-green-500">
                  Mua hàng
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default CartPage;
