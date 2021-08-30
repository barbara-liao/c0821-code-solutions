/* exported compact */
/*
- create storage for output
- look at the items one by one
- if the amounts are not falsys, push them into the new array
- return output
*/

function compact(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      output.push(array[i]);
    }
  }
  return output;
}
