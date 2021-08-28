/* exported capitalize */

/*
- create storage for output
- create storage for letter
- look at the input word
- look at every letter one at a time
- if the letter is the first letter
  - make it to upper case
  - add it to the storage for letters
  - clear storage for letters
  - otherwise, add it to output as is
- if the letter is not the first letter
  - make it to lower case
  - add it to the storage for letters
  - clear storage for letters
  - otherwise, add it to the output as is
- return output
*/

function capitalize(word) {
  var output = '';
  var letter = '';
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      letter = word[i].toUpperCase();
      output += letter;
      letter = '';
    } else {
      letter = word[i].toLowerCase();
      output += letter;
      letter = '';
    }
  }
  return output;
}
