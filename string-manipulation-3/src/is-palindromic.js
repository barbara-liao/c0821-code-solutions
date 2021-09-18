/* exported isPalindromic */

/*
- create storage for temporary output
- look at each character one by one
- if the letter is not a space
  - add to temporary output
- look at the temporary output one by one
  - if the characters going forward equals the characters in reverse
  - return true
- otherwise,
  - return false
*/

function isPalindromic(string) {
  var stringOutput = '';

  for (var a = 0; a < string.length; a++) {
    if (string[a] !== ' ') {
      stringOutput += string[a];
    }
  }

  for (var i = 0; i < stringOutput.length; i++) {
    if (stringOutput[i] !== stringOutput[stringOutput.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
