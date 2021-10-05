/* exported difference */

/*
- create storage for output
- look at each item in the first array
  - if the item is not in the second array
  - add it to the output
- look at each item in the second array
  - if the item is not in the first array
  - add it to the output
- return output
*/

function difference(first, second) {
  var output = [];
  for (var i = 0; i < first.length; i++) {
    if (!(second.includes(first[i]))) {
      output.push(first[i]);
    }
  }
  for (var a = 0; a < second.length; a++) {
    if (!(first.includes(second[a]))) {
      output.push(second[a]);
    }
  }
  return output;
}
