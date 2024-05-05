function ClearForm() {
  alert('You clicked Clear');
  document.getElementById("contact").reset();
}

function Submit() {
  alert('Your response has been submitted');
}

function Subscribe() {
  alert('You have successfully subscribed to our newsletter');
}

function addItem() {
  alert('Added to cart successfully');
}

function buyNow() {
  alert('Thank you for your purchase!');
}

function showDetails(event) {
  event.preventDefault();
  alert("Thank you for your interest! More details about this position will be available soon."); 
}
