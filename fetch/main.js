const newRequest = new Request('https://jsonplaceholder.typicode.com/users');
const pokeRequest = new Request('https://pokeapi.co/api/v2/pokemon/4');

fetch(newRequest)
  .then(response => response.json())
  .then(data => console.log(data));

fetch(pokeRequest)
  .then(response => response.json())
  .then(data => console.log(data));
