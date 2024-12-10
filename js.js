document.addEventListener("DOMContentLoaded", () => {
    const cart = {};
    const totalPriceElement = document.getElementById("total-price");

    // Update cart total price
    const updateCart = () => {
        let total = 0;
        const tbody = document.querySelector("tbody");
        tbody.innerHTML = "";
        for (const [item, details] of Object.entries(cart)) {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item}</td>
                <td>${details.quantity}</td>
                <td>$${details.price}</td>
            `;
            tbody.appendChild(row);
            total += details.price;
        }
        totalPriceElement.textContent = `$${total}`;
    };

    // Add event listener to inputs
    document.querySelectorAll("input[data-price]").forEach(input => {
        input.addEventListener("change", (e) => {
            const quantity = parseInt(e.target.value, 10) || 0;
            const price = parseFloat(e.target.dataset.price);
            const itemName = e.target.previousElementSibling.textContent.trim();
            if (quantity > 0) {
                cart[itemName] = { quantity, price: price * quantity };
            } else {
                delete cart[itemName];
            }
            updateCart();
        });
    });

    // Add to favorites
    document.getElementById("add-to-favorites").addEventListener("click", () => {
        localStorage.setItem("favorites", JSON.stringify(cart));
    });

    // Apply favorites
    document.getElementById("apply-favorites").addEventListener("click", () => {
        const favorites = JSON.parse(localStorage.getItem("favorites"));
        if (favorites) {
            for (const key in favorites) {
                cart[key] = favorites[key];
            }
            updateCart();
        }
    });
});
