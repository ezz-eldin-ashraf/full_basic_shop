// Fake add product logic (placeholder until backend is ready)

document.getElementById("addProductForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const newProduct = {
    name: document.getElementById("productName").value,
    price: document.getElementById("productPrice").value,
    description: document.getElementById("productDesc").value,
    image: document.getElementById("productImage").value,
  };

  console.log("Product added:", newProduct);

  alert("Product added successfully! (placeholder)");

  // Later when backend is ready:
  // fetch("/api/products", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(newProduct),
  // });

  // Clear form
  document.getElementById("addProductForm").reset();
});
