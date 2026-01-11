import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Hàm GetLogin đã được sửa để chạy giả lập
    const GetLogin = () => {
        console.log("Đăng nhập giả lập thành công với:", { email, password });

        // Bạn có thể thêm lưu vào localStorage để AuthadProvider không chặn trang
        localStorage.setItem('isAdmin', 'true');

        // Chuyển hướng ngay lập tức
        navigate('/admin/dashboard');
    };

    return (
        <div className="w-screen h-screen bg-gray-100 flex items-center justify-center fixed inset-0 z-50">
            <div className="w-[400px] h-auto px-5 pt-5 pb-8 bg-white shadow rounded-lg">
                <div>
                    <h1 className="text-[25px] flex justify-center font-semibold">
                        Đăng Nhập Quản Trị
                    </h1>
                    <span className="pt-3 pb-8 flex items-center justify-center text-gray-500 text-sm">
                        Chào mừng bạn quay trở lại! (Đăng nhập giả lập)
                    </span>

                    <div className="grid grid-cols-1 gap-y-5">
                        <div className="w-full h-full">
                            <label className="w-full h-full font-semibold text-sm">
                                Email quản trị
                            </label>
                            <input
                                type="email"
                                className="w-full h-[38px] px-2 mt-3 border rounded shadow focus:outline-yellow-500"
                                placeholder="admin@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="w-full h-full">
                            <label className="w-full h-full font-semibold text-sm">
                                Mật khẩu
                            </label>
                            <input
                                type="password"
                                className="w-full h-[38px] px-2 mt-3 border rounded shadow focus:outline-yellow-500"
                                placeholder="********"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button
                            className="w-full h-[50px] mt-8 bg-black text-white rounded font-semibold hover:bg-gray-800 transition-all"
                            onClick={GetLogin}
                        >
                            Tiếp tục (Bỏ qua đăng nhập)
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminLoginPage;