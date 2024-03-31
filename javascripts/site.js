/*Contact Us Page Start*/ 
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const statusMessage = document.getElementById('status-message');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const formData = new FormData(form);
  
      fetch('https://example.com/contact', {
        method: 'POST',
        headers: {
         'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
      })

      .then(response => {
        if (response.ok) {
          statusMessage.textContent = 'Message sent successfully!';
          statusMessage.style.color = 'green';
          form.reset();
        } else {
          throw new Error('Failed to send message.');
        }
      })
      .catch(error => {
        statusMessage.textContent = 'An error occurred. Please try again later.';
        statusMessage.style.color = 'red';
      });
    });
  });
  
/*Contact Us Page End*/ 