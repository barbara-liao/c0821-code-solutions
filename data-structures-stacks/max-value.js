/* exported maxValue */

function maxValue(stack) {
  const startingNum = stack.pop();
  let largestNum = startingNum;
  if (startingNum === undefined) {
    return -Infinity;
  }
  while (stack.peek() !== undefined) {
    const num = stack.pop();
    if (largestNum < num) {
      largestNum = num;
    }
  }
  return largestNum;
}
