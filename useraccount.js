document.addEventListener("DOMContentLoaded", function () {
    // Select the button and confirmation message elements
    const createAccountButton = document.querySelector('button[type="submit"]');
    const confirmationMessage = document.getElementById("confirmationMessage");

    // Add an event listener to the button
    createAccountButton.addEventListener("click", function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Show the confirmation message
        confirmationMessage.classList.remove("hidden");
    });
});
