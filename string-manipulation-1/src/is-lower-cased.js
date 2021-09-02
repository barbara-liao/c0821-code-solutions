/* exported isLowerCased */

/*
- look at every letter, one by one
- if not lower case,
- return false
- otherwise, return true
*/

function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== (word[i].toLowerCase())) {
      return false;
    }
  }
  return true;
}
