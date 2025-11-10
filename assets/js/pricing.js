// Add event listeners to all "Buy now" links
document.querySelectorAll(".buy-now-button").forEach((link, index) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default link behavior

    // Define product details based on the index
    let productName = "";
    let productPrice = 0;
    let productImage = "";

    if (index === 0) {
      productName = "Technical Support & Maintenance";
      productPrice = 45000;
      productImage =
        "https://example.com/images/technical_support_maintenance.jpg"; // Replace with actual image URL
    } else if (index === 1) {
      productName = "Cloud Hosting";
      productPrice = 65000;
      productImage = "https://example.com/images/cloud_hosting.jpg"; // Replace with actual image URL
    } else if (index === 2) {
      productName = "Cybersecurity Services";
      productPrice = 80000;
      productImage = "https://example.com/images/cybersecurity_services.jpg"; // Replace with actual image URL
    }

    // Call the buyNow function with the product details
    buyNow(productName, productPrice, productImage, "../../checkout.html");
  });
});
// add listener for add to cart
document.querySelectorAll(".add-to-cart").forEach((link, index) => {
  link.addEventListener("click", (event) => {
    // store details
    // Define product details based on the index
    let productName = "";
    let productPrice = 0;
    let productImage = "";

    if (index === 0) {
      productName = "Technical Support & Maintenance";
      productPrice = 45000;
      productImage =
        "https://example.com/images/technical_support_maintenance.jpg"; // Replace with actual image URL
    } else if (index === 1) {
      productName = "Cloud Hosting";
      productPrice = 65000;
      productImage = "https://example.com/images/cloud_hosting.jpg"; // Replace with actual image URL
    } else if (index === 2) {
      productName = "Cybersecurity Services";
      productPrice = 80000;
      productImage = "https://example.com/images/cybersecurity_services.jpg"; // Replace with actual image URL
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const services = {
      name: productName,
      price: productPrice,
      image: productImage,
      quantity: 1,
    };
    cart.push(services);

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${productName} added to cart!`);
  });
});
