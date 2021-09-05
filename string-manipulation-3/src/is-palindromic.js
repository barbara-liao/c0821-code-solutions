/* exported isPalindromic */

/*
- look at each character one by one
- if the characters going forward equals the characters in reverse, except for the spaces
  - return true
- otherwise,
  - return false
*/

function isPalindromic(string) {
  for (var i = 0; i < string.length; i++) {
    // debugger;
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

isPalindromic('rasecar');
