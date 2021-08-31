/* exported lastChars */

/*
- create storage for output
- look at each character, one by one starting from the end
- if the string length is greater than length
  - add the characters to the output
- otherwise,
  - the ouput will equal the string
- return the output
*/

function lastChars(length, string) {
  var output = '';
  if (string.length < length) {
    return string;
  }
  for (var i = string.length - 1; i > string.length - 1 - length; i--) {
    if (string.length > length) {
      output = string[i] + output;
    }
  }
  return output;
}
