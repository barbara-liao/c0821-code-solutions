/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  const firstValue = stack.pop();
  if (firstValue === undefined) {
    return stack;
  }
  stack.push(value);
  stack.push(firstValue);
  return stack;
}
