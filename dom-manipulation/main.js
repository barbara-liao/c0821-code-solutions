var clicks = 0;

function handleClick(event) {
  clicks += 1;
  clickCount.textContent = 'Clicks: ' + clicks;
  var color = '';
  if (clicks < 4) {
    color = 'cold';
  } else if (clicks < 7) {
    hotButton.cool = hotButton.tepid;
  }
  hotButton.className = 'hot-button' + color;
}

var hotButton = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');

hotButton.addEventListener('click', handleClick);
