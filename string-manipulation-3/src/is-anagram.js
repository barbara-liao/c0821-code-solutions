/* exported isAnagram */

/*
- create storage for temporary first string
- create storage for temporary second string
- look at the letters in both string one by one
- push first string with no spaces into temporary storage
- push second string with no spaces into temporary storage
- if first and second string are not the same length, then return false
- sort first and second string to be in alphabetical order
- look at each letter of the strings one by one
  - compare each letter with the other and if the letter in the first string in position i doesn't match the letter i in the second string
  - return false
- otherwise, return true
*/

function isAnagram(firstString, secondString) {
  var firstStringStorage = [];
  var secondStringStorage = [];

  for (var i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      firstStringStorage.push(firstString[i]);
    }
  }

  for (var a = 0; a < secondString.length; a++) {
    if (secondString[a] !== ' ') {
      secondStringStorage.push(secondString[a]);
    }
  }

  firstStringStorage.sort();
  secondStringStorage.sort();

  for (var b = 0; b < firstStringStorage.length; b++) {
    if (firstStringStorage[b] !== secondStringStorage[b]) {
      return false;
    }
  }

  return true;
}
