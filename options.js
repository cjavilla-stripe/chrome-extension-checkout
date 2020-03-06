var stripe = Stripe('pk_test_9X75ivLekg65a5rlcxEb4kZS00gL2A82l9');
var button = document.getElementById('ck');
button.addEventListener('click', function(e) {
  e.preventDefault();
  fetch('https://pay.cjavilla.com/checkouts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
    stripe.redirectToCheckout({
      sessionId: data.id
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});
