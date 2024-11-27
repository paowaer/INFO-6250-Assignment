import { useState } from "react";
import Login from "./Login";
import Game from "./Game";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function onLogin(name) {
    setUsername(name);
    setIsLoggedIn(true);
  }

  function onLogout() {
    setIsLoggedIn(false);
  }

  return (
    <div className="app">
      {isLoggedIn ? (
        <Game username={username} onLogout={onLogout} />
      ) : (
        <Login onLogin={onLogin} />
      )}
    </div>
  );
}

export default App;
