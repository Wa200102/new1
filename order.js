document.getElementById('payNow').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const payment = document.getElementById('payment').value;
  
    if (name && email && address && payment) {
      const message = document.getElementById('confirmationMessage');
      message.classList.remove('hidden');
      setTimeout(() => {
        message.classList.add('hidden');
      }, 5000); // Hide the message after 5 seconds
    } else {
      alert('Please fill in all the fields!');
    }
  });
  