/* exported swapChars */
/*
- create output
- look at each character one by one
- if the first index is equal to the number we're looking at
  - make the first index equal the character of the second index
  - add the character into the output
- or if the second index is equal to the number we're looking at
  - make the second index equal to the character of the first index
  - add the character into the output
- otherwise
  - add the character into the output
 */

function swapChars(firstIndex, secondIndex, string) {
  var output = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      output += (string[i] = string[secondIndex]);
    } else if (i === secondIndex) {
      output += (string[i] = string[firstIndex]);
    } else {
      output += string[i];
    }
  }
  return output;
}
