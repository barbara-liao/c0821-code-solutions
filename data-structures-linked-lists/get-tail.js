/* exported getTail */

function getTail(list) {
  let newList = list;
  let lastVal = list.data;
  while (newList.next) {
    lastVal = newList.next.data;
    newList = newList.next;
  }
  return lastVal;
}
