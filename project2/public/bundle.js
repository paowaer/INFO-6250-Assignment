/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLIENT: () => (/* binding */ CLIENT),
/* harmony export */   MESSAGES: () => (/* binding */ MESSAGES),
/* harmony export */   SERVER: () => (/* binding */ SERVER)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var SERVER = {
  AUTH_MISSING: "auth-missing",
  AUTH_INSUFFICIENT: "auth-insufficient",
  REQUIRED_USERNAME: "required-username",
  REQUIRED_MESSAGE: "required-message",
  MESSAGE_MISSING: "message-missing"
};
var CLIENT = {
  NETWORK_ERROR: "networkError",
  NO_SESSION: "noSession"
};
var MESSAGES = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, CLIENT.NETWORK_ERROR, "Network connection error. Please try again."), SERVER.AUTH_MISSING, "Please log in to continue."), SERVER.AUTH_INSUFFICIENT, "Username is not permitted."), SERVER.REQUIRED_USERNAME, "Please enter a valid username."), SERVER.REQUIRED_MESSAGE, "Please enter a message."), "default", "Something went wrong. Please try again.");

/***/ }),

/***/ "./src/listeners.js":
/*!**************************!*\
  !*** ./src/listeners.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addAbilityToAddMessage: () => (/* binding */ addAbilityToAddMessage),
/* harmony export */   addAbilityToLogin: () => (/* binding */ addAbilityToLogin),
/* harmony export */   addAbilityToLogout: () => (/* binding */ addAbilityToLogout),
/* harmony export */   addAbilityToRefresh: () => (/* binding */ addAbilityToRefresh)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./src/services.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render */ "./src/render.js");




