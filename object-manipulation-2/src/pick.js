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
  for (var i = 0; i < keys.length; i++) {
    if (keys[i] in source) {
      output[keys[i]] = source[keys[i]];
    }
  }
  return output;
}

pick({ foo: 1, bar: 2, baz: 3 }, ['foo', 'baz']);
pick({ qux: 4, corge: 5 }, ['bar', 'grault']);
pick({ bar: 2 }, ['foo', 'bar', 'baz']);
