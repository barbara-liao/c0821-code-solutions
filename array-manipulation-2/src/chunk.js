/* exported chunk */

/*
- create storage for output
- create storage for current array
- look at each element one by one
- if it's the last element,
  - add to current array and push it to output
- and if current array length is less than size
  - push element into array
- and if current array length is equal to size
  - push current array into output
  - clear current array
- otherwise,
  - make output equal array
- return output
*/

function chunk(array, size) {
  var output = [];
  var currentArray = [];
  for (var i = 0; i < array.length; i++) {
    // debugger;
    if (i === array.length - 1) {
      currentArray.push(array[i]);
      output.push(currentArray);
    } else if (currentArray.length < size) {
      currentArray.push(array[i]);
    } else if (currentArray.length === size) {
      currentArray.push(array[i]);
      output.push(currentArray);
      currentArray = [];
    } else {
      output = array;
    }
  }
  return output;
}

// function chunk(array, size) {
//   var output = [];
//   for (var element of array) {
//     var last = output[output.length - 1];
//     if (!last || last.length === size) {
//       output.push([element]);
//     } else {
//       last.push(element);
//     }
//   }
//   return output;
// }
