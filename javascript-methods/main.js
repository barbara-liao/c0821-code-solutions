var oneHundred = 100;
var eightyFive = 85;
var thirtyThree = 33;

var maximumValue = Math.max(oneHundred, eightyFive, thirtyThree);
console.log('maximumValue: ', maximumValue);

var heroes = ['black widow', 'hawk eye', 'iron man', 'hulk'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('randomIndex: ', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero: ', randomHero);

var library = [
  {
    title: 'Circe',
    author: 'Madeline Miller'
  }, {
    title: 'The Book of Lost Names',
    author: 'Kristin Harmel'
  }, {
    title: 'Me Before You',
    author: 'Jojo Moyes'
  }
];

var lastBook = library.pop();
console.log('lastBook: ', lastBook);

var firstBook = library.shift();
console.log('firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Alex Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log(library);

var fullName = 'Barbara Liao';
var firstAndLastName = fullName.split(' ');

console.log('firstAndLastName: ', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName: ', sayMyName);
