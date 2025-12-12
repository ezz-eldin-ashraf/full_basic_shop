// Fake API response (replace later with real backend)
const fakeProducts = [
  {
    id: 1,
    name: "Nike Air Max",
    price: 150,
    image: "images/shoe1.jpg",
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    price: 180,
    image: "images/shoe2.jpg",
  },
];

// Render products in the table
function loadProducts() {
  const container = document.getElementById("productsContainer");
  container.innerHTML = "";

  fakeProducts.forEach((product) => {
    const row = `
      <tr>
        <td>${product.id}</td>
        <td><img src="${product.image}" /></td>
        <td>${product.name}</td>
        <td>$${product.price}</td>
        <td>
          <a href="edit_product.html?id=${product.id}" class="action-btn">Edit</a>
          <button class="action-btn delete-btn" onclick="deleteProduct(${product.id})">Delete</button>
        </td>
      </tr>
    `;
    container.innerHTML += row;
  });
}

function deleteProduct(id) {
  alert("Product " + id + " deleted (placeholder)");
  // later:
  // fetch(`/api/products/${id}`, { method: "DELETE" })
}

loadProducts();
