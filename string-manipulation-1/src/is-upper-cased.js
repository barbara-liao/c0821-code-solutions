/* exported isUpperCased */

/*
- look at each character one by one
- if any is not upper case
- say false
- otherwise
- say true
- return ouput
*/

function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}
