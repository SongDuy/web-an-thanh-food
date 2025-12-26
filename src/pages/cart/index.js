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
        <h1 className="text-[22px] my-[35px] font-medium uppercase"> Giỏ Hàng </h1>

        <div className="">
          <div className="">

          </div>

          <div>

          </div>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default CartPage;
