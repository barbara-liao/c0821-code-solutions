/* exported invert */

/*
- create storage for output
- go through each pair one by one
- use the key as the value and value as the key
- add that into the object
- return object
*/

function invert(source) {
  var output = {};
  for (var keys in source) {
    output[source[keys]] = keys;
  }
  return output;
}
