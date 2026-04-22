const products = [
  {
    id: 1,
    name: "iPhone 14",
    price: 70000,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Laptop",
    price: 50000,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Headphones",
    price: 2000,
    image: "https://via.placeholder.com/150"
  }
];

let cart = [];

function displayProducts() {
  const productContainer = document.getElementById("products");

  products.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
      <img src="${product.image}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productContainer.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  document.getElementById("cart-count").innerText = cart.length;

  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
  });
}

function viewCart() {
  document.getElementById("cart").classList.remove("hidden");
}

function closeCart() {
  document.getElementById("cart").classList.add("hidden");
}

displayProducts();
