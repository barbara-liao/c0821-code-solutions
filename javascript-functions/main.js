function convertMinutesToSeconds(minutes) {
  var convertToSeconds = minutes * 60;
  return convertToSeconds;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(4);
console.log(convertMinutesToSecondsResult);

function greet(name) {
  var hey = 'Hey, ' + name;
  return hey;
}

var greetResult = greet('Barbara');
console.log(greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var getAreaResult = getArea(5, 6);
console.log(getAreaResult);

function getFirstName(person) {
  var name = person;
  return name.firstName;
}

var getFirstNameResult = getFirstName({ firstName: 'Barbara', lastName: 'Liao' });
console.log(getFirstNameResult);

function getLastElement(array) {
  var lastElement = array.length - 1;
  return array[lastElement];
}

var getLastElementResult = getLastElement(['a', 'b', 'c', 'd', 'e']);
console.log(getLastElementResult);
