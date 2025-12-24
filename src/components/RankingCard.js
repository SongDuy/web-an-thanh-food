import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Link } from "react-router-dom";

const toSlug = (str) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9 ]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const RankingCard = ({ product, index }) => {
  if (!product) return null; // QUAN TRỌNG

  return (
    <>
      <Link to={`/${toSlug(product.category)}/${toSlug(product.name)}?id=${product.id}`}>

        <div className="w-full h-[145px] rounded shadow bg-white border hover:bg-red-50 p-4">
          <div className="w-full h-full flex gap-3">
            <div className="flex items-center justify-center gap-3">

              <div className="min-w-[50px] h-[50px] bg-red-50 shadow border border-gray-200 text-black text-shadow-white font-serifBook rounded-full text-[35px] leading-none flex items-center justify-center">
                {index + 1}
              </div>

              <div className="relative w-[100px] h-[100px] overflow-hidden rounded flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain rounded transition-transform duration-500"
                />

                <div className="absolute top-0 right-0 bg-yellow-500 text-white font-bold text-shadow-black px-1.5 rounded-bl-md z-10">
                  <span className="text-md">
                    {product.price}
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
                    {product.name}
                  </h3>

                  <span className="text-sm font-bold text-red-300">
                    {product.category}:
                  </span>
                  <span className="text-sm font-semibold text-red-300 ml-2">
                    {product.unit} / {product.weight}
                  </span>
                </div>

                {/* Buttons sát đáy */}
                <div className="w-full mt-auto grid grid-cols-2 gap-3">
                  <div className="w-full border shadow rounded text-black flex items-center justify-center gap-0.5 py-0.5">
                    <StarOutlinedIcon fontSize="small" sx={{ color: "#FFD700" }} />
                    {product.rating}
                  </div>

                  <div className="w-full border shadow rounded text-black flex items-center justify-center gap-0.5 py-0.5">
                    <FavoriteOutlinedIcon fontSize="small" sx={{ color: "#ef4444" }} />
                    {product.likes}
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
      </Link >
    </>
  );
};

export default RankingCard;