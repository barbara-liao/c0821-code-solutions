/*
- create storage to see whether lightbulb is on or off
- if lightbulb is dark,
  - change to light
- if lightbulb is light
  - change to dark
- change classnames
*/

var isOn = false;

function handleLight(event) {
  var change = '';
  if (isOn === false) {
    change = 'light';
    isOn = true;
  } else if (isOn === true) {
    change = 'dark';
    isOn = false;
  }
  $button.className = 'click ' + change;
  $body.className = change;
}

var $button = document.querySelector('button');
var $body = document.querySelector('body');
var $click = document.querySelector('.click');

$click.addEventListener('click', handleLight);
