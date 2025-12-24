import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from "react-router-dom";

const RankingCard = () => {
  const productImg = "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png";

  return (
    <>
      <Link to="/Lương-Thực/Chi-Tiết">
        <div className="w-full h-[145px] rounded shadow bg-white border hover:bg-red-50 p-4">
          <div className="w-full h-full flex gap-3">
            <div className="flex items-center justify-center gap-3">

              <div className="min-w-[50px] h-[50px] bg-red-50 shadow text-white text-shadow-black border border-gray-300 font-serifBook rounded-full text-[35px] leading-none flex items-center justify-center">
                1
              </div>

              <div className="relative w-[100px] h-[100px] overflow-hidden rounded flex-shrink-0">
                <img
                  src={productImg}
                  alt="Rau cải xanh"
                  className="w-full h-full object-contain rounded transition-transform duration-500"
                />

                <div className="absolute top-0 right-0 bg-yellow-500 text-white font-bold text-shadow-black px-1.5 rounded-bl-md z-10">
                  <span className="text-md">
                    0
                  </span>
                  <span className="text-[12px] align-top ml-0.5 underline underline-offset-2">
                    đ
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full h-full">
              <div className="w-full flex flex-col gap-1.5">
                <div className="w-full">
                  <h3 className="w-full h-[50px] text-md font-semibold text-gray-800 line-clamp-2">
                    Rau cải xà lách Rau cải xanh Rau cải xanh Rau cải xanh Rau cải xanh
                  </h3>

                  <span className="text-sm font-bold text-red-300">
                    Lương thực:

                  </span>
                  <span className="text-sm font-semibold text-red-300 ml-2">
                    1 túi / 1kg
                  </span>
                </div>

                {/* Buttons sát đáy */}
                <div className="w-full mt-auto grid grid-cols-2 gap-3">
                  <div className="w-full border shadow rounded text-black flex items-center justify-center gap-1 py-0.5">
                    <StarBorderOutlinedIcon fontSize="small" />
                    4.5
                  </div>

                  <div className="w-full border shadow rounded text-black flex items-center justify-center gap-1 py-0.5">
                    <FavoriteBorderOutlinedIcon fontSize="small" />
                    125
                  </div>
                </div>
              </div>

              {/* <div className="w-full flex items-center">
            <button className="w-full h-[35px] bg-green-500 hover:bg-green-600 shadow text-white text-md px-1 py-1 rounded transition-colors font-medium">
              Mua ngay
            </button>
          </div> */}
            </div>

          </div>
        </div>
      </Link>
    </>
  );
};

export default RankingCard;