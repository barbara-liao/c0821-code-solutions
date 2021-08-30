/* exported includes */

/*
- look at each element one by one
- if the value matches an element
- return true
- otherwise,
- return false
*/

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
