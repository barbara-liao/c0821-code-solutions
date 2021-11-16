/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) return;
  const firstVal = queue.dequeue();
  queue.enqueue(firstVal);
  return queue.dequeue();
}
