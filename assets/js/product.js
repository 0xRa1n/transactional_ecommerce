const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Deactivate all buttons and panels
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabPanels.forEach((panel) => panel.classList.remove("active"));

    // Activate the clicked button and corresponding panel
    button.classList.add("active");
    const targetPanel = document.getElementById(button.dataset.tab);
    if (targetPanel) {
      targetPanel.classList.add("active");
    }
  });
});
// add to cart
const cartButtons = document.querySelectorAll(".cart-btn");
cartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // save to localStorage
    const product = {
      name: document.querySelector(".product-info h1").innerText,
      price: document.querySelector(".product-info h2").innerText,
      image: document.querySelector(".card img").src,
    };
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  });
});
