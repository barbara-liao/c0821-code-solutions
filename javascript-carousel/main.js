var $imageList = document.querySelectorAll('.image');
var $circle = document.querySelector('#circle-select');
var $sizeList = document.querySelectorAll('.size');
var $left = document.querySelector('#left');
var $right = document.querySelector('#right');

$circle.addEventListener('click', dataView);
$left.addEventListener('click', handleLeft);
$right.addEventListener('click', handleRight);

var counter = 1;
var pokemon = ['bulb', 'char', 'squir', 'pika', 'jigg'];

function handleLeft(event) {
  if (counter === 1) {
    counter = 6;
  }
  counter = counter - 1;
  handleSwap(pokemon[counter - 1], 3000);
  stopInterval();
}

function handleRight(event) {
  if (counter === 5) {
    counter = 0;
  }
  handleSwap(pokemon[counter], 3000);
  counter++;
  stopInterval();
}

function stopInterval() {
  clearInterval(intervalID);
  intervalID = setInterval(carousel, 3000);
}

function carousel(event) {
  if (counter === 5) {
    handleSwap(pokemon[counter]);
    counter = 0;
  }
  handleSwap(pokemon[counter]);
  counter++;
}

var intervalID = setInterval(carousel, 3000);

function dataView(event) {
  var $dataView = event.target.getAttribute('data-view');
  if (event.target.nodeName === 'I' && $dataView !== '') {
    handleSwap($dataView);
    for (var i = 0; i < pokemon.length; i++) {
      if (pokemon[i] === $dataView) {
        counter = i + 1;
      }
    }
    stopInterval();
  }
}

function handleSwap(string) {
  for (var i = 0; i < $imageList.length; i++) {
    if ($imageList[i].dataset.view !== string) {
      $imageList[i].className = 'image hidden';
      $sizeList[i].className = 'size far fa-circle';
    } else {
      $imageList[i].className = 'image';
      $sizeList[i].className = 'size fas fa-circle';
    }
  }
}
