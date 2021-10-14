const takeAChance = require('./take-a-chance');

const name = takeAChance('Barbara');

name.then(name => {
  console.log(name);
});

name.catch(error => {
  console.error(error.message);
});
