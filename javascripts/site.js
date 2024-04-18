/*Contact Us Page Start*/ 
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#contact form');
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


/* Home Page Start */
// script.js

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  // Toggle navigation menu on mobile
  menuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('active');
  });

  // Close navigation menu when a link is clicked
  const navLinksList = navLinks.querySelectorAll('a');
  navLinksList.forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('active');
    });
  });
});

/* Our Team Start */
document.addEventListener("DOMContentLoaded", function() {
  const teamMembers = [
      { name: "John Doe", position: "CEO", image: "images/john-doe.jpg" },
      { name: "Jane Smith", position: "CTO", image: "images/jane-smith.jpg" },
      { name: "Mike Johnson", position: "Marketing Manager", image: "images/mike-johnson.jpg" },
      { name: "Emily Brown", position: "Designer", image: "images/emily-brown.jpg" }
  ];

  const teamMembersContainer = document.querySelector(".team-members");

  teamMembers.forEach(member => {
      const memberDiv = document.createElement("div");
      memberDiv.classList.add("team-member");

      const image = document.createElement("img");
      image.src = member.image;
      image.alt = member.name;
      memberDiv.appendChild(image);

      const nameHeading = document.createElement("h2");
      nameHeading.textContent = member.name;
      memberDiv.appendChild(nameHeading);

      const positionPara = document.createElement("p");
      positionPara.textContent = member.position;
      memberDiv.appendChild(positionPara);

      teamMembersContainer.appendChild(memberDiv);
  });
});
function addItem(){
  alert('Item has been added to cart');
}