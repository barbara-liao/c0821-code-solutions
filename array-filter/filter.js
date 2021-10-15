function filter(array, predicate) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i]) === true) {
      output.push(array[i]);
    }
  }
  return output;
}
