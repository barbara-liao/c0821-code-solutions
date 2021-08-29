/* exported numVowels */

/*
- create storage for output
- make string all lowercase
- look at each character one by one
- if character is a vowel, add one to output
- return output
*/

function numVowels(string) {
  var output = 0;
  string = string.toLowerCase(string);
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') {
      output += 1;
    }
  }
  return output;
}
