/* exported ransomCase */

/*
- create storage for output
- look at each character one by one
- if character position is an even number, make it lower case
  - add it to the output
- otherwise, make it upper case
  - add it to the ouput
- return output
*/

function ransomCase(string) {
  var output = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      output += string[i].toLowerCase(string[i]);
    } else {
      output += string[i].toUpperCase(string[i]);
    }
  }
  return output;
}
