// Fake Orders Data
let orders = [
  {
    id: 1,
    user: "Ezz El-Din",
    total: "$120",
    status: "pending",
    date: "2025-02-11",
  },
  {
    id: 2,
    user: "Ahmed Ali",
    total: "$65",
    status: "completed",
    date: "2025-02-12",
  },
  { id: 3, user: "Noor", total: "$89", status: "canceled", date: "2025-02-13" },
];

// Elements
const tbody = document.getElementById("ordersList");
const modal = document.getElementById("statusModal");
const modalOrderId = document.getElementById("modalOrderId");
const newStatusSelect = document.getElementById("newStatus");
const saveBtn = document.getElementById("saveStatus");
const closeBtn = document.getElementById("closeModal");

let currentOrderId = null;

// Display Orders
function loadOrders() {
  tbody.innerHTML = "";

  orders.forEach((o) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${o.id}</td>
      <td>${o.user}</td>
      <td>${o.total}</td>
      <td><span class="status ${o.status}" id="status-${o.id}">${o.status}</span></td>
      <td>${o.date}</td>
      <td>
        <button class="btn-update" onclick="openStatusModal(${o.id})">Update Status</button>
      </td>
    `;

    tbody.appendChild(tr);
  });
}
loadOrders();

// Open Modal
function openStatusModal(id) {
  currentOrderId = id;
  modalOrderId.textContent = id;

  // Set current value in dropdown
  const order = orders.find((o) => o.id === id);
  newStatusSelect.value = order.status;

  modal.style.display = "flex";
}

// Close Modal
closeBtn.onclick = () => (modal.style.display = "none");

// Save new status
saveBtn.onclick = () => {
  const newStatus = newStatusSelect.value;

  // Update order in array
  const order = orders.find((o) => o.id === currentOrderId);
  order.status = newStatus;

  // Update UI badge
  const badge = document.getElementById(`status-${order.id}`);
  badge.textContent = newStatus;

  // Remove all status classes
  badge.className = "status " + newStatus;

  // Close modal
  modal.style.display = "none";
};
