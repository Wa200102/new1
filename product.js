document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.getElementById("cart-items");
    const totalDisplay = document.getElementById("total");

    let cart = [];
    let total = 0;

    // Add to cart functionality
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", (event) => {
            const product = event.target.parentElement;
            const name = product.querySelector("h3").textContent;
            const price = parseFloat(event.target.dataset.price);
            const quantity = parseInt(product.querySelector(".quantity").value);

            const item = cart.find(item => item.name === name);

            if (item) {
                item.quantity += quantity;
            } else {
                cart.push({ name, price, quantity });
            }

            updateCart();
        });
    });

    // Update cart display and total
    function updateCart() {
        cartItems.innerHTML = "";
        total = 0;

        cart.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
            cartItems.appendChild(listItem);

            total += item.price * item.quantity;
        });

        totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
    }


function saveFavourites() {
    const favouriteOrder = Array.from(document.querySelectorAll(".quantity"))
      .map(input => ({
        category: input.getAttribute("data-category"),
        price: input.getAttribute("data-price"),
        quantity: input.value,
      }));
    localStorage.setItem("favouriteOrder", JSON.stringify(favouriteOrder));
    alert("Favourites saved!");
  }

  function applyFavourites() {
    const favouriteOrder = JSON.parse(localStorage.getItem("favouriteOrder"));
    if (!favouriteOrder) return alert("No favourite saved!");

    document.querySelectorAll(".quantity").forEach(input => {
      const match = favouriteOrder.find(
        fav =>
          fav.category === input.getAttribute("data-category") &&
          fav.price === input.getAttribute("data-price")
      );
      input.value = match ? match.quantity : 0;
    });

    updateCart();
  }

  function navigateToPayment() {
    alert("Redirecting to payment page...");
    // Replace with navigation logic
  }

  document.querySelectorAll(".quantity").forEach(input =>
    input.addEventListener("input", updateCart)
  );
  saveFavouriteButton.addEventListener("click", saveFavourites);
  applyFavouriteButton.addEventListener("click", applyFavourites);
  buyNowButton.addEventListener("click", navigateToPayment);
});
document.getElementById("buyNow").addEventListener("click", function() {
    window.location.href = "order.html";
});
