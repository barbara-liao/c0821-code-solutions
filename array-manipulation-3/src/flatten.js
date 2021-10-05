/* exported flatten */

/*
- create storage for output
- look at each set of arrays one at a time
- if the array is an array,
  - look at each item in the current array
  - push the current array into the temporary output storage
- otherwise,
  - push the array into the storage
- return output
*/

function flatten(array) {
  var output = [];

  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var a = 0; a < array[i].length; a++) {
        output.push(array[i][a]);
      }
    } else {
      output.push(array[i]);
    }
  }
  return output;
}
