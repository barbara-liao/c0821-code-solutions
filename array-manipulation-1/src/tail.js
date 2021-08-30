/* exported tail */
/*
- create storage for output
- push all the elements one by one from second and on into the new output
- return output
*/

function tail(array) {
  var output = [];
  for (var i = 1; i < array.length; i++) {
    output.push(array[i]);
  }
  return output;
}
