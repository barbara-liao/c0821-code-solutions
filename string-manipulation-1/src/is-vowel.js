/* exported isVowel */
/*
- look at the input letter
- change letter to lower case
- compare against each vowel
- if it is, true
- if it isn't, false
*/

function isVowel(char) {
  if (char.toLowerCase() === 'a') {
    return true;
  } else if (char.toLowerCase() === 'e') {
    return true;
  } else if (char.toLowerCase() === 'i') {
    return true;
  } else if (char.toLowerCase() === 'o') {
    return true;
  } else if (char.toLowerCase() === 'u') {
    return true;
  }
  return false;
}
