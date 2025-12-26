import { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Search from "../../components/Search";

const CartPage = () => {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <>
      <Header onOpenSearch={() => setOpenSearch(true)} />

      {openSearch && (
        <Search onClose={() => setOpenSearch(false)} />
      )}

      <div className="w-full bg-soft px-[160px] pt-[100px] pb-[45px]">
        <div className="w-full font-semibold uppercase py-[25px] flex items-center gap-1">
          <h1 className="text-[22px] text-white text-shadow-black bg-gradient-to-tr from-gray-100 via-red-50 to-red-100 shadow border px-5 py-2 rounded-full">
            Giỏ Hàng
          </h1>
        </div>

        <div className="w-full grid grid-cols-6 gap-5">
          <div className="col-span-4">
            <div className="w-full font-medium bg-white rounded-md flex items-center px-3 py-2">
              Tên sản phẩm
            </div>

            <div className="w-full h-[480px] mt-[15px] bg-white rounded-md flex items-center px-3 py-3">
              kkk
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
