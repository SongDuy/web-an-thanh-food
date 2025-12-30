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
            Forgot Password?
          </h1>

          {/* Description */}
          <div className="pt-3 pb-5 text-center text-gray-600">
            <p>We will send you a link to reset your password.</p>
            <p>Enter your email address below.</p>
          </div>

          {/* Form */}
          <div className="grid gap-y-3">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-[50px] px-3 border rounded shadow"
            />

            {/* Success message (demo) */}
            {success && (
              <p className="text-green-600 text-sm text-center">
                A password reset email has been sent. Please check your inbox.
              </p>
            )}

            <button
              className="h-[50px] bg-black text-white rounded font-semibold hover:bg-gray-800"
              onClick={() => setSuccess(true)}
            >
              Continue
            </button>

            {/* Register link */}
            <div className="h-[50px] border rounded flex items-center justify-center gap-x-1">
              <span>
                Don't have an account?
              </span>

              <Link to="/register" className="text-blue-800 font-semibold">
                Sign up
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