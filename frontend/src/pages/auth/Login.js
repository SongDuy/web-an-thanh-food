import { useState } from "react";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Search from '../../components/Search';
import Notification from '../../components/Notification'

import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";

const LoginPage = () => {

  const [openSearch, setOpenSearch] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const language = false; // false = EN, true = KR (demo)

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

        <div className="w-[400px] bg-white rounded-lg shadow border px-5 pt-5 pb-8">

          {/* Title */}
          <h1 className="text-[25px] font-semibold text-center mt-2">
            Đăng Nhập
          </h1>

          {/* Subtitle */}
          <p className="text-center py-3 text-gray-600">
            Chào mừng bạn quay lại! Hãy đăng nhập để tiếp tục.
          </p>

          {/* Form */}
          <div className="grid gap-y-3">
            <input
              type="email"
              placeholder="Địa chỉ Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-[50px] px-3 border rounded shadow"
            />

            <input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-[50px] px-3 border rounded shadow"
            />

            <Link
              to="/forgot-password"
              className="text-blue-700 text-sm w-fit"
            >
              Quên mật khẩu?
            </Link>

            <button className="h-[50px] bg-black text-white rounded font-semibold hover:bg-gray-800">
              Tiếp tục
            </button>

            {/* Register */}
            <div className="h-[50px] border rounded flex items-center justify-center gap-x-1">
              <span>
                Chưa có tài khoản?
              </span>

              <Link to="/register" className="text-blue-700 font-semibold">
                Đăng ký
              </Link>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center my-5">
            <hr className="flex-1 border-gray-300" />
            <span className="px-4 text-sm">
              HOẶC
            </span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Google login */}
          <button className="h-[50px] w-full bg-red-50 hover:bg-red-100 shadow-md rounded flex items-center px-5">
            <GoogleIcon />
            <span className="mx-auto font-semibold">
              Tiếp tục với Google
            </span>
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LoginPage;
