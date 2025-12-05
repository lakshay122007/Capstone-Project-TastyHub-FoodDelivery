
let cartCount = 0;

const cartBadge = document.querySelector('.cart-badge');
const addButtons = document.querySelectorAll('.add-btn');

addButtons.forEach(button => {
  button.addEventListener('click', function (event) {
    event.preventDefault();              
    cartCount++;
    if (cartBadge) {
      cartBadge.textContent = cartCount; 
    }
  });
});

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  
  let toggleBtn = document.querySelector('.theme-toggle');
  if (document.body.classList.contains('dark-theme')) {
    toggleBtn.textContent = '☀️';
  } 
  else {
    toggleBtn.textContent = '🌙';
  }
}
