/* exported defaults */

/*
- create storage for output
- look at source keys one by one
- if key is not in target,
  - push key and value to target
- return output
*/

function defaults(target, source) {
  for (var keys in source) {
    if (!(keys in target)) {
      target[keys] = source[keys];
    }
  }
}
