// Simulated items inside cart until backend is ready
let cart = [
  {
    id: 1,
    name: "Adidas Running Sports",
    price: 120,
    qty: 1,
    image: "../assets/shoes/shoe1.jpg",
  },
  {
    id: 2,
    name: "Nike Air Max",
    price: 150,
    qty: 2,
    image: "../assets/shoes/shoe2.jpg",
  },
];

function loadCart() {
  const container = document.getElementById("cartItems");
  container.innerHTML = "";

  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.qty;

    container.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" />
        <div class="item-info">
          <h3>${item.name}</h3>
          <p>Price: $${item.price}</p>
          <p>Quantity: ${item.qty}</p>
        </div>
        <div class="item-actions">
          <button class="remove-btn" onclick="removeItem(${item.id})">Remove</button>
        </div>
      </div>
    `;
  });

  document.getElementById("cartTotal").textContent = "$" + total;
}

function removeItem(id) {
  cart = cart.filter((item) => item.id !== id);
  loadCart();
}

loadCart();
