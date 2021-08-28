/* exported getWords */

/*
- create storage for output
- create storage for current word
- look at each letter one by one
- if space,
  - add current word into output
  - clear out storage for current word
- otherwise,
  - add letters to current word
- add current word to output
- if string is ''
- make it nothing
- return list of words
*/

function getWords(string) {
  var output = [];
  var currentWord = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      output.push(currentWord);
      currentWord = '';
    } else {
      currentWord += string[i];
    }
  }
  output.push(currentWord);
  if (string === '') {
    output = [];
  }
  return output;
}
