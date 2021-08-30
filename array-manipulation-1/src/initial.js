/* exported initial */
/*
- create storarge for output
- look at the list of elements and determine the length
- copy all of the array one by one except for the last using the number from the length
- return output
*/

function initial(array) {
  var output = [];
  for (var i = 0; i < array.length - 1; i++) {
    output.push(array[i]);
  }
  return output;
}
