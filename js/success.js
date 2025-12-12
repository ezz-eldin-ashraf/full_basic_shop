// Generate random order ID until backend exists
let orderId = "ORD-" + Math.floor(Math.random() * 1000000);

document.getElementById("orderId").textContent = orderId;

// Later → backend will send real order ID after checkout
