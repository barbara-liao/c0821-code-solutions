/* exported reverseWord */

/*
- create output storage
- look at each letter, one by one
- add each letter to the beginning of the output
- return output
*/

function reverseWord(word) {
  var output = '';
  for (var i = 0; i < word.length; i++) {
    output = word[i] + output;
  }
  return output;
}
