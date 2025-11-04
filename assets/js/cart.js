// read cart items from localStorage
const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
const cartItemsContainer = document.getElementById("cart-items");
const cartSummaryContainer = document.getElementById("cart-summary");
let totalPrice = 0;

if (cartItems.length === 0) {
  // create a div with class card to show "Your cart is empty"
  const emptyDiv = document.createElement("div");
  emptyDiv.className = "card";
  emptyDiv.innerHTML = `<h4>Your cart is empty</h4>`;
  cartItemsContainer.appendChild(emptyDiv);
}

cartItems.forEach((item) => {
  const itemDiv = document.createElement("div");
  itemDiv.className = "card";
  itemDiv.innerHTML = `
        <div class="product-details">
          <img src="${
            item.image
          }" style="width: 100px; height: 100px;" alt="Product Image" />
          <div class="product-info">
            <h3>${item.name}</h3>
            <h4>₱${item.price.toLocaleString()}</h4>
          </div>
        </div>
        <div class="cart-actions">
            <input type="number" class="quantity-input" value="1" min="1">
            <button class="remove-btn"><ion-icon name="trash-outline"></ion-icon></button>
        </div>
      `;
  cartItemsContainer.appendChild(itemDiv);
  totalPrice += parseFloat(item.price);
});

if (cartItems.length > 0) {
  cartSummaryContainer.innerHTML = `<div class="card">
  <div class="product-details">
      <h3>Total Price: ₱${totalPrice.toLocaleString()}</h3>
      <button id="checkout-btn">Proceed to Checkout</button>
    </div></div>
  `;
}

// remove item to cart
cartItemsContainer.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("remove-btn") ||
    e.target.parentElement.classList.contains("remove-btn")
  ) {
    const itemDiv = e.target.closest(".card");
    const itemName = itemDiv.querySelector(".product-info h3").innerText;

    // Remove from cartItems array
    const index = cartItems.findIndex((item) => item.name === itemName);
    if (index > -1) {
      cartItems.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }

    // Remove from DOM
    itemDiv.remove();
    location.reload(); // Refresh to update total price
  }
});
