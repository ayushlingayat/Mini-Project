// Select the necessary elements
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add event listeners to each "Add to Cart" button
addToCartButtons.forEach((button) => {
  button.addEventListener('click', addToCart);
});

// Function to handle the "Add to Cart" button click
function addToCart(event) {
//   const product = event.target.closest('.col-lg-4');
//   const productName = product.querySelector('.card-title').textContent;
  const ayu = alert("Item added successfully in the cart");

}
