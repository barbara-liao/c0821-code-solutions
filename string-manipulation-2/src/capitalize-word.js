/* exported capitalizeWord */
/*
- create storage for output
- make all characters upper case
- go through each character one by one
- starting at the second character, make all characters lower case
- add each character to storage
- return output
 */

function capitalizeWord(word) {
  var output = '';
  output = word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    if (word.toUpperCase() !== 'JAVASCRIPT') {
      output += word[i].toLowerCase();
    } else {
      output = 'JavaScript';
    }
  }
  return output;
}