function addAbilityToLogin(_ref) {
  var state = _ref.state,
    appEl = _ref.appEl;
  appEl.addEventListener("submit", function (e) {
    if (!e.target.classList.contains("login__form")) return;
    e.preventDefault();
    var username = appEl.querySelector(".login__username").value;
    (0,_state__WEBPACK_IMPORTED_MODULE_2__.waitOnLogin)();
    (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderApp)({
      state: state,
      appEl: appEl
    });
    (0,_services__WEBPACK_IMPORTED_MODULE_1__.fetchLogin)(username).then(function (messages) {
      (0,_state__WEBPACK_IMPORTED_MODULE_2__.login)(username);
      (0,_state__WEBPACK_IMPORTED_MODULE_2__.setMessages)(messages);
      (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderApp)({
        state: state,
        appEl: appEl
      });
    })["catch"](function (err) {
      (0,_state__WEBPACK_IMPORTED_MODULE_2__.setError)((err === null || err === void 0 ? void 0 : err.error) || "ERROR");
      (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderApp)({
        state: state,
        appEl: appEl
      });
    });
  });
}
function addAbilityToLogout(_ref2) {
  var state = _ref2.state,
    appEl = _ref2.appEl;
  appEl.addEventListener("click", function (e) {
    if (!e.target.classList.contains("controls__logout")) return;
    (0,_state__WEBPACK_IMPORTED_MODULE_2__.logout)();
    (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderApp)({
      state: state,
      appEl: appEl
    });
    (0,_services__WEBPACK_IMPORTED_MODULE_1__.fetchLogout)()["catch"](function (err) {
      var errorMessage = _constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGES[err.error] || _constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGES["default"];
      (0,_state__WEBPACK_IMPORTED_MODULE_2__.setError)(errorMessage);
      (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderApp)({
        state: state,
        appEl: appEl
      });
    });
  });
}
function addAbilityToRefresh(_ref3) {
  var state = _ref3.state,
    appEl = _ref3.appEl;
  appEl.addEventListener("click", function (e) {
    if (!e.target.classList.contains("controls__refresh")) return;
    (0,_state__WEBPACK_IMPORTED_MODULE_2__.waitOnMessages)();
    (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderMessages)({
      state: state,
      appEl: appEl
    });
    (0,_services__WEBPACK_IMPORTED_MODULE_1__.fetchMessages)().then(function (messages) {
      (0,_state__WEBPACK_IMPORTED_MODULE_2__.setMessages)(messages);
      return (0,_services__WEBPACK_IMPORTED_MODULE_1__.fetchUsers)();
    }).then(function (users) {
      setUsers(users);
      (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderMessages)({
        state: state,
        appEl: appEl
      });
      (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderUsers)({
        state: state,
        appEl: appEl
      });
    })["catch"](function (err) {
      var errorMessage = _constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGES[err.error] || _constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGES["default"];
      (0,_state__WEBPACK_IMPORTED_MODULE_2__.setError)(errorMessage);
      (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderMessages)({
        state: state,
        appEl: appEl
      });
      (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderUsers)({
        state: state,
        appEl: appEl
      });
    });
  });
}
function addAbilityToAddMessage(_ref4) {
  var state = _ref4.state,
    appEl = _ref4.appEl;
  appEl.addEventListener("submit", function (e) {
    if (!e.target.classList.contains("add__form")) return;
    e.preventDefault();
    var messageText = appEl.querySelector(".add__message").value;
    (0,_services__WEBPACK_IMPORTED_MODULE_1__.fetchAddMessage)(messageText).then(function (message) {
      (0,_state__WEBPACK_IMPORTED_MODULE_2__.addMessage)(message);
      (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderMessages)({
        state: state,
        appEl: appEl
      });
      appEl.querySelector(".add__message").value = "";
    })["catch"](function (err) {
      var errorMessage = _constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGES[err.error] || _constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGES["default"];
      (0,_state__WEBPACK_IMPORTED_MODULE_2__.setError)(errorMessage);
      (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderMessages)({
        state: state,
        appEl: appEl
      });
    });
  });
}

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderApp: () => (/* binding */ renderApp),
/* harmony export */   renderMessages: () => (/* binding */ renderMessages),
/* harmony export */   renderUsers: () => (/* binding */ renderUsers)
/* harmony export */ });
function renderApp(_ref) {
  var state = _ref.state,
    appEl = _ref.appEl;
  appEl.innerHTML = "\n    <main class=\"chat-container\">\n      \n      <h1>Chatty Cat</h1>\n      \n      ".concat(generateStatusHtml(state), "\n      ").concat(generateLoginHtml(state), "\n      \n      ").concat(state.isLoggedIn ? "\n          <div class=\"controls-row\">\n            <button class=\"controls__logout\">Logout</button>\n            <button class=\"controls__refresh\">Refresh</button>\n          </div>\n          " : "", "\n      ").concat(state.isLoggedIn ? "\n          <div class=\"content-row\">\n            <div class=\"users-column\">\n            <h2>Active Cats</h2><div class=\"users-container\">".concat(generateUserListHtml(state), "</div>\n              </div>\n              <div class=\"messages-column\">\n            <h2>Meows</h2><div class=\"messages-container\">").concat(generateMessagesHtml(state), "</div>\n              </div>\n          </div>") : "", "\n      ").concat(state.isLoggedIn ? generateInputHtml() : "", "\n    </main>\n  ");
}
function renderUsers(_ref2) {
  var state = _ref2.state;
  var usersContainer = document.querySelector(".users-container");
  if (usersContainer) {
    usersContainer.innerHTML = generateUserListHtml(state);
  }
}
function renderMessages(_ref3) {
  var state = _ref3.state;
  var messagesContainer = document.querySelector(".messages-container");
  if (state.isMessagePending) {
    if (messagesContainer) {
      messagesContainer.innerHTML = "\n        <div class=\"message__waiting\">\n          <p>Loading messages...</p> \n        </div>\n      ";
    }
    return;
  }
  if (messagesContainer) {
    messagesContainer.innerHTML = generateMessagesHtml(state);
  }
}
function generateStatusHtml(state) {
  return "<div class=\"status\">".concat(state.error, "</div>");
}
function generateLoginHtml(state) {
  if (state.isLoginPending) {
    return "<div class=\"login__waiting\">Loading user...</div>";
  }
  if (state.isLoggedIn) {
    return "";
  }
  return "\n    <div class=\"login\">\n      <form class=\"login__form\" action=\"#login\">\n        <label>\n          <span>Username:</span>\n          <input class=\"login__username\" value=\"\">\n        </label>\n        <button class=\"login__button\" type=\"submit\">Login</button>\n        \n      </form>\n    </div>\n  ";
}
function generateUserListHtml(state) {
  return Object.values(state.users).map(function (user) {
    return "\n    <li class=\"user\">\n      <img src=\"".concat(user.imgUrl, "\" alt=\"").concat(user.username, "'s avatar\" class=\"avatar\" />\n      <span class=\"username\">").concat(user.username, "</span>\n    </li>\n  ");
  }).join("");
}
function generateMessagesHtml(state) {
  return "\n    <ul class=\"messages\">\n      ".concat(Object.values(state.messages).map(function (msg) {
    return "\n          <li class=\"message\">\n            <div class=\"sender-info\">\n              <img src=\"".concat(msg.imgUrl, "\" alt=\"").concat(msg.username, "'s avatar\" class=\"avatar\">\n              <span class=\"username\">").concat(msg.username, "</span>\n            </div>\n            <div class=\"message-text\">").concat(msg.text, "</div>\n          </li>\n        ");
  }).join(""), "\n    </ul>\n  ");
}
function generateInputHtml() {
  return "\n    <form class=\"add__form\"> \n      <input type=\"text\" class=\"add__message\" placeholder=\"Type a message\">\n      <button type=\"submit\">Send</button>\n    </form>\n  ";
}


