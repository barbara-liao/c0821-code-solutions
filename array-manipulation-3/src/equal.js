/* exported equal */

/*
- if the length of the first array and second array is not equal,
  - return false
- look at the items in the arrays one by one
- if the value at i for the first array is not equal to the value at i for the second array
  - return false
- otherwise, return true
*/

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
