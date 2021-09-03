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
  if (word.toUpperCase() === 'JAVASCRIPT') {
    output = 'JavaScript';
    return output;
  }
  for (var i = 1; i < word.length; i++) {
    output += word[i].toLowerCase();
  }
  return output;
}
