const products = [];

const product1 = {
  name: "Cherry",
  price: 0.5,
  quantity: 0,
  productId: 1,
  image: "images/cherry.jpg"
};

const product2 = {
  name: "Orange",
  price: 0.8,
  quantity: 0,
  productId: 2,
  image: "images/orange.jpg"
};

const product3 = {
  name: "Strawberry",
  price: 0.6,
  quantity: 0,
  productId: 3,
  image: "images/strawberry.jpg"
};

// Adding the product objects to the products array
products.push(product1, product2, product3);

const cart = [];

function addProductToCart(productId) {
  const product = products.find(item => item.productId === productId);
  
  if (product) {
    product.quantity++;
    if (!cart.includes(product)) {
      cart.push(product);
    }
  }
}

function increaseQuantity(productId) {
  const product = products.find(item => item.productId === productId);
  
  if (product) {
    product.quantity++;
  }
}

function decreaseQuantity(productId) {
  const product = products.find(item => item.productId === productId);
  
  if (product) {
    product.quantity--;
    if (product.quantity === 0) {
      const index = cart.indexOf(product);
      if (index !== -1) {
        cart.splice(index, 1);
      }
    }
  }
}

function removeProductFromCart(productId) {
  const product = products.find(item => item.productId === productId);
  
  if (product) {
    product.quantity = 0;
    const index = cart.indexOf(product);
    if (index !== -1) {
      cart.splice(index, 1);
    }
  }
}

function cartTotal() {
  let total = 0;
  
  for (const product of cart) {
    total += product.price * product.quantity;
  }
  
  return total;
}

function emptyCart() {
  cart.length = 0;
}

function pay(amount) {
  return amount - cartTotal();
}

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  emptyCart,
};
```
