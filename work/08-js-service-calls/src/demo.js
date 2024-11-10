"use strict";

import {
  fetchLogin,
  fetchLogout,
  fetchSession,
  fetchCurrentStoredWord,
  fetchUpdateStoredWord,
  errorMessages,
} from "./services.js";

const errorMsg = document.querySelector(".error-message");
const userLoginEl = document.querySelector("#user-login-form");
const userDataContetEl = document.querySelector("#user-data-content");
const usernameInputEl = document.querySelector("#username-input");
const userwordInputEl = document.querySelector("#userword-input");
const loginButtonEl = document.querySelector("#login-button");
const logoutButtonEl = document.querySelector("#logout-button");
const updateButtonEl = document.querySelector("#update-word-button");

addLogin();
logoutUser();
updateWord();
loadPage();

function loadPage() {
  fetchSession()
    .then((data) => {
      errorMsg.innerHTML = "";
      showUserDataPage(data.username);
    })
    .catch((err) => {
      errorMsg.innerHTML = errorMessages[err.error];
    });
}

function addLogin() {
  loginButtonEl.addEventListener("click", () => {
    const username = usernameInputEl.value;
    usernameInputEl.value = "";
    fetchLogin(username)
      .then((user) => {
        errorMsg.innerHTML = "";
        showUserDataPage(user.username);
      })
      .catch((err) => {
        errorMsg.innerHTML = errorMessages[err.error];
      });
  });
}

function logoutUser() {
  logoutButtonEl.addEventListener("click", () => {
    fetchLogout()
      .then(() => {
        errorMsg.innerHTML = "";
        toggleLoginAndOut();
      })
      .catch((err) => {
        errorMsg.innerHTML = errorMessages[err.error];
      });
  });
}

function updateWord() {
  updateButtonEl.addEventListener("click", () => {
    const word = userwordInputEl.value;
    fetchUpdateStoredWord(word)
      .then((data) => {
        errorMsg.innerHTML = "";
        renderContent(data.username, data.storedWord);
        userwordInputEl.value = "";
      })
      .catch((err) => {
        errorMsg.innerHTML = errorMessages[err.error];
      });
  });
}

function toggleLoginAndOut() {
  userLoginEl.classList.toggle("hidden");
  userDataContetEl.classList.toggle("hidden");
}

function showUserDataPage() {
  fetchCurrentStoredWord()
    .then((data) => {
      renderContent(data.username, data.storedWord);
      toggleLoginAndOut();
      errorMsg.innerHTML = "";
    })
    .catch((err) => {
      errorMsg.innerHTML = errorMessages[err.error];
    });
}

function renderContent(username, storedWord) {
  const currentStoredWordEl = document.querySelector(".current-storedword");
  if (storedWord) {
    currentStoredWordEl.innerHTML = `Your stored word is "${storedWord}".`;
  } else {
    currentStoredWordEl.innerHTML = `Welcome, ${username}. No stored word found.`;
  }
}
