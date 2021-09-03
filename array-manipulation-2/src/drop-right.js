/* exported dropRight */

/*
- create storage for output
- look at each element one by one
- if array length is greater than count
  - add elements to output until count number away from the last element
- otherwise,
  - make output equal to array
- return output
*/

function dropRight(array, count) {
  var output = [];
  if (array.length < count) {
    output = array;
    return output;
  }
  for (var i = 0; i < array.length - count; i++) {
    if (array.length > count) {
      output.push(array[i]);
    }
  }
  return output;
}
