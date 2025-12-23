import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const RankingCard = () => {
  const productImg = "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png";

  return (
    <div className="w-full h-[120px] border rounded shadow hover:bg-red-50 p-4">
      <div className="w-full h-full flex gap-3">
        <div className="flex items-center justify-center">

          <div className="w-[50px] h-[50px] bg-red-50 shadow text-white text-shadow-black font-serifBook rounded-full text-[35px] leading-none border flex items-center justify-center">
            8
          </div>

          <div className="min-w-[90px] h-full ml-3">
            <img
              src={productImg}
              alt="Rau cải xanh"
              className="w-full h-full object-cover transition-transform duration-500"
            />
          </div>
        </div>

        <div className="w-full h-full grid grid-cols-[75%_25%]">
          <div className="w-full flex flex-col pr-3">
            <h3 className="w-full text-md font-semibold text-gray-800 line-clamp-1">
              Rau cải xanh Rau cải xanh Rau cải xanh Rau cải xanh Rau cải xanh
            </h3>

            <p className="text-sm font-semibold text-red-300">
              1 gói / 1kg
            </p>

            {/* Buttons sát đáy */}
            <div className="w-full mt-auto grid grid-cols-2">
              <button className="pr-3 border-r text-black flex items-center justify-center gap-1">
                <StarBorderOutlinedIcon fontSize="small" />
                Đánh Giá
              </button>

              <button className="pl-3 border-l text-black flex items-center justify-center gap-1">
                <FavoriteBorderOutlinedIcon fontSize="small" />
                Yêu Thích
              </button>
            </div>
          </div>

          <div className="w-full flex items-center">
            <button className="w-full h-[35px] bg-green-500 hover:bg-green-600 shadow text-white text-md px-1 py-1 rounded transition-colors font-medium">
              Mua ngay
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RankingCard;