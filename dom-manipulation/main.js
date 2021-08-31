var clicks = 0;

function handleClick(event) {
  clicks += 1;
  clickCount.textContent = 'Clicks: ' + clicks;
  var color = '';
  if (clicks < 4) {
    color = 'cold';
  } else if (clicks < 7) {
    color = 'cool';
  } else if (clicks < 10) {
    color = 'tepid';
  } else if (clicks < 13) {
    color = 'warm';
  } else if (clicks < 16) {
    color = 'hot';
  } else {
    color = 'nuclear';
  }
  hotButton.className = 'hot-button ' + color;
}

var hotButton = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');

hotButton.addEventListener('click', handleClick);
