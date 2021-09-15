var $h1 = document.querySelector('h1');
var countdown = 3;

var interval = setInterval(function () {
  $h1.textContent = countdown;
  countdown--;
  if (countdown === -1) {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(interval);
  }
}, 1000);
