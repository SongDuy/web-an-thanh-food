import StarIcon from "@mui/icons-material/Star";

const SearchCard = () => {
    return (
        <>
            <div className="flex items-center gap-3 p-2 rounded-lg border shadow hover:bg-gray-100 cursor-pointer transition">
                {/* Thumbnail */}
                <img
                    src="https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png"
                    alt="thumb"
                    className="w-[70px] h-[70px] rounded-lg object-cover flex-shrink-0"
                />

                {/* Info */}
                <div className="flex-1 overflow-hidden">
                    <p className="text-sm font-semibold text-gray-800 line-clamp-1">
                        Sample Title Comic
                    </p>

                    <div className="flex text-xs text-gray-500 mt-0.5">
                        <span className="pr-2 border-r border-gray-300 line-clamp-1">
                            Author Name
                        </span>
                        <span className="pl-2 line-clamp-1">
                            Action, Fantasy
                        </span>
                    </div>

                    <div className="flex items-center gap-1 text-yellow-500 text-xs font-semibold mt-1">
                        <StarIcon fontSize="inherit" />
                        12,345
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchCard;