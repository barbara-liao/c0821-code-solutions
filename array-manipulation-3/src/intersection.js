/* exported intersection */

/*
- create storage for output
- look at each item in the first array one at a time
  - if the item is included in the second array
  - add it into the output
- return output
*/

function intersection(first, second) {
  var output = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      output.push(first[i]);
    }
  }
  return output;
}
