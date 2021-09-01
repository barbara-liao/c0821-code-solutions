function handleFocus(event) {
  console.log('Focus event fired');
  console.log('event name: ', event.target.name);
}

function handleBlur(event) {
  console.log('Blur event fired');
  console.log('event name: ', event.target.name);
}

function handleInput(event) {
  console.log('event name: ', event.target.name);
  console.log('event value: ', event.target.value);
}

var $firstInput = document.getElementById('user-name');
var $secondInput = document.getElementById('user-email');
var $textArea = document.querySelector('textarea');

$firstInput.addEventListener('focus', handleFocus);
$firstInput.addEventListener('blur', handleBlur);
$firstInput.addEventListener('input', handleInput);

$secondInput.addEventListener('focus', handleFocus);
$secondInput.addEventListener('blur', handleBlur);
$secondInput.addEventListener('input', handleInput);

$textArea.addEventListener('focus', handleFocus);
$textArea.addEventListener('blur', handleBlur);
$textArea.addEventListener('input', handleInput);
