/* exported zip */

/*
- create storage for output
- create storage for temporary output
- create storage for length
- if the length of the first array is shorter than the second,
  - reassign the storage length with the length of first array
- else,
  - reassign the storage length with the length of second array
- loop through both array for the number of times in the storage length
  - push the item in the first and second array at the number to the temp output
  - push the temp output to the output
  - clear the temp output
- return output
*/

function zip(first, second) {
  var output = [];
  var tempOutput = [];
  var arrayLength = null;
  if (first.length < second.length) {
    arrayLength = first.length;
  } else {
    arrayLength = second.length;
  }
  for (var i = 0; i < arrayLength; i++) {
    tempOutput.push(first[i]);
    tempOutput.push(second[i]);
    output.push(tempOutput);
    tempOutput = [];
  }
  return output;
}
