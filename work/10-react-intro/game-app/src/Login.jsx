import { useState } from "react";
import "./Login.css";

function isValid(username) {
  let isValid = true;
  isValid = !!username && username.trim();
  isValid = isValid && username.match(/^[A-Za-z0-9_]+$/);
  return isValid;
}

function isPermitted(username) {
  return username !== "dog";
}

function Login({ onLogin }) {
  const [loginName, setLoginName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="login">
      <form
        className="login__form"
        onSubmit={(e) => {
          e.preventDefault();
          if (!isValid(loginName)) {
            setMessage(`${loginName} is not made up of valid characters.`);
          } else if (!isPermitted(loginName)) {
            setMessage(`${loginName} is not a valid user.`);
          } else {
            setMessage("");
            onLogin(loginName);
          }
        }}
      >
        <label className="login__label">
          <span>Username: </span>
          <input
            className="login__input"
            value={loginName}
            onInput={(e) => setLoginName(e.target.value)}
          />
        </label>
        <button className="login__button" type="submit">
          Login
        </button>
      </form>
      <div>{message && <p className="login__message">{message}</p>}</div>
    </div>
  );
}

export default Login;
