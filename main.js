let cart_item = 0;
let cartBadge = document.querySelector('.cart-badge');
let btns = document.querySelectorAll('.btn-order');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function (event) {
    event.preventDefault();     
    cart_item++;
    if (cartBadge) {
      cartBadge.textContent = cart_item;
    }
  });
}


let search = document.querySelector('.search-box');
search.addEventListener('submit', function (e) {
    alert('Search will be available soon!');
  });


function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  
  let toggleBtn = document.querySelector('.theme-toggle');
  if (document.body.classList.contains('dark-theme')) {
    toggleBtn.textContent = '☀️';
  } else {
    toggleBtn.textContent = '🌙';
  }
}
