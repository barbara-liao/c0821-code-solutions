/* exported takeRight */

/*
- create storage for output
- look at the elements one by one starting from the last element
- if array length is greater than count
  - put the elements into the new array count number of times
- otherwise,
  - make the output equal the array
- return output
*/

function takeRight(array, count) {
  var output = [];
  for (var i = array.length - 1; i > array.length - 1 - count; i--) {
    if (array.length > count) {
      output.unshift(array[i]);
    } else {
      output = array;
    }
  }
  return output;
}
