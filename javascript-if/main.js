/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  var underFive = number < 5;
  return underFive;
}

function isEven(number) {
  var remainder = number % 2;
  var even = remainder !== 1;
  return even;
}

function startsWithJ(string) {
  var withJ = string[0] === 'J';
  return withJ;
}

function isOldEnoughToDrink(person) {
  var oldEnoughToDrink = person.age >= 18;
  return oldEnoughToDrink;
}

function isOldEnoughToDrive(person) {
  var oldEnoughToDrive = person.age >= 21;
  return oldEnoughToDrive;
}

function isOldEnoughToDrinkAndDrive(person) {
  var drinkAndDrive = person.age >= 18 && person.age >= 21;
  return drinkAndDrive;
}

function categorizeAcidity(pH) {
  var result;
  if (pH <= 0) {
    result = 'invalid pH level';
  } else if (pH < 7) {
    result = 'acid';
  } else if (pH === 7) {
    result = 'neutral';
  } else if (pH <= 14) {
    result = 'base';
  } else if (pH > 14) {
    result = 'invalid pH level';
  }
  return result;
}

function introduceWarnerBro(name) {
  var result;
  if (name === 'yakko' || name === 'wakko') {
    result = "We're the warner brothers!";
  } else if (name === 'dot') {
    result = "I'm cute~";
  } else {
    result = 'Goodnight everybody!';
  }
  return result;
}
