import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";

const Search = () => {
    return (
        <div className="fixed inset-0 z-50 flex bg-black/50 backdrop-blur-sm">
            {/* Sidebar */}
            <div className="w-[420px] h-full ml-auto bg-white shadow-xl px-5 py-4 flex flex-col">

                {/* Header */}
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-800">
                        Tìm kiếm
                    </h2>
                    <button className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-100 hover:bg-red-500 hover:text-white transition">
                        <CloseIcon sx={{ fontSize: 22 }} />
                    </button>
                </div>

                {/* Search input */}
                <div className="mt-5">
                    <input
                        className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="Tìm sản phẩm..."
                    />

                    {/* Tabs */}
                    <div className="mt-[25px] flex gap-3">
                        <button className="flex-1 h-9 text-sm font-medium rounded-lg bg-black text-white transition">
                            Lương Thực
                        </button>
                        <button className="flex-1 h-9 text-sm font-medium rounded-lg bg-gray-100 shadow border text-gray-700 hover:bg-gray-200 transition">
                            Thực Phẩm
                        </button>
                    </div>
                </div>

                {/* Result list */}
                <div className="flex-1 mt-[25px] overflow-y-auto custom-scrollbar">
                    <ul className="space-y-1">

                        {[1, 2, 3, 4].map((item) => (
                            <li
                                key={item}
                                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition"
                            >
                                {/* Thumbnail */}
                                <img
                                    src="https://via.placeholder.com/80"
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
                            </li>
                        ))}

                        {/* Empty state */}
                        {/* 
                        <div className="flex items-center justify-center h-full">
                            <span className="text-sm text-gray-500">
                                No related results found.
                            </span>
                        </div>
                        */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Search;
