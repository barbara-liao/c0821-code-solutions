/* exported union */

/*
- create storage for output
- look at each item one at a time in the first array
  - if the item is not in the output,
  - add it to the output
- look at each item one at a time in the second array
  - if the item is not in the output,
  - add it to the output
- return output
*/

function union(first, second) {
  var output = [];
  for (var i = 0; i < first.length; i++) {
    if (!(output.includes(first[i]))) {
      output.push(first[i]);
    }
  }
  for (var a = 0; a < second.length; a++) {
    if (!(output.includes(second[a]))) {
      output.push(second[a]);
    }
  }
  return output;
}
