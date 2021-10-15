function filter(array, predicate) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      output.push(array[i]);
    }
  }
  return output;
}
