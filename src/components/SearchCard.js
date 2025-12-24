import StarIcon from "@mui/icons-material/Star";
import InventoryIcon from "@mui/icons-material/Inventory";

const SearchCard = () => {
    return (
        <div className=" flex items-center gap-3 p-2 rounded-lg border shadow hover:bg-red-50 cursor-pointer transition">
            {/* Thumbnail */}
            <img
                src="https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png"
                alt="Sữa Tươi Tiệt Trùng - Có Đường"
                className="w-[70px] h-[70px] rounded-lg object-cover flex-shrink-0"
            />

            {/* Info */}
            <div className="flex-1 overflow-hidden">
                {/* Name */}
                <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">
                    Sữa Tươi Tiệt Trùng - Có Đường
                </h3>

                {/* Category - Unit */}
                <div className="flex text-xs text-gray-500 mt-0.5">
                    <span className="pr-2 border-r text-red-300 font-bold line-clamp-1">
                        Thực phẩm
                    </span>
                    <span className="pl-2 border-l text-red-300 font-semibold line-clamp-1">
                        1 túi * 1 kg
                    </span>
                </div>

                {/* Rating - Stock */}
                <div className="flex items-center gap-3 text-xs font-semibold mt-1">
                    <div className="flex items-center gap-1 text-yellow-500">
                        <StarIcon fontSize="inherit" />
                        4.5
                    </div>

                    <div className="flex items-center gap-1 text-green-600">
                        <InventoryIcon fontSize="inherit" />
                        Mua ngay
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchCard;
