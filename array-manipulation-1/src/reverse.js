/* exported reverse */
/*
- create storage for output
- look at the array elements one by one
- push the items one by one to the front of the array
- return output
*/

function reverse(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    output.unshift(array[i]);
  }
  return output;
}
