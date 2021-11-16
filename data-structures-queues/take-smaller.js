/* exported takeSmaller */

function takeSmaller(queue) {
  const firstVal = queue.dequeue();
  if (firstVal === undefined) return;
  if (queue.peek() === undefined) return firstVal;
  if (firstVal > queue.peek()) {
    queue.enqueue(firstVal);
    return queue.dequeue();
  }
  const secondVal = queue.dequeue();
  queue.enqueue(secondVal);
  return firstVal;
}
