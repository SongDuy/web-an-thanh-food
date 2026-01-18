import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const Notification = ({ onClose }) => {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        if (isClosing) return;
        setIsClosing(true);
        // Giảm xuống 500ms để khớp với CSS mới, tạo cảm giác mượt và nhanh hơn
        setTimeout(() => {
            onClose();
        }, 1000);
    };

    return (
        <div
            onClick={handleClose}
            className={`fixed inset-0 z-50 flex ${isClosing ? "overlay-out pointer-events-none" : "overlay-in"}`}
        >
            {/* Sidebar */}
            <div
                onClick={(e) => e.stopPropagation()}
                className={`sidebar w-[420px] h-full ml-auto bg-white shadow-xl px-5 py-4 flex flex-col ${isClosing ? "slide-out" : "slide-in"}`}
            >
                {/* Header */}
                <div className="flex items-center justify-between border-b pb-2">
                    <h2 className="text-lg font-semibold">Thông báo</h2>
                    <button
                        onClick={handleClose}
                        className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-200 hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out"
                    >
                        <CloseIcon sx={{ fontSize: 25 }} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto mt-3 space-y-3">
                    {/* Item */}
                    <div className="p-3 rounded-lg border hover:bg-gray-50 cursor-pointer">
                        <p className="text-sm font-semibold">
                            🎉 Đơn hàng #12345 đã được xác nhận
                        </p>
                        <span className="text-xs text-gray-400">2 phút trước</span>
                    </div>

                    <div className="p-3 rounded-lg border hover:bg-gray-50 cursor-pointer">
                        <p className="text-sm font-semibold">
                            🚚 Đơn hàng đang được giao
                        </p>
                        <span className="text-xs text-gray-400">1 giờ trước</span>
                    </div>

                    <div className="p-3 rounded-lg border hover:bg-gray-50 cursor-pointer">
                        <p className="text-sm font-semibold">
                            🔔 Sản phẩm bạn quan tâm đang giảm giá
                        </p>
                        <span className="text-xs text-gray-400">Hôm qua</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notification;