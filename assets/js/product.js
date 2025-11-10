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
    const productName = document.querySelector(".product-info h1").innerText;
    const rawPrice = document.querySelector(".product-info h2").innerText;
    const price = Number(rawPrice.replace(/[^0-9.-]+/g, ""));
    const productImage = document.querySelector(".card img").src;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if product already exists in cart
    const existingProduct = cart.find((item) => item.name === productName);

    if (existingProduct) {
      // If it exists, update the quantity
      existingProduct.quantity += 1;
    } else {
      // If it doesn't exist, add it to the cart with quantity 1
      const product = {
        name: productName,
        price: price,
        image: productImage,
        quantity: 1,
      };
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${productName} added to cart!`);
  });
});

const buyNowButton = document.querySelector(".buy-btn");
if (buyNowButton) {
  buyNowButton.addEventListener("click", () => {
    const productName = document.querySelector(".product-info h1").innerText;
    const rawPrice = document.querySelector(".product-info h2").innerText;
    const productPrice = Number(rawPrice.replace(/[^0-9.-]+/g, ""));
    const productImage = document.querySelector(".card img").src;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if product already exists in cart
    const existingProduct = cart.find((item) => item.name === productName);

    if (existingProduct) {
      // If it exists, update the quantity
      existingProduct.quantity += 1;
    } else {
      // If it doesn't exist, add it to the cart with quantity 1
      const product = {
        name: productName,
        price: productPrice,
        image: productImage,
        quantity: 1,
      };
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // Adjust the path to checkout.html relative to the htdocs root
    window.location.href = "/checkout.html";
  });
}

function buyNow(
  productName,
  productPrice,
  productImage,
  route = "../../checkout.html"
) {
  // Get the existing cart from localStorage or create a new empty array
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingProduct = cart.find((item) => item.name === productName);
  if (existingProduct) {
    // If it exists, update the quantity
    existingProduct.quantity += 1;
    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    // Redirect to the checkout page
    window.location.href = route;
  } else {
    // Create a new product object
    const product = {
      name: productName,
      price: productPrice,
      image: productImage,
      quantity: 1,
    };

    // Add the new product to the cart
    cart.push(product);

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Redirect to the checkout page
    window.location.href = route;
  }
}
