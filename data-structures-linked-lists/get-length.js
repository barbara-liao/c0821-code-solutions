/* exported getLength */

function getLength(list) {
  let count = 1;
  let altList = list;
  while (altList.next) {
    count++;
    altList = altList.next;
  }
  return count;
}
