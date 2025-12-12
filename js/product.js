function changeImage(src) {
  document.getElementById("mainImage").src = src;
}

// Fake API until backend friend completes
fetch("https://getproductbyid?id=1")
  .then((res) => res.json())
  .then((product) => {
    document.getElementById("productName").textContent = product.name;
    document.getElementById("productPrice").textContent = "$" + product.price;
    document.getElementById("productDescription").textContent =
      product.description;
  });

// Add to cart (frontend simulation)
document.getElementById("addToCartBtn").addEventListener("click", () => {
  alert("Product added to cart!");
});
