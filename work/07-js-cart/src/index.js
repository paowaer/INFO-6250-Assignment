import model from "./model.js";
import { addToCart, updateCartQuantity } from "./controller.js";
import render from "./view.js";

const appEl = document.querySelector("#app");
render(model, appEl);

appEl.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart")) {
    const productId = parseInt(e.target.dataset.id, 10);
    addToCart(productId);
    render(model, appEl);
  }

  if (e.target.classList.contains("view-cart")) {
    model.showCart = true;
    render(model, appEl);
  }

  if (e.target.classList.contains("hide-cart")) {
    model.showCart = false;
    render(model, appEl);
  }

  if (e.target.classList.contains("checkout")) {
    model.cart = [];
    model.showCart = false;
    render(model, appEl);
  }
});

appEl.addEventListener("input", (e) => {
  if (e.target.classList.contains("update-quantity")) {
    const productId = parseInt(e.target.dataset.id, 10);
    const quantity = parseInt(e.target.value, 10);
    updateCartQuantity(productId, quantity);
    render(model, appEl);
  }
});
