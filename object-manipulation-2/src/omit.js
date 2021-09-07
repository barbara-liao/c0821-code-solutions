/* exported omit */

/*
- create storage for output
- create storage for the boolean that will let us know whether or not the key of the obj is in array
- if object is empty
  - return output
- get the keys in object
- compare each key to the array
  - if key does not exist in array, make the boolean output false
- once the individual keys are checked against the array and is not in the array
  - add object to output
- return output
*/

function omit(source, keys) {
  var output = {};
  var inSource = true;
  if (Object.keys(source).length === 0) {
    return output;
  }
  for (var sourceKeys in source) {
    for (var i = 0; i < keys.length; i++) {
      if (sourceKeys === keys[i]) {
        inSource = true;
        break;
      } else {
        inSource = false;
      }
    }
    if (inSource === false) {
      output[sourceKeys] = source[sourceKeys];
    }
  }
  return output;
}

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
