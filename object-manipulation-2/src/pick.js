/* exported pick */

/*
- create storage for output
- look at each element one by one
- if key of element is equal to key in the object,
- push into output
- return output
*/

function pick(source, keys) {
  var output = {};
  var i = 0;
  for (keys[i] in source) {
    output[keys[i]] = source[keys[i]];
    i++;
  }
  return output;
}

pick({ foo: 1, bar: 2, baz: 3 }, ['foo', 'baz']);
