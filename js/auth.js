// =======================
//     REGISTER REQUEST
// =======================

document
  .getElementById("register-form")
  ?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const userData = { name, email, password };

    try {
      // Fake API URL (replace when backend is ready)
      const response = await fetch("https://fakeapi.com/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Account created successfully!");
        window.location.href = "login.html";
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.log("Register error:", error);
      alert("Something went wrong…");
    }
  });
// =======================
//         LOGIN
// =======================

document.getElementById("login-form")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value.trim();

  const loginData = { email, password };

  try {
    // Fake API
    const response = await fetch("https://fakeapi.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Login successful!");

      // Save token (temporary)
      localStorage.setItem("token", data.token || "fake-token");

      // Redirect to homepage
      window.location.href = "index.html";
    } else {
      alert(data.message || "Invalid email or password");
    }
  } catch (error) {
    console.error("Login error:", error);
    alert("Something went wrong…");
  }
});
