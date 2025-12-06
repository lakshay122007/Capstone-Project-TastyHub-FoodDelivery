let pass = document.getElementById('password');
let togglepass = document.getElementById('toggle-password');

if (pass && togglepass) {
  togglepass.addEventListener('click', function () {
    if (pass.type === 'password') {
      pass.type = 'text';
      togglepass.innerText = 'Hide';
    } else {
      pass.type = 'password';
      togglepass.innerText = 'Show';
    }
  });
}
