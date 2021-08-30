/* exported getKeys */

/*
- create storage for output
- go through each property, one by one
- get the key to each property
- push it to the output
- return output
*/

function getKeys(object) {
  var output = [];
  for (var keys in object) {
    output.push(keys);
  }
  return output;
}
