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
  window.location.href = "../../../checkout.html";
}
