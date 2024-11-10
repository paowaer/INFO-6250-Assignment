/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   errorMessages: () => (/* binding */ errorMessages),
/* harmony export */   fetchCurrentStoredWord: () => (/* binding */ fetchCurrentStoredWord),
/* harmony export */   fetchLogin: () => (/* binding */ fetchLogin),
/* harmony export */   fetchLogout: () => (/* binding */ fetchLogout),
/* harmony export */   fetchSession: () => (/* binding */ fetchSession),
/* harmony export */   fetchUpdateStoredWord: () => (/* binding */ fetchUpdateStoredWord)
/* harmony export */ });
// This is a sample file that demonstrates
// how you can write an abstraction around
// a fetch() call
// This exported function returns a promise
// that resolves with data
// or rejects with an error object
//
// The caller of this function can decide
// what to do with the data
// or what to do with the error
//
// You can add to this file and use this function
// or write your own files/functions


var errorMessages = {
  "auth-missing": "You must be logged in",
  "required-username": "You must provide a valid username",
  "auth-insufficient": "Dog is not allowed",
  "invalid-word": "This word is invalid",
  "required-word": "Word is required",
  "network-error": "There's a network error occurred. Please try again."
};
function fetchLogin(username) {
  return fetch("/api/session/", {
    method: "POST",
    headers: {
      "content-type": "application/json" // set this header when sending JSON in the body of request
    },
    body: JSON.stringify({
      username: username
    })
  })
  // fetch() rejects on network error
  // So we convert that to a formatted error object
  // so our caller can handle all "errors" in a similar way
  ["catch"](function () {
    return Promise.reject({
      error: "network-error"
    });
  }).then(function (response) {
    if (!response.ok) {
      // response.ok checks the status code from the service
      // This service returns JSON on errors,
      // so we use that as the error object and reject
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
    return response.json(); // happy status code means resolve with data from service
  });
}
function fetchLogout() {
  return fetch("/api/session/", {
    method: "DELETE"
  })["catch"](function () {
    return Promise.reject({
      error: "network-error"
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
    return response.json();
  });
}
function fetchSession() {
  return fetch("/api/session/")["catch"](function () {
    return Promise.reject({
      error: "network-error"
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
    return response.json();
  });
}
function fetchCurrentStoredWord() {
  return fetch("/api/word/")["catch"](function () {
    return Promise.reject({
      error: "network-error"
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
    return response.json();
  });
}
function fetchUpdateStoredWord(word) {
  return fetch("/api/word/", {
    method: "PUT",
    headers: new Headers({
      "content-type": "application/json"
    }),
    body: JSON.stringify({
      word: word
    })
  })["catch"](function () {
    return Promise.reject({
      error: "network-error"
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
    return response.json();
  });
}

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
  !*** ./src/demo.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services.js */ "./src/services.js");



var errorMsg = document.querySelector(".error-message");
var userLoginEl = document.querySelector("#user-login-form");
var userDataContetEl = document.querySelector("#user-data-content");
var usernameInputEl = document.querySelector("#username-input");
var userwordInputEl = document.querySelector("#userword-input");
var loginButtonEl = document.querySelector("#login-button");
var logoutButtonEl = document.querySelector("#logout-button");
var updateButtonEl = document.querySelector("#update-word-button");
addLogin();
logoutUser();
updateWord();
loadPage();
function loadPage() {
  (0,_services_js__WEBPACK_IMPORTED_MODULE_0__.fetchSession)().then(function (data) {
    errorMsg.innerHTML = "";
    showUserDataPage(data.username);
  })["catch"](function (err) {
    errorMsg.innerHTML = _services_js__WEBPACK_IMPORTED_MODULE_0__.errorMessages[err.error];
  });
}
function addLogin() {
  loginButtonEl.addEventListener("click", function () {
    var username = usernameInputEl.value;
    usernameInputEl.value = "";
    (0,_services_js__WEBPACK_IMPORTED_MODULE_0__.fetchLogin)(username).then(function (user) {
      errorMsg.innerHTML = "";
      showUserDataPage(user.username);
    })["catch"](function (err) {
      errorMsg.innerHTML = _services_js__WEBPACK_IMPORTED_MODULE_0__.errorMessages[err.error];
    });
  });
}
function logoutUser() {
  logoutButtonEl.addEventListener("click", function () {
    (0,_services_js__WEBPACK_IMPORTED_MODULE_0__.fetchLogout)().then(function () {
      errorMsg.innerHTML = "";
      toggleLoginAndOut();
    })["catch"](function (err) {
      errorMsg.innerHTML = _services_js__WEBPACK_IMPORTED_MODULE_0__.errorMessages[err.error];
    });
  });
}
function updateWord() {
  updateButtonEl.addEventListener("click", function () {
    var word = userwordInputEl.value;
    (0,_services_js__WEBPACK_IMPORTED_MODULE_0__.fetchUpdateStoredWord)(word).then(function (data) {
      errorMsg.innerHTML = "";
      renderContent(data.username, data.storedWord);
      userwordInputEl.value = "";
    })["catch"](function (err) {
      errorMsg.innerHTML = _services_js__WEBPACK_IMPORTED_MODULE_0__.errorMessages[err.error];
    });
  });
}
function toggleLoginAndOut() {
  userLoginEl.classList.toggle("hidden");
  userDataContetEl.classList.toggle("hidden");
}
function showUserDataPage() {
  (0,_services_js__WEBPACK_IMPORTED_MODULE_0__.fetchCurrentStoredWord)().then(function (data) {
    renderContent(data.username, data.storedWord);
    toggleLoginAndOut();
    errorMsg.innerHTML = "";
  })["catch"](function (err) {
    errorMsg.innerHTML = _services_js__WEBPACK_IMPORTED_MODULE_0__.errorMessages[err.error];
  });
}
function renderContent(username, storedWord) {
  var currentStoredWordEl = document.querySelector(".current-storedword");
  if (storedWord) {
    currentStoredWordEl.innerHTML = "Your stored word is \"".concat(storedWord, "\".");
  } else {
    currentStoredWordEl.innerHTML = "Welcome, ".concat(username, ". No stored word found.");
  }
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map