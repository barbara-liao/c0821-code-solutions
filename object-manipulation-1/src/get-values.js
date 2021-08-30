/* exported getValues */

/*
- create storage for output
- go through properties in objects one by one
- pull the values of the keys
- push them to output
- return output
*/

function getValues(object) {
  var output = [];
  for (var keys in object) {
    output.push(object[keys]);
  }
  return output;
}
