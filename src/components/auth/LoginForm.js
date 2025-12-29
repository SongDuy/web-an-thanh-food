import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function LoginForm({ onSuccess }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const redirect = location.state?.from || "/";

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // GIẢ LẬP LOGIN
            if (email === "test@gmail.com" && password === "123456") {
                localStorage.setItem("user", JSON.stringify({ email }));
                onSuccess ? onSuccess() : navigate(redirect);
            } else {
                throw new Error("Sai email hoặc mật khẩu");
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Đăng nhập</h2>

            <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button type="submit">Đăng nhập</button>

            <p>
                <a href="/auth/forgot-password">Quên mật khẩu?</a>
            </p>
        </form>
    );
}
