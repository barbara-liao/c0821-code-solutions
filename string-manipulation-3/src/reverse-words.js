/* exported reverseWords */

/*
- create storage for output
- create temporary storage
- go through character one by one
- if there is a space,
  - push temporary storage to output
  - clear temporary storage
- otherwise,
  - add letter to the front of the temporary storage
- push temporary storage to output
- return output
*/

function reverseWords(string) {
  var output = '';
  var tempOutput = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      tempOutput += ' ';
      output += tempOutput;
      tempOutput = '';
    } else {
      tempOutput = string[i] + tempOutput;
    }
  }
  output += tempOutput;
  return output;
}
