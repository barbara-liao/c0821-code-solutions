function map(array, transform) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    const useTransform = transform(array[i]);
    output.push(useTransform);
  }
  return output;
}
