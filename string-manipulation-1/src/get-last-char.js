/* exported getLastChar */

/*
- create storage for output
- create storage for the number of letters
- look at the input word
- find out how many letters are in the word
- add the number of letters into the storage for number of letters
- make the numbers start from 0 rather than 1
- find the last letter
- add the last letter to the ouput
- return the output
*/

function getLastChar(string) {
  var output = '';
  var numOfLetters = '';
  numOfLetters = string.length;
  output = string[numOfLetters - 1];
  return output;
}
