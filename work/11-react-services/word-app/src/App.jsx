import { useEffect, useState } from "react";

import "./App.css";
import { LOGIN_STATUS, CLIENT, SERVER } from "./constants";
import {
  fetchSession,
  fetchLogin,
  fetchLogout,
  fetchWords,
  fetchAddWord,
  fetchDeleteWord,
} from "./services";

import LoginForm from "./LoginForm";
import Words from "./Words";
import Loading from "./Loading";
import Controls from "./Controls";
import Status from "./Status";
import AddWordForm from "./AddWordForm";

function App() {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [loginStatus, setLoginStatus] = useState(LOGIN_STATUS.PENDING);
  const [isWordPending, setIsWordPending] = useState(false);
  const [words, setWords] = useState();

  function onLogin(username) {
    setIsWordPending(true);
    fetchLogin(username)
      .then((fetchedWords) => {
        setError("");
        setWords(fetchedWords);
        setIsWordPending(false);
        setUsername(username);
        setLoginStatus(LOGIN_STATUS.IS_LOGGED_IN);
      })
      .catch((err) => {
        setError(err?.error || "ERROR");
      });
  }

  function onLogout() {
    setError("");
    setUsername("");
    setLoginStatus(LOGIN_STATUS.NOT_LOGGED_IN);
    setWords({});
    fetchLogout().catch((err) => {
      setError(err?.error || "ERROR");
    });
  }

  function onRefresh() {
    setError("");
    setIsWordPending(true);
    fetchWords()
      .then((words) => {
        setWords(words);
        setIsWordPending(false);
      })
      .catch((err) => {
        setError(err?.error || "ERROR");
      });
  }

  function onDeleteWord(id) {
    setError("");
    setIsWordPending(true);
    fetchDeleteWord(id)
      .then(() => {
        return fetchWords();
      })
      .then((words) => {
        setWords(words);
        setIsWordPending(false);
      })
      .catch((err) => {
        setError(err?.error || "ERROR");
      });
  }

  function onAddWord(task) {
    fetchAddWord(task)
      .then((word) => {
        setWords({
          ...words,
          [word.id]: word,
        });
      })
      .catch((err) => {
        setError(err?.error || "ERROR");
      });
  }

  function checkForSession() {
    setLoginStatus(LOGIN_STATUS.PENDING); // Reset login status
    fetchSession()
      .then((session) => {
        setUsername(session.username);
        setLoginStatus(LOGIN_STATUS.IS_LOGGED_IN);
        return fetchWords();
      })
      .catch((err) => {
        if (err?.error === SERVER.AUTH_MISSING) {
          return Promise.reject({ error: CLIENT.NO_SESSION });
        }
        return Promise.reject(err);
      })
      .then((words) => {
        setWords(words);
      })
      .catch((err) => {
        if (err?.error === CLIENT.NO_SESSION) {
          setLoginStatus(LOGIN_STATUS.NOT_LOGGED_IN);
          return;
        }
        setError(err?.error || "ERROR");
      });
  }

  useEffect(() => {
    checkForSession();
  }, []);

  return (
    <div className="app">
      <main className="main">
        {error && <Status error={error} />}
        {loginStatus === LOGIN_STATUS.PENDING && (
          <Loading className="login__waiting">Loading user...</Loading>
        )}
        {loginStatus === LOGIN_STATUS.NOT_LOGGED_IN && (
          <LoginForm onLogin={onLogin} />
        )}
        {loginStatus === LOGIN_STATUS.IS_LOGGED_IN && (
          <div className="content">
            <p>Hello, {username}</p>
            <Controls onLogout={onLogout} onRefresh={onRefresh} />
            <Words
              isWordPending={isWordPending}
              words={words}
              onDeleteWord={onDeleteWord}
            />
            <AddWordForm onAddWord={onAddWord} />
          </div>
        )}
      </main>
    </div>
  );
}
export default App;
