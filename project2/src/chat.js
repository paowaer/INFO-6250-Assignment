import { CLIENT, MESSAGES } from "./constants";
import state, { setMessages, setUsers, setError, login } from "./state";
import { fetchSession, fetchMessages, fetchUsers } from "./services";
import { renderApp, renderUsers, renderMessages } from "./render";
import {
  addAbilityToLogin,
  addAbilityToLogout,
  addAbilityToRefresh,
  addAbilityToAddMessage,
} from "./listeners";

const appEl = document.querySelector("#app");

function initializeApp() {
  checkForSession();
  setupEventListeners();
  pollForUpdates();
}

function checkForSession() {
  fetchSession()
    .then((session) => {
      login(session.username);
      renderApp({ state, appEl });
      return fetchMessages();
    })
    .then((messages) => {
      setMessages(messages);
      renderMessages({ state, appEl });
    })
    .then((users) => {
      setUsers(users);
      renderUsers({ state, appEl });
    })
    .catch((err) => {
      const errorMessage = MESSAGES[err.error] || MESSAGES.default;
      setError(errorMessage);
      renderApp({ state, appEl });
    });
}

function setupEventListeners() {
  addAbilityToLogin({ state, appEl });
  addAbilityToLogout({ state, appEl });
  addAbilityToAddMessage({ state, appEl });
  addAbilityToRefresh({ state, appEl });
}

function pollForUpdates() {
  setInterval(() => {
    fetchMessages()
      .then((messages) => {
        setMessages(messages);
        renderMessages({ state, appEl });
      })
      .catch(() => {
        const errorMessage = MESSAGES[CLIENT.NETWORK_ERROR] || MESSAGES.default;
        setError(errorMessage);
        renderMessages({ state, appEl });
      });

    fetchUsers()
      .then((users) => {
        setUsers(users);
        renderUsers({ state, appEl });
      })
      .catch(() => {
        setError(MESSAGES[CLIENT.NETWORK_ERROR] || MESSAGES.default);
        renderUsers({ state, appEl });
      });
  }, 5000);
}

initializeApp();
