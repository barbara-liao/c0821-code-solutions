/* exported toObject */

/*
- create storage for output
- have the first array be the key name and second in array to have value
- assign it to the output
- return output
*/

function toObject(keyValuePair) {
  var object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}
