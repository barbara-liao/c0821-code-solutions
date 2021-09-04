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
