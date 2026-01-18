import { useState } from "react";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Search from '../../components/Search';
import Notification from '../../components/Notification'

import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {

  const [openSearch, setOpenSearch] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);

  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

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
        <div className="w-[450px] bg-white shadow rounded-lg px-5 py-6">

          {/* Title */}
          <h1 className="text-[25px] font-semibold text-center">
            Quên Mật Khẩu?
          </h1>

          {/* Description */}
          <div className="pt-3 pb-5 text-center text-gray-600">
            <p>Chúng tôi sẽ gửi cho bạn một liên kết để đặt lại mật khẩu.</p>
            <p>Vui lòng nhập địa chỉ email của bạn bên dưới.</p>
          </div>

          {/* Form */}
          <div className="grid gap-y-3">
            <input
              type="email"
              placeholder="Địa chỉ Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-[50px] px-3 border rounded shadow"
            />

            {/* Success message (demo) */}
            {success && (
              <p className="text-green-600 text-sm text-center">
                Email đặt lại mật khẩu đã được gửi. Vui lòng kiểm tra hộp thư của bạn.
              </p>
            )}

            <button
              className="h-[50px] bg-black text-white rounded font-semibold hover:bg-gray-800"
              onClick={() => setSuccess(true)}
            >
              Tiếp tục
            </button>

            {/* Register link */}
            <div className="h-[50px] border rounded flex items-center justify-center gap-x-1">
              <span>
                Chưa có tài khoản?
              </span>

              <Link to="/register" className="text-blue-800 font-semibold">
                Đăng ký
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ForgotPasswordPage;