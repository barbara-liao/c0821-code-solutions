var student = {
  firstName: 'Barbara',
  lastName: 'Liao',
  age: 30
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('Value of fullName: ', fullName);

student.livesInIrvine = false;

student.previousOccupation = 'Accountant';

console.log('Value of student.livesInIrvine: ', student.livesInIrvine);
console.log('Value of student.previousOccupation: ', student.previousOccupation);
console.log(student);

var vehicle = {
  make: 'Tesla',
  model: 'Model 3',
  year: 2021
};

vehicle['color'] = 'Dark Gray';
vehicle['isConvertible'] = false;

console.log('Value of vehicle["color"]: ', vehicle['color']);
console.log('Value of vehicle["isConvertible"]', vehicle['isConvertible']);
console.log(vehicle);

var pet = {
  name: 'Cookie',
  type: 'Cat'
};

delete pet.name;
delete pet.type;

console.log('Value of pet: ', pet);
