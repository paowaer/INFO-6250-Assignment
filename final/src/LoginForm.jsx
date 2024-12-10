import { useState } from "react";
import "./LoginForm.css";

function LoginForm({ onLogin, onNavigate }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username);
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          className="input-field"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />
        <button type="submit">Login</button>
      </form>
      <p className="login-prompt">
        Don't have an account?{" "}
        <button
          className="btn-register-link"
          onClick={() => onNavigate("register")}
        >
          Register
        </button>
      </p>
    </div>
  );
}

export default LoginForm;
