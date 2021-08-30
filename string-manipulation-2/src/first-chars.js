/* exported firstChars */

/*
- create storage for output
- look at each character one by one
- if the string length is greater than the length parameter
  - add each character to the output
- otherwise
  - the output will equal the string
- return output
*/

function firstChars(length, string) {
  var output = '';
  for (var i = 0; i < length; i++) {
    if (string.length > length) {
      output += string[i];
    } else {
      return string;
    }
  }
  return output;
}
