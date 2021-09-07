/* exported pick */

/*
- create storage for output
- look at each element one by one
- if key of element is equal to key in the object,
- push into output
- return output
*/

function pick(source, keys) {
  var output = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      output[keys[i]] = source[keys[i]];
    }
  }
  return output;
}
