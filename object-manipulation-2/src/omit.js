/* exported omit */

/*
- create storage for output
- if object is empty
  - return output
- get the keys in object
- if key does not exist in array
  - push to output
- return output
*/

function omit(source, keys) {
  var output = {};

  if (Object.keys(source).length === 0) {
    return output;
  }
  for (var sourceKeys in source) {
    // debugger;
    for (var i = 0; i < keys.length; i++) {
      if (sourceKeys === keys[i]) {
        break;
      }
      output[sourceKeys] = source[sourceKeys];
    }
  }
  return output;
}

omit({ foo: 1, bar: 2, baz: 3 }, ['foo', 'baz']); // -> { bar: 2 }
// omit({ qux: 4, corge: 5 }, ['bar', 'grault']); // -> { qux: 4, corge: 5 }
// omit({}, ['foo', 'bar', 'baz']); // -> {}

// function omit(source, keys) {
//   var output = {};
//   if (Object.keys(source).length === 0) {
//     return output;
//   }
//   for (var sourceKeys in source) {
//     for (var i = 0; i < keys.length; i++) {
//       if (keys.includes(sourceKeys)) {
//         break;
//       }
//       output[sourceKeys] = source[sourceKeys];
//     }
//   }
//   return output;
// }

/*
Hey Barbara! So in that interior for loop where you are looping over the list of keys to omit, you are assigning the current key in the outer for...in loop every iteration, if the keys[i] value doesn't match sourceKeys, but if the array is any more than one item long, even if one of those items is the thing to avoid and you break, it will still get assigned to the output if it wasn't the first key in the array. What you really want to do is loop over the array to see if the value is in it, and after the loop is done, if there was no value in the array that matches the current sourceKeys value, you can assign that value to the output.
*/