/***/ }),

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchAddMessage: () => (/* binding */ fetchAddMessage),
/* harmony export */   fetchLogin: () => (/* binding */ fetchLogin),
/* harmony export */   fetchLogout: () => (/* binding */ fetchLogout),
/* harmony export */   fetchMessages: () => (/* binding */ fetchMessages),
/* harmony export */   fetchSession: () => (/* binding */ fetchSession),
/* harmony export */   fetchUsers: () => (/* binding */ fetchUsers)
/* harmony export */ });
function fetchAddMessage(text) {
  return fetch("/api/v1/messages", {
    method: "POST",
    headers: new Headers({
      "content-type": "application/json"
    }),
    body: JSON.stringify({
      text: text
    })
  })["catch"](function () {
    return Promise.reject({
      error: "networkError"
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    return response.json()["catch"](function (error) {
      return Promise.reject({
        error: error
      });
    }).then(function (err) {
      return Promise.reject(err);
    });
  });
}
function fetchMessages() {
  return fetch("/api/v1/messages")["catch"](function () {
    return Promise.reject({
      error: "networkError"
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    return response.json()["catch"](function (error) {
      return Promise.reject({
        error: error
      });
    }).then(function (err) {
      return Promise.reject(err);
    });
  });
}
function fetchSession() {
  return fetch("/api/v1/session", {
    method: "GET"
  })["catch"](function () {
    return Promise.reject({
      error: "networkError"
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    return response.json()["catch"](function (error) {
      return Promise.reject({
        error: error
      });
    }).then(function (err) {
      return Promise.reject(err);
    });
  });
}
function fetchLogout() {
  return fetch("/api/v1/session", {
    method: "DELETE"
  })["catch"](function () {
    return Promise.reject({
      error: "networkError"
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    return response.json()["catch"](function (error) {
      return Promise.reject({
        error: error
      });
    }).then(function (err) {
      return Promise.reject(err);
    });
  });
}
function fetchLogin(username) {
  return fetch("/api/v1/session", {
    method: "POST",
    headers: new Headers({
      "content-type": "application/json"
    }),
    body: JSON.stringify({
      username: username
    })
  })["catch"](function () {
    return Promise.reject({
      error: "networkError"
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    return response.json()["catch"](function (error) {
      return Promise.reject({
        error: error
      });
    }).then(function (err) {
      return Promise.reject(err);
    });
  });
}
function fetchUsers() {
  return fetch("/api/v1/users")["catch"](function () {
    return Promise.reject({
      error: "networkError"
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    return response.json()["catch"](function (error) {
      return Promise.reject({
        error: error
      });
    }).then(function (err) {
      return Promise.reject(err);
    });
  });
}

/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addMessage: () => (/* binding */ addMessage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   login: () => (/* binding */ login),
/* harmony export */   logout: () => (/* binding */ logout),
/* harmony export */   setError: () => (/* binding */ setError),
/* harmony export */   setMessages: () => (/* binding */ setMessages),
/* harmony export */   setUsers: () => (/* binding */ setUsers),
/* harmony export */   updateMessages: () => (/* binding */ updateMessages),
/* harmony export */   waitOnLogin: () => (/* binding */ waitOnLogin),
/* harmony export */   waitOnMessages: () => (/* binding */ waitOnMessages)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");

var state = {
  messages: {},
  users: {},
  isLoggedIn: false,
  isLoginPending: true,
  isMessagePending: false,
  username: "",
  lastAddedMessage: "",
  error: ""
};
function waitOnLogin() {
  state.isLoggedIn = false;
  state.isLoginPending = true;
  state.username = "";
  state.messages = {};
  state.error = "";
}
function login(username) {
  state.isLoggedIn = true;
  state.isLoginPending = false;
  state.username = username;
  state.error = "";
  state.lastAddedMessage = "";
}
function logout() {
  state.isLoggedIn = false;
  state.isLoginPending = false;
  state.username = "";
  state.messages = {};
  state.error = "";
}
function waitOnMessages() {
  state.messages = {};
  state.isMessagePending = true;
  state.error = "";
}
function setMessages(messages) {
  state.messages = messages;
  state.isMessagePending = false;
  state.error = "";
  state.lastAddedMessage = "";
}
function updateMessages(_ref) {
  var id = _ref.id,
    message = _ref.message;
  state.messages[id] = message;
  state.error = "";
  state.lastAddedMessage = "";
}
function addMessage(message) {
  state.messages[message.id] = message;
  state.error = "";
  state.lastAddedMessage = message.id;
}
function setUsers(users) {
  state.users = users;
}
function setError(error) {
  if (!error) {
    state.error = "";
    return;
  }
  state.isLoginPending = false;
  state.isMessagePending = false;
  state.error = _constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGES[error] || _constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGES["default"];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (state);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/chat.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./src/services.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listeners */ "./src/listeners.js");





var appEl = document.querySelector("#app");
function initializeApp() {
  checkForSession();
  setupEventListeners();
  pollForUpdates();
}
function checkForSession() {
  (0,_services__WEBPACK_IMPORTED_MODULE_2__.fetchSession)().then(function (session) {
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.login)(session.username);
    (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderApp)({
      state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
      appEl: appEl
    });
    return (0,_services__WEBPACK_IMPORTED_MODULE_2__.fetchMessages)();
  }).then(function (messages) {
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.setMessages)(messages);
    (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderMessages)({
      state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
      appEl: appEl
    });
  }).then(function (users) {
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.setUsers)(users);
    (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderUsers)({
      state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
      appEl: appEl
    });
  })["catch"](function (err) {
    var errorMessage = _constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGES[err.error] || _constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGES["default"];
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.setError)(errorMessage);
    (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderApp)({
      state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
      appEl: appEl
    });
  });
}
function setupEventListeners() {
  (0,_listeners__WEBPACK_IMPORTED_MODULE_4__.addAbilityToLogin)({
    state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
    appEl: appEl
  });
  (0,_listeners__WEBPACK_IMPORTED_MODULE_4__.addAbilityToLogout)({
    state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
    appEl: appEl
  });
  (0,_listeners__WEBPACK_IMPORTED_MODULE_4__.addAbilityToAddMessage)({
    state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
    appEl: appEl
  });
  (0,_listeners__WEBPACK_IMPORTED_MODULE_4__.addAbilityToRefresh)({
    state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
    appEl: appEl
  });
}
function pollForUpdates() {
  setInterval(function () {
    (0,_services__WEBPACK_IMPORTED_MODULE_2__.fetchMessages)().then(function (messages) {
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setMessages)(messages);
      (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderMessages)({
        state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
        appEl: appEl
      });
    })["catch"](function () {
      var errorMessage = _constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGES[_constants__WEBPACK_IMPORTED_MODULE_0__.CLIENT.NETWORK_ERROR] || _constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGES["default"];
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setError)(errorMessage);
      (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderMessages)({
        state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
        appEl: appEl
      });
    });
    (0,_services__WEBPACK_IMPORTED_MODULE_2__.fetchUsers)().then(function (users) {
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setUsers)(users);
      (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderUsers)({
        state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
        appEl: appEl
      });
    })["catch"](function () {
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setError)(_constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGES[_constants__WEBPACK_IMPORTED_MODULE_0__.CLIENT.NETWORK_ERROR] || _constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGES["default"]);
      (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderUsers)({
        state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
        appEl: appEl
      });
    });
  }, 5000);
}
initializeApp();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map