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
    // get the price (strip peso sign and commas, then convert to number)
    const rawPrice = document.querySelector(".product-info h2").innerText;
    const price = Number(rawPrice.replace(/[^0-9.-]+/g, ""));

    const product = {
      name: document.querySelector(".product-info h1").innerText,
      price: price, // store as a number (26995)
      image: document.querySelector(".card img").src,
    };
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  });
});

function buyNow(productName, productPrice, productImage) {
  // Get the existing cart from localStorage or create a new empty array
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Create a new product object
  const product = {
    name: productName,
    price: productPrice,
    image: productImage,
  };

  // Add the new product to the cart
  cart.push(product);

  // Save the updated cart back to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Redirect to the checkout page
  window.location.href = "checkout.html";
}
