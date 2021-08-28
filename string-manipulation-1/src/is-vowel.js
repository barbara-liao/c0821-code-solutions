/* exported isVowel */
/*
- look at the input letter
- change letter to lower case
- compare against each vowel
- if it is, true
- if it isn't, false
*/

function isVowel(char) {
  if (char.toLowerCase() === 'a' || char.toLowerCase() === 'e' || char.toLowerCase() === 'i' || char.toLowerCase() === 'o' || char.toLowerCase() === 'u') {
    return true;
  }
  return false;
}
