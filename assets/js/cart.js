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
  // get the quantity from the item, default to 1 if not present
  const quantity = item.quantity || 1;
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
            <input type="number" class="quantity-input" value="${quantity}" min="1">
            <button class="remove-btn"><ion-icon name="trash-outline"></ion-icon></button>
        </div>
      `;
  cartItemsContainer.appendChild(itemDiv);
  totalPrice += parseFloat(item.price) * quantity;
});

if (cartItems.length > 0) {
  cartSummaryContainer.innerHTML = `<div class="card">
  <div class="product-details">
      <h3>Total Price: ₱${totalPrice.toLocaleString()}</h3>
      <button id="checkout-btn"><a href="checkout.html" style="text-decoration: none; color: white">Proceed to checkout</a></button>
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
// ...existing code...
// update quantity
cartItemsContainer.addEventListener("change", (e) => {
  if (e.target.classList.contains("quantity-input")) {
    const itemDiv = e.target.closest(".card");
    const itemName = itemDiv.querySelector(".product-info h3").innerText;
    const newQuantity = parseInt(e.target.value);

    // Update the quantity in the localStorage cart
    const itemInCart = cartItems.find((item) => item.name === itemName);
    if (itemInCart) {
      itemInCart.quantity = newQuantity;
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }

    // Recalculate total price from the DOM
    let newTotalPrice = 0;
    const allItemCards = cartItemsContainer.querySelectorAll(".card");
    allItemCards.forEach((card) => {
      const name = card.querySelector(".product-info h3").innerText;
      const quantity = parseInt(card.querySelector(".quantity-input").value);
      const itemData = cartItems.find((item) => item.name === name);
      if (itemData) {
        newTotalPrice += itemData.price * quantity;
      }
    });

    totalPrice = newTotalPrice;

    // Update the summary in the DOM
    cartSummaryContainer.innerHTML = `<div class="card">
      <div class="product-details">
          <h3>Total Price: ₱${totalPrice.toLocaleString()}</h3>
          <button id="checkout-btn"><a href="checkout.html" style="text-decoration: none; color: white">Proceed to checkout</a></button>
        </div></div>
      `;
  }
});
