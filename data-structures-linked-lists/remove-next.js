/* exported removeNext */

function removeNext(list) {
  if (list.next === null) return list;
  list.next = list.next.next;
}
