var books = [
  {
    isbn: 9780553204742,
    title: 'Where the Red Fern Grows',
    author: 'Rawls, Wilson'
  },
  {
    isbn: 9780812550702,
    title: 'Enders Game',
    author: 'Card, Orson Scott'
  },
  {
    isbn: 9780749709303,
    title: 'Little House on the Prarie',
    author: 'Wilder, Laura Ingalls'
  }
];

console.log('type of: ', typeof books);

console.log(JSON.stringify(books));
console.log('typeof: ', typeof JSON.stringify(books));

var barbara = '{ "Number id": 1, "String name": "Barbara" }';
console.log('typeof: ', typeof barbara);

var obj = JSON.parse(barbara);
console.log('typeof: ', typeof obj);
