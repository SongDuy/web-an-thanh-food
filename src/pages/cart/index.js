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
        <div className="flex items-center py-[35px]">
          <h1 className="text-[22px] font-semibold uppercase"> Giỏ Hàng </h1>
        </div>

        <div className="w-full grid grid-cols-6 gap-5">
          <div className="col-span-4">
            <div className="w-full h-[40px] bg-white rounded flex items-center px-5">
              kkk
            </div>

            <div className="w-full h-[480px] mt-[15px] bg-white rounded flex items-center px-5">
              kkk
            </div>
          </div>

          <div className="col-span-2 bg-white rounded px-5">

          </div>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default CartPage;
