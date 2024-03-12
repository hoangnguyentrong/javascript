var person1 = {name: "nhat trung", age: 12};
var person2 = {name: "Huu trung", age: 32};
var sayHello = function(){ console.log('Hello,' + this.name);};
var sayGoodbye = function(){ console.log('Goodbye,' + this.name);};

sayHello.call(person1);
sayGoodbye.call(person2);
sayHello.apply(person1);
sayGoodbye.apply(person2);