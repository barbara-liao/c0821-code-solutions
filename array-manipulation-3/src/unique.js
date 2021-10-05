/* exported unique */
/*
- create storage for output
- look through each item in the array
  - if the item does not exist in the output,
    - push it into the output
- return ouptut
 */

function unique(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    if (!(output.includes(array[i]))) {
      output.push(array[i]);
    }
  }
  return output;
}
