/* exported removeTail */

function removeTail(list) {
  if (!list.next) return list;
  let newList = list;
  while (newList.next.next) {
    newList = newList.next;

  }
  newList.next = null;
}
