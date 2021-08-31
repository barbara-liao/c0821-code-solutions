function handleLight(event) {
  var change = '';
  if ($button.className === 'click ' + 'dark') {
    change = 'light';
  } else if ($button.className === 'click ' + 'light') {
    change = 'dark';
  }
  $button.className = 'click ' + change;
  $body.className = change;
}

var $button = document.querySelector('button');
var $body = document.querySelector('body');
var $click = document.querySelector('.click');

$click.addEventListener('click', handleLight);
