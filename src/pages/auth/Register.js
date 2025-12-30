import { useState } from "react";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Search from '../../components/Search';
import Notification from '../../components/Notification'

import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  // const language = false; // false = EN | true = KR (demo)

  return (
    <>
      <Header
        onOpenSearch={() => {
          setOpenNotification(false)
          setOpenSearch(true)
        }}
        onOpenNotify={() => {
          setOpenSearch(false)
          setOpenNotification(true)
        }}
      />

      {openSearch && (
        <Search onClose={() => setOpenSearch(false)} />
      )}

      {openNotification && (
        <Notification onClose={() => setOpenNotification(false)} />
      )}

      <div className="w-full h-[650px] flex items-center justify-center mt-[100px] py-[45px] bg-soft">
        <div className="w-[400px] bg-white shadow rounded-lg px-5 pt-5 pb-8 my-10">

          {/* Title */}
          <h1 className="text-[25px] font-semibold text-center">
            Đăng Ký
          </h1>

          {/* Subtitle */}
          <p className="pt-3 pb-5 text-center text-gray-600">
            Chào mừng bạn! Hãy tạo tài khoản mới.
          </p>

          {/* Form */}
          <div className="grid gap-y-3">

            {/* Name + Birthday */}
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Họ và tên"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="h-[50px] px-2 border rounded shadow"
              />

              <input
                type="date"
                className="w-full h-[50px] px-2 border rounded shadow"
                value={selectedDate || ""}
                onChange={(e) => setSelectedDate(e.target.value)}
              />

            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Địa chỉ email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-[50px] px-2 border rounded shadow"
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-[50px] px-2 border rounded shadow"
            />

            {/* Forgot password */}
            <Link
              to="/forgot-password"
              className="text-blue-800 text-sm w-fit"
            >
              Quên mật khẩu?
            </Link>

            {/* Submit button */}
            <button className="h-[50px] bg-black text-white rounded font-semibold hover:bg-gray-800">
              Tiếp tục xác thực Email
            </button>

            {/* Login redirect */}
            <div className="h-[50px] border rounded flex items-center justify-center gap-x-1">
              <span>
                Đã có tài khoản?
              </span>

              <Link to="/login" className="text-blue-800 font-semibold">
                Đăng nhập
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RegisterPage;