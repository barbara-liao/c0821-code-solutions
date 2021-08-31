var onOff = 0;

function handleLight(event) {
  onOff++;
  var change = '';
  if (onOff % 2 === 1) {
    change = 'light';
  } else {
    change = 'dark';
  }
  $button.className = 'click ' + change;
  $body.className = change;
}

var $button = document.querySelector('button');
var $body = document.querySelector('body');
var $click = document.querySelector('.click');

$click.addEventListener('click', handleLight);
