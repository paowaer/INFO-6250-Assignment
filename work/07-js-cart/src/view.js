import model from "./model.js";

function render(model, appEl) {
  renderProducts(model, appEl);
  if (model.showCart) {
    renderCart(model, appEl);
  }
}

function renderProducts(model, appEl) {
  const productListHtml = model.products
    .map(
      (product) => `
      <div class="product">
        <img src="${product.imgUrl}" alt="this is ${product.name}">
        <p>${product.name} - $${product.price.toFixed(2)}</p>
        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
      </div>`
    )
    .join("");

  let totalQuantity = 0;
  for (const item of model.cart) {
    totalQuantity += item.quantity;
  }

  const viewCart = !model.showCart
    ? `<button class="view-cart">View Cart (${totalQuantity})</button>`
    : "";

  appEl.innerHTML = `
    <div class="product-list">${productListHtml}</div>
    ${viewCart}
  `;
}

function renderCart(model, appEl) {
  const cartListHtml = model.cart
    .map(
      ({ product, quantity }) => `
      <div class="cart-item">
        <img src="${product.imgUrl}" alt="this is ${product.name}">
        <p>${product.name} - $${product.price.toFixed(2)} x ${quantity} = $${(
        product.price * quantity
      ).toFixed(2)}</p>
        <input type="number" value="${quantity}" data-id="${
        product.id
      }" class="update-quantity" />
      </div>
    `
    )
    .join("");

  let totalPrice = 0;
  for (const item of model.cart) {
    totalPrice += item.product.price * item.quantity;
  }

  appEl.innerHTML += `
    <div class="cart">
      ${cartListHtml || "<p>Nothing in the cart</p>"}
      <p>Total: $${totalPrice.toFixed(2)}</p>
      <button class="checkout">Checkout</button>
      <button class="hide-cart">Hide Cart</button>
    </div>
  `;
}

export default render;
