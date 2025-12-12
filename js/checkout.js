// USE THE SAME CART from cart.js logic (temporary)
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

function loadOrderSummary() {
  const container = document.getElementById("orderItems");
  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.qty;

    container.innerHTML += `
      <div class="order-item">
        <strong>${item.name}</strong>
        <p>Qty: ${item.qty}</p>
        <p>Price: $${item.price}</p>
      </div>
    `;
  });

  document.getElementById("orderTotal").textContent = "$" + total;
}

loadOrderSummary();

document.getElementById("placeOrderBtn").addEventListener("click", () => {
  const name = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;

  if (!name || !email || !phone || !address) {
    alert("Please fill all fields!");
    return;
  }

  // Send data to backend later
  alert("Order Placed Successfully!");
});
