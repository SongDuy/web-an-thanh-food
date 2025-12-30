import { useState } from "react";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Search from '../../components/Search';
import Notification from '../../components/Notification'

import { Link } from "react-router-dom";

const ResetPasswordPage = () => {

    const [openSearch, setOpenSearch] = useState(false);
    const [openNotification, setOpenNotification] = useState(false);

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [success, setSuccess] = useState(false);

    //   const language = false; // false = EN | true = KR (demo)

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
                        Reset Password
                    </h1>

                    {/* Description */}
                    <div className="pt-3 pb-5 text-center text-gray-600">
                        <p>Please enter your new password below.</p>
                        <p>Make sure it is strong and secure.</p>
                    </div>

                    {/* Form */}
                    <div className="grid gap-y-3">
                        <input
                            type="password"
                            placeholder="New password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="h-[50px] px-3 border rounded shadow"
                        />

                        <input
                            type="password"
                            placeholder="Confirm new password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="h-[50px] px-3 border rounded shadow"
                        />

                        {/* Success message (demo) */}
                        {success && (
                            <p className="text-green-600 text-sm text-center">
                                Your password has been successfully reset.
                            </p>
                        )}

                        <button
                            className="h-[50px] bg-black text-white rounded font-semibold hover:bg-gray-800"
                            onClick={() => setSuccess(true)}
                        >
                            Reset Password
                        </button>

                        {/* Back to login */}
                        <div className="h-[50px] border rounded flex items-center justify-center gap-x-1">
                            <span>
                                Back to
                            </span>

                            <Link to="/" className="text-blue-800 font-semibold">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ResetPasswordPage;