const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent page reload

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  const data = { name, email };

  fetch('http://localhost:3000/formdata', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      alert('Form submitted successfully');
    } else {
      alert('Submission failed');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
});