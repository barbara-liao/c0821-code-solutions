/* exported pick */

/*
- create storage for output
- look at each element one by one
- if key of element is equal to key,
- push into output
- return output
*/

function pick(source, keys) {
  var output = '';
  for (keys in source) {
    output.push(Object[source]);
  }
}
