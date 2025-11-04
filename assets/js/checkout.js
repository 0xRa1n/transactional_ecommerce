document.addEventListener("DOMContentLoaded", () => {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const summaryItemsContainer = document.getElementById("summary-items");
  const summaryTotalPriceEl = document.getElementById("summary-total-price");
  let totalPrice = 0;

  if (cartItems.length === 0) {
    summaryItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    summaryTotalPriceEl.innerText = "₱0";
    return;
  }

  cartItems.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "summary-item";
    itemDiv.innerHTML = `
      <span>${item.name}</span>
      <span>₱${item.price.toLocaleString()}</span>
    `;
    summaryItemsContainer.appendChild(itemDiv);
    totalPrice += parseFloat(item.price);
  });

  summaryTotalPriceEl.innerText = `₱${totalPrice.toLocaleString()}`;
  // get the information and store it to the localstorage
  const checkoutForm = document.querySelector(".form-section form");
  checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    // Create an object to hold the customer's details
    const customerDetails = {
      firstName: document.getElementById("fname").value,
      lastName: document.getElementById("lname").value,
      address: document.getElementById("address").value,
      address2: document.getElementById("address2").value,
      city: document.getElementById("city").value,
      state: document.getElementById("state").value,
      zip: document.getElementById("zip").value,
      country: document.getElementById("country").value,
    };

    // Store the customer details and ordered items in localStorage
    localStorage.setItem("customerDetails", JSON.stringify(customerDetails));
    localStorage.setItem("orderedItems", JSON.stringify(cartItems));
    localStorage.setItem("orderTotalPrice", totalPrice);

    alert("Order placed successfully!");
    localStorage.removeItem("cart");
    window.location.href = "order_received.html"; // Redirect to order received page
  });
});
//  get the content of the localstorage customerDetails
document.addEventListener("DOMContentLoaded", () => {
  const customerDetails = JSON.parse(localStorage.getItem("customerDetails"));
  const orderedItems = JSON.parse(localStorage.getItem("orderedItems"));
  const orderTotalPrice = localStorage.getItem("orderTotalPrice");

  const orderDetailsContainer = document.getElementById("order-details");
  const orderSummaryContainer = document.getElementById("order-summary");

  // Display Billing Information
  if (customerDetails) {
    let detailsHtml = `
          <h3>Billing Information</h3>
          <div class="billing-details">
            <strong>Name:</strong>
            <span>${customerDetails.firstName} ${customerDetails.lastName}</span>

            <strong>Address:</strong>
            <span>${customerDetails.address}</span>`;

    if (customerDetails.address2) {
      detailsHtml += `
            <strong>Address 2:</strong>
            <span>${customerDetails.address2}</span>`;
    }

    detailsHtml += `
            <strong>City:</strong>
            <span>${customerDetails.city}</span>

            <strong>State:</strong>
            <span>${customerDetails.state}</span>

            <strong>ZIP Code:</strong>
            <span>${customerDetails.zip}</span>

            <strong>Country:</strong>
            <span>${customerDetails.country}</span>
          </div>`;
    orderDetailsContainer.innerHTML = detailsHtml;
  } else {
    orderDetailsContainer.innerHTML =
      "<h3>Billing Information</h3><p>No billing information found.</p>";
  }

  // Display Order Summary
  if (orderedItems && orderedItems.length > 0) {
    let summaryHtml = "<h3>Order Summary</h3><br>";
    orderedItems.forEach((item) => {
      summaryHtml += `
            <div class="summary-item">
              <span>${item.name}</span>
              <span>₱${parseFloat(item.price).toLocaleString()}</span>
            </div>
          `;
    });
    summaryHtml += `
          <div class="summary-total">
            <span>Total</span>
            <span>₱${parseFloat(orderTotalPrice).toLocaleString()}</span>
          </div>
        `;
    orderSummaryContainer.innerHTML = summaryHtml;
  } else {
    orderSummaryContainer.innerHTML =
      "<h3>Order Summary</h3><p>No items found in this order.</p>";
  }
});
