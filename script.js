document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  try {
    const response = await fetch('http://localhost:3000/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await response.json();
    document.getElementById('statusMessage').textContent = data.message;
    document.getElementById('statusMessage').style.color = 'green';
  } catch (error) {
    document.getElementById('statusMessage').textContent = 'Error sending email. Please try again later.';
    document.getElementById('statusMessage').style.color = 'red';
  }
});