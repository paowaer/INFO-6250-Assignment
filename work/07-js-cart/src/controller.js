import model from "./model.js";

export const addToCart = function (productId) {
  const cartItem = model.cart.find((item) => item.product.id === productId);
  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    const product = model.products.find((p) => p.id === productId);
    if (product) {
      model.cart.push({ product, quantity: 1 });
    }
  }
};

export const updateCartQuantity = function (productId, quantity) {
  const cartItem = model.cart.find((item) => item.product.id === productId);
  if (cartItem) {
    if (quantity <= 0) {
      model.cart = model.cart.filter((item) => item.product.id !== productId);
    } else {
      cartItem.quantity = quantity;
    }
  }
};
