import { SERVER, MESSAGES } from "./constants";
import {
  fetchLogin,
  fetchLogout,
  fetchMessages,
  fetchUsers,
  fetchAddMessage,
} from "./services";
import {
  waitOnMessages,
  waitOnLogin,
  setMessages,
  setError,
  login,
  logout,
  addMessage,
} from "./state";
import { renderApp, renderMessages, renderUsers } from "./render";

export function addAbilityToLogin({ state, appEl }) {
  appEl.addEventListener("submit", (e) => {
    if (!e.target.classList.contains("login__form")) return;
    e.preventDefault();

    const username = appEl.querySelector(".login__username").value;
    waitOnLogin();
    renderApp({ state, appEl });
    fetchLogin(username)
      .then((messages) => {
        login(username);
        setMessages(messages);
        renderApp({ state, appEl });
      })
      .catch((err) => {
        setError(err?.error || "ERROR");
        renderApp({ state, appEl });
      });
  });
}

export function addAbilityToLogout({ state, appEl }) {
  appEl.addEventListener("click", (e) => {
    if (!e.target.classList.contains("controls__logout")) return;

    logout();
    renderApp({ state, appEl });
    fetchLogout().catch((err) => {
      const errorMessage = MESSAGES[err.error] || MESSAGES.default;
      setError(errorMessage);
      renderApp({ state, appEl });
    });
  });
}

export function addAbilityToRefresh({ state, appEl }) {
  appEl.addEventListener("click", (e) => {
    if (!e.target.classList.contains("controls__refresh")) return;

    waitOnMessages();
    renderMessages({ state, appEl });

    fetchMessages()
      .then((messages) => {
        setMessages(messages);
        return fetchUsers();
      })
      .then((users) => {
        setUsers(users);
        renderMessages({ state, appEl });
        renderUsers({ state, appEl });
      })
      .catch((err) => {
        const errorMessage = MESSAGES[err.error] || MESSAGES.default;
        setError(errorMessage);
        renderMessages({ state, appEl });
        renderUsers({ state, appEl });
      });
  });
}

export function addAbilityToAddMessage({ state, appEl }) {
  appEl.addEventListener("submit", (e) => {
    if (!e.target.classList.contains("add__form")) return;
    e.preventDefault();

    const messageText = appEl.querySelector(".add__message").value;
    fetchAddMessage(messageText)
      .then((message) => {
        addMessage(message);
        renderMessages({ state, appEl });
        appEl.querySelector(".add__message").value = "";
      })
      .catch((err) => {
        const errorMessage = MESSAGES[err.error] || MESSAGES.default;
        setError(errorMessage);
        renderMessages({ state, appEl });
      });
  });
}
