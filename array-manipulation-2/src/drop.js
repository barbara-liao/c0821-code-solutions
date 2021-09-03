/* exported drop */

/*
- create storage for output
- look at each element one by one
- if length of array is greater than the count
  - start after the count number to push elements to the new output
- otherwise,
  - output will equal the array
- return output
*/

function drop(array, count) {
  var output = [];
  if (array.length < count) {
    output = array;
    return output;
  }
  for (var i = count; i < array.length; i++) {
    if (array.length > count) {
      output.push(array[i]);
    }
  }
  return output;
}
