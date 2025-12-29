import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterForm({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({ email }));
    onSuccess ? onSuccess() : navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Đăng ký</h2>

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

      <button type="submit">Đăng ký</button>
    </form>
  );
}
