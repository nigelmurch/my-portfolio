
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  if (!form || !formMessage) {
    console.error('Form or message element not found.');
    return;
  }

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation
    if (name.length < 2) {
      formMessage.textContent = 'Please enter a valid name.';
      formMessage.style.color = 'red';
      return;
    }

    if (!validateEmail(email)) {
      formMessage.textContent = 'Please enter a valid email address.';
      formMessage.style.color = 'red';
      return;
    }

    if (subject.length < 5) {
      formMessage.textContent = 'Subject should be at least 5 characters.';
      formMessage.style.color = 'red';
      return;
    }

    if (message.length < 10) {
      formMessage.textContent = 'Message should be at least 10 characters.';
      formMessage.style.color = 'red';
      return;
    }

    formMessage.textContent = 'Thank you! Your message has been sent.';
    formMessage.style.color = 'green';
    form.reset();
  });

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
});
