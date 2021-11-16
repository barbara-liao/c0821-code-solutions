/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const valueOne = stack.pop();
  if (valueOne === undefined) {
    return undefined;
  }
  const valueTwo = stack.peek();
  stack.push(valueOne);
  return valueTwo;
}
