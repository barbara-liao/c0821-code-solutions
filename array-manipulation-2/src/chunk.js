/* exported chunk */

/*
- create storage for output
- create storage for current array
- push current array storage into the output
- if the length in the last array in the output is less than size
  - push current element to the last array in the output
- if the length in the last array in the output is equal to size
  - push new current array array into output
  - push current element to the last array in the output
- else,
  - make output equal to array
*/

function chunk(array, size) {
  var output = [];
  var currentArray = [];
  output.push(currentArray);
  if (array.length === 0) {
    return array;
  }
  for (var i = 0; i < array.length; i++) {
    if (output[output.length - 1].length < size) {
      output[output.length - 1].push(array[i]);
    } else if (output[output.length - 1].length === size) {
      currentArray = [];
      output.push(currentArray);
      output[output.length - 1].push(array[i]);
    }
  }
  return output;
}
