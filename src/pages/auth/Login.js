import { useEffect, useState, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const LoginPage = ({ isModal = false }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  /* ===== Đóng modal ===== */
  const handleClose = useCallback(() => {
    if (isModal) navigate(-1);
    else navigate("/");
  }, [isModal, navigate]);

  /* ===== ESC để đóng + lock scroll ===== */
  useEffect(() => {
    if (!isModal) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") handleClose();
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isModal, handleClose]);

  /* ===== Submit ===== */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Vui lòng nhập đầy đủ email và mật khẩu");
      return;
    }

    try {
      setLoading(true);

      // 👉 GỌI API LOGIN Ở ĐÂY
      // await authService.login({ email, password });

      await new Promise((r) => setTimeout(r, 1000));

      // redirect về trang trước hoặc trang chủ
      const redirectTo =
        location.state?.background?.pathname || "/";
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError("Email hoặc mật khẩu không đúng");
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
        <div onClick={(e) => e.stopPropagation()}>
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
            aria-label="Close login modal"
          >
            ✕
          </button>
        )}

        {/* Title */}
        <h1 className="mb-6 text-center text-2xl font-semibold">
          Đăng nhập
        </h1>

        {/* Error */}
        {error && (
          <div className="mb-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Form */}
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

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Đang đăng nhập..." : "Đăng nhập"}
          </button>
        </form>

        {/* Links */}
        <div className="mt-4 flex justify-between text-sm">
          <Link
            to="/forgot-password"
            className="text-blue-600 hover:underline"
          >
            Quên mật khẩu?
          </Link>

          <Link
            to="/register"
            state={
              isModal
                ? { background: location.state?.background }
                : null
            }
            className="text-blue-600 hover:underline"
          >
            Đăng ký
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default LoginPage;
