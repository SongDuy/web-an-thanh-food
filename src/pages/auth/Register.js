import { useEffect, useState, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const RegisterPage = ({ isModal = false }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  /* ===== Đóng modal ===== */
  const handleClose = useCallback(() => {
    if (isModal) navigate(-1);
    else navigate("/");
  }, [isModal, navigate]);

  /* ===== ESC để đóng (KHÔNG lock scroll) ===== */
  useEffect(() => {
    if (!isModal) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") handleClose();
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isModal, handleClose]);

  /* ===== Submit ===== */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password || !confirmPassword) {
      setError("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    if (password !== confirmPassword) {
      setError("Mật khẩu xác nhận không khớp");
      return;
    }

    try {
      setLoading(true);

      // 👉 CALL API REGISTER
      // await authService.register({ email, password });

      await new Promise((r) => setTimeout(r, 1000));

      const redirectTo =
        location.state?.background?.pathname || "/";
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError("Đăng ký thất bại, vui lòng thử lại");
    } finally {
      setLoading(false);
    }
  };

  /* ===== Wrapper ===== */
  const Wrapper = ({ children }) =>
    isModal ? (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        onClick={handleClose}
      >
        <div
          className="pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    ) : (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        {children}
      </div>
    );

  return (
    <Wrapper>
      <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
        {/* Close */}
        {isModal && (
          <button
            onClick={handleClose}
            className="absolute right-3 top-3 text-gray-400 hover:text-black"
            aria-label="Close register modal"
          >
            ✕
          </button>
        )}

        <h1 className="mb-6 text-center text-2xl font-semibold">
          Đăng ký
        </h1>

        {error && (
          <div className="mb-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border px-3 py-2 focus:border-blue-500 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />

          <input
            type="password"
            placeholder="Mật khẩu"
            className="w-full rounded-lg border px-3 py-2 focus:border-blue-500 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Xác nhận mật khẩu"
            className="w-full rounded-lg border px-3 py-2 focus:border-blue-500 focus:outline-none"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Đang đăng ký..." : "Đăng ký"}
          </button>
        </form>

        <div className="mt-4 text-center text-sm">
          Đã có tài khoản?{" "}
          <Link
            to="/login"
            state={
              isModal
                ? { background: location.state?.background }
                : null
            }
            className="text-blue-600 hover:underline"
          >
            Đăng nhập
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default RegisterPage;
