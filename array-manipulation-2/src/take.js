/* exported take */

/*
- create storage for output
- look at each element one by one
- if the array length is greater than count
  - push the elements the count number of times to the new output
- otherwise,
  - output will equal array
- return output
*/

function take(array, count) {
  var output = [];
  for (var i = 0; i < count; i++) {
    if (array.length > count) {
      output.push(array[i]);
    } else {
      output = array;
    }
  }
  return output;
}
