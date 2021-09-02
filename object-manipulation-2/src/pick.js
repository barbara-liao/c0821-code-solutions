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
    // debugger;
    if (keys[i] in source) {
      output[keys[i]] = source[keys[i]];
    } else {
      return output;
    }
  }
  return output;
}

pick({ qux: 4, corge: 5 }, ['bar', 'grault']);
pick({ bar: 2 }, ['foo', 'bar', 'baz']);
