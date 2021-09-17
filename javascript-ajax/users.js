var $userList = document.querySelector('#user-list');

var newUser = new XMLHttpRequest();
newUser.open('GET', 'https://jsonplaceholder.typicode.com/users');
newUser.responseType = 'json';
newUser.addEventListener('load', function () {
  console.log(newUser.status);
  console.log(newUser.response);
  for (var i = 0; i < this.response.length; i++) {
    var $li = document.createElement('li');
    $li.textContent = newUser.response[i].name;
    $userList.appendChild($li);
  }
});
newUser.send();
