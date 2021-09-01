/*
- go through each element one by one
- for the selected element, underline it
- if the correct letter is typed,
//   - the element will turn green and go to the next element
// - if an incorrect letter is typed,
//   - the element will turn red and will not continue
// */

var spanCount = 0;
var letterCorrect = 'font-color-correct';
var letterIncorrect = 'font-color-incorrect';
var borderBottom = 'border-bottom';

function handleType(event) {
  if (span[spanCount].innerText === event.key) {
    span[spanCount].className = letterCorrect;
    spanCount++;
    span[spanCount].className = borderBottom;
  } else {
    span[spanCount].className = letterIncorrect + ' ' + borderBottom;
  }
}

var span = document.querySelectorAll('span');

document.addEventListener('keydown', handleType);
