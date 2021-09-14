function ExampleConstructor() {}
console.log('value of ExampleConstructor: ', ExampleConstructor);
console.log('type of ExampleConstructor: ', typeof ExampleConstructor);

var newConstructor = new ExampleConstructor();
console.log('value of newConstructor: ', newConstructor);
var instanceofConstructor = newConstructor instanceof ExampleConstructor;
console.log('instanceofConstructor: ', instanceofConstructor);
