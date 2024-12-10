import { useState } from "react";
import "./Register.css";

function Register({ onRegister }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(username);
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          className="input-field"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Choose a username"
          required
        />
        <button className="btn-submit" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
