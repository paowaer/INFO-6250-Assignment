import { MESSAGES } from "./constants";

const state = {
  messages: {},
  users: {},
  isLoggedIn: false,
  isLoginPending: true,
  isMessagePending: false,
  username: "",
  lastAddedMessage: "",
  error: "",
};

export function waitOnLogin() {
  state.isLoggedIn = false;
  state.isLoginPending = true;
  state.username = "";
  state.messages = {};
  state.error = "";
}

export function login(username) {
  state.isLoggedIn = true;
  state.isLoginPending = false;
  state.username = username;
  state.error = "";
  state.lastAddedMessage = "";
}

export function logout() {
  state.isLoggedIn = false;
  state.isLoginPending = false;
  state.username = "";
  state.messages = {};
  state.error = "";
}

export function waitOnMessages() {
  state.messages = {};
  state.isMessagePending = true;
  state.error = "";
}

export function setMessages(messages) {
  state.messages = messages;
  state.isMessagePending = false;
  state.error = "";
  state.lastAddedMessage = "";
}

export function updateMessages({ id, message }) {
  state.messages[id] = message;
  state.error = "";
  state.lastAddedMessage = "";
}

export function addMessage(message) {
  state.messages[message.id] = message;
  state.error = "";
  state.lastAddedMessage = message.id;
}

export function setUsers(users) {
  state.users = users;
}

export function setError(error) {
  if (!error) {
    state.error = "";
    return;
  }
  state.isLoginPending = false;
  state.isMessagePending = false;
  state.error = MESSAGES[error] || MESSAGES.default;
}

export default state;
