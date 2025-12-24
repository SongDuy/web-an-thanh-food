import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SearchCard from "./SearchCard";

const Search = ({ onClose }) => {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);

        // Đợi animation chạy xong rồi mới đóng
        setTimeout(() => {
            onClose();
        }, 1000); // = duration trong CSS
    };

    return (
        <div
            onClick={handleClose}   // 👈 click nền mờ sẽ tắt
            className={`fixed inset-0 z-50 flex ${isClosing ? "overlay-out" : "overlay-in"}`}
        >
            {/* Sidebar */}
            <div
                onClick={(e) => e.stopPropagation()} // 👈 chặn click lan
                // className="w-[420px] h-full ml-auto bg-white shadow-xl px-5 py-4 flex flex-col"
                className={`
                    w-[420px] h-full ml-auto bg-white shadow-xl px-5 py-4 flex flex-col
                    ${isClosing ? "slide-out" : "slide-in"}
                `}
            >

                {/* Header */}
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-800">
                        Tìm kiếm
                    </h2>
                    <button
                        onClick={handleClose}
                        className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-100 hover:bg-red-500 hover:text-white transition"
                    >
                        <CloseIcon sx={{ fontSize: 22 }} />
                    </button>
                </div>

                {/* Search input */}
                <div className="mt-5">
                    <input
                        className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-black shadow-sm"
                        placeholder="Tìm sản phẩm..."
                    />

                    {/* Tabs */}
                    <div className="mt-[25px] flex gap-3">
                        <button className="flex-1 h-9 text-sm font-medium rounded-lg bg-black text-white transition">
                            Lương Thực
                        </button>
                        <button className="flex-1 h-9 text-sm font-medium rounded-lg bg-gray-100 hover:bg-gray-200 shadow border text-gray-700  transition">
                            Thực Phẩm
                        </button>
                    </div>
                </div>

                {/* Result list */}
                <div className="w-full grid grid-cols-1 gap-2 mt-[25px]">
                    <SearchCard />
                    <SearchCard />
                    <SearchCard />
                    <SearchCard />
                    <SearchCard />
                </div>
            </div>
        </div>
    );
};

export default Search;
