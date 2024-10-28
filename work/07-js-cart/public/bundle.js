/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToCart: () => (/* binding */ addToCart),
/* harmony export */   updateCartQuantity: () => (/* binding */ updateCartQuantity)
/* harmony export */ });
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.js */ "./src/model.js");

var addToCart = function addToCart(productId) {
  var cartItem = _model_js__WEBPACK_IMPORTED_MODULE_0__["default"].cart.find(function (item) {
    return item.product.id === productId;
  });
  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    var product = _model_js__WEBPACK_IMPORTED_MODULE_0__["default"].products.find(function (p) {
      return p.id === productId;
    });
    if (product) {
      _model_js__WEBPACK_IMPORTED_MODULE_0__["default"].cart.push({
        product: product,
        quantity: 1
      });
    }
  }
};
var updateCartQuantity = function updateCartQuantity(productId, quantity) {
  var cartItem = _model_js__WEBPACK_IMPORTED_MODULE_0__["default"].cart.find(function (item) {
    return item.product.id === productId;
  });
  if (cartItem) {
    if (quantity <= 0) {
      _model_js__WEBPACK_IMPORTED_MODULE_0__["default"].cart = _model_js__WEBPACK_IMPORTED_MODULE_0__["default"].cart.filter(function (item) {
        return item.product.id !== productId;
      });
    } else {
      cartItem.quantity = quantity;
    }
  }
};

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var model = {
  products: [{
    id: 1,
    name: "Jorts",
    price: 0.99,
    imgUrl: "http://placehold.co/150x150?text=Jorts"
  }, {
    id: 2,
    name: "Jean",
    price: 3.14,
    imgUrl: "http://placehold.co/150x150?text=Jean"
  }, {
    id: 3,
    name: "Nyancat",
    price: 2.73,
    imgUrl: "http://placehold.co/150x150?text=Nyancat"
  }],
  cart: [],
  showCart: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (model);

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.js */ "./src/model.js");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

function render(model, appEl) {
  renderProducts(model, appEl);
  if (model.showCart) {
    renderCart(model, appEl);
  }
}
function renderProducts(model, appEl) {
  var productListHtml = model.products.map(function (product) {
    return "\n      <div class=\"product\">\n        <img src=\"".concat(product.imgUrl, "\" alt=\"this is ").concat(product.name, "\">\n        <p>").concat(product.name, " - $").concat(product.price.toFixed(2), "</p>\n        <button class=\"add-to-cart\" data-id=\"").concat(product.id, "\">Add to Cart</button>\n      </div>");
  }).join("");
  var totalQuantity = 0;
  var _iterator = _createForOfIteratorHelper(model.cart),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      totalQuantity += item.quantity;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var viewCart = !model.showCart ? "<button class=\"view-cart\">View Cart (".concat(totalQuantity, ")</button>") : "";
  appEl.innerHTML = "\n    <div class=\"product-list\">".concat(productListHtml, "</div>\n    ").concat(viewCart, "\n  ");
}
function renderCart(model, appEl) {
  var cartListHtml = model.cart.map(function (_ref) {
    var product = _ref.product,
      quantity = _ref.quantity;
    return "\n      <div class=\"cart-item\">\n        <img src=\"".concat(product.imgUrl, "\" alt=\"this is ").concat(product.name, "\">\n        <p>").concat(product.name, " - $").concat(product.price.toFixed(2), " x ").concat(quantity, " = $").concat((product.price * quantity).toFixed(2), "</p>\n        <input type=\"number\" value=\"").concat(quantity, "\" data-id=\"").concat(product.id, "\" class=\"update-quantity\" />\n      </div>\n    ");
  }).join("");
  var totalPrice = 0;
  var _iterator2 = _createForOfIteratorHelper(model.cart),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var item = _step2.value;
      totalPrice += item.product.price * item.quantity;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  appEl.innerHTML += "\n    <div class=\"cart\">\n      ".concat(cartListHtml || "<p>Nothing in the cart</p>", "\n      <p>Total: $").concat(totalPrice.toFixed(2), "</p>\n      <button class=\"checkout\">Checkout</button>\n      <button class=\"hide-cart\">Hide Cart</button>\n    </div>\n  ");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.js */ "./src/model.js");
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller.js */ "./src/controller.js");
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.js */ "./src/view.js");



var appEl = document.querySelector("#app");
(0,_view_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_model_js__WEBPACK_IMPORTED_MODULE_0__["default"], appEl);
appEl.addEventListener("click", function (e) {
  if (e.target.classList.contains("add-to-cart")) {
    var productId = parseInt(e.target.dataset.id, 10);
    (0,_controller_js__WEBPACK_IMPORTED_MODULE_1__.addToCart)(productId);
    (0,_view_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_model_js__WEBPACK_IMPORTED_MODULE_0__["default"], appEl);
  }
  if (e.target.classList.contains("view-cart")) {
    _model_js__WEBPACK_IMPORTED_MODULE_0__["default"].showCart = true;
    (0,_view_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_model_js__WEBPACK_IMPORTED_MODULE_0__["default"], appEl);
  }
  if (e.target.classList.contains("hide-cart")) {
    _model_js__WEBPACK_IMPORTED_MODULE_0__["default"].showCart = false;
    (0,_view_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_model_js__WEBPACK_IMPORTED_MODULE_0__["default"], appEl);
  }
  if (e.target.classList.contains("checkout")) {
    _model_js__WEBPACK_IMPORTED_MODULE_0__["default"].cart = [];
    _model_js__WEBPACK_IMPORTED_MODULE_0__["default"].showCart = false;
    (0,_view_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_model_js__WEBPACK_IMPORTED_MODULE_0__["default"], appEl);
  }
});
appEl.addEventListener("input", function (e) {
  if (e.target.classList.contains("update-quantity")) {
    var productId = parseInt(e.target.dataset.id, 10);
    var quantity = parseInt(e.target.value, 10);
    (0,_controller_js__WEBPACK_IMPORTED_MODULE_1__.updateCartQuantity)(productId, quantity);
    (0,_view_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_model_js__WEBPACK_IMPORTED_MODULE_0__["default"], appEl);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map