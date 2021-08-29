/* exported capitalizeWords */
/*
- create storage for output
- look at each character, one by one
- capitalize first letter
- if there is a space before character, capitalize letter
- otherwise, make character lower case
- return output
 */

function capitalizeWords(string) {
  var output = '';
  output = string[0].toUpperCase(string[0]);
  for (var i = 1; i < string.length; i++) {
    if (string[i - 1] === ' ') {
      output += string[i].toUpperCase(string[i]);
    } else {
      output += string[i].toLowerCase(string[i]);
    }
  }
  return output;
}
