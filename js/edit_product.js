// Fake products (same used in manage_products.js)
const fakeProducts = [
  {
    id: 1,
    name: "Nike Air Max",
    price: 150,
    description: "Comfortable sports shoes",
    image: "images/shoe1.jpg",
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    price: 180,
    description: "High-quality running shoes",
    image: "images/shoe2.jpg",
  },
];

// Extract product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get("id"));

// Find product
const product = fakeProducts.find((p) => p.id === productId);

if (!product) {
  alert("Product not found!");
}

// Fill form with product data
document.getElementById("productName").value = product.name;
document.getElementById("productPrice").value = product.price;
document.getElementById("productDesc").value = product.description;
document.getElementById("productImage").value = product.image;

// Save Changes
document.getElementById("editForm").addEventListener("submit", (e) => {
  e.preventDefault();

  product.name = document.getElementById("productName").value;
  product.price = document.getElementById("productPrice").value;
  product.description = document.getElementById("productDesc").value;
  product.image = document.getElementById("productImage").value;

  alert("Product updated successfully! (Placeholder)");
  // Later with backend:
  // fetch(`/api/products/${productId}`, { method: "PUT", body: JSON.stringify(product) })
});
