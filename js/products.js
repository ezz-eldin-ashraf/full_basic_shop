// Fake API URL
const productsAPI = "https://fakeapi.com/products";

// Load Products
async function loadProducts() {
  try {
    // const response = await fetch(productsAPI);
    // const products = await response.json();

    // TEMPORARY FAKE DATA (remove when backend is ready)
    const products = [
      {
        id: 1,
        name: "Nike Air Max",
        price: 120,
        image: "assets/images/shoe1.png",
      },
      {
        id: 2,
        name: "Adidas Runner",
        price: 95,
        image: "assets/images/shoe2.png",
      },
      {
        id: 3,
        name: "Adidas Runner",
        price: 95,
        image: "assets/images/shoe3.png",
      },
      {
        id: 4,
        name: "Adidas Runner",
        price: 95,
        image: "assets/images/shoe4.png",
      },
      {
        id: 1,
        name: "Nike Air Max",
        price: 120,
        image: "assets/images/shoe1.png",
      },
      {
        id: 2,
        name: "Adidas Runner",
        price: 95,
        image: "assets/images/shoe2.png",
      },
      {
        id: 3,
        name: "Adidas Runner",
        price: 95,
        image: "assets/images/shoe3.png",
      },
      {
        id: 4,
        name: "Adidas Runner",
        price: 95,
        image: "assets/images/shoe4.png",
      },
      {
        id: 1,
        name: "Nike Air Max",
        price: 120,
        image: "assets/images/shoe1.png",
      },
      {
        id: 2,
        name: "Adidas Runner",
        price: 95,
        image: "assets/images/shoe2.png",
      },
      {
        id: 3,
        name: "Adidas Runner",
        price: 95,
        image: "assets/images/shoe3.png",
      },
      {
        id: 4,
        name: "Adidas Runner",
        price: 95,
        image: "assets/images/shoe4.png",
      },
    ];

    const container = document.getElementById("products-list");

    products.forEach((p) => {
      container.innerHTML += `
                <div class="product-card">
                    <img src="${p.image}" alt="${p.name}">
                    <h3>${p.name}</h3>
                    <p>$${p.price}</p>
                    <button onclick="viewProduct(${p.id})">View</button>
                </div>
            `;
    });
  } catch (error) {
    console.log("Error fetching products:", error);
  }
}

function viewProduct(id) {
  window.location.href = `product.html?id=${id}`;
}

// Load on page start
loadProducts();
