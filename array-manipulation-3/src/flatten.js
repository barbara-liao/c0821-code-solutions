/* exported flatten */

/*
- create storage for output
- create a storage for temporary output
- look at each set of arrays one at a time
- push the array into the temporary output storage
- for each of the arrays sets in the temporary output storage,
- push what is inside of the array into the storage
- clear the temporary output
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
