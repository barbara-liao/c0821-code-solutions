/* exported truncate */

/*
- create storage for output
- look at each individual character one by one
- if the length provided is less than the length of the characters, include characters
- add to output
- otherwise, add the full string
- add "..." after each
- return output
*/

function truncate(length, string) {
  var output = '';
  if (string.length < length) {
    output = string;
  }
  for (var i = 0; i < length; i++) {
    if (string.length > length) {
      output += string[i];
    }
  }
  output += '...';
  return output;
}
