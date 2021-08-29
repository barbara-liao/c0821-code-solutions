/* exported getValue */

/*
- create storage for output
- find the object at the key and assign that to the output
- return output
*/

function getValue(object, key) {
  var output = '';
  output = object[key];
  return output;
}
