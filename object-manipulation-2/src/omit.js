/* exported omit */

/*
- create storage for output
- check keys one by one
- if key in object does not equal any key in keys
  - push to output
- else,
  - return output empty
- return output
*/

// function omit(source, keys) {
//   var output = {};
//   for (var i = 0; i < keys.length; i++) {
//     if (!(source.key in keys)) {
//       output[keys[i]] = source[keys[i]];
//     } else {
//       output;
//     }
//   }
//   return output;
// }
