
class Car{
  constructor(car, speed){
    this.car = car;
    this.speed = speed;
  }
  printSpeed(){
    console.log(`${this.speed}`);
    return this.speed;

  }
  instanceMethod(){
    console.log("An instance method");
  }
}
var car = new Car('BWM',50);
console.log(car.printSpeed()); // 50
car.instanceMethod();

class Cabriolet extends Car {
  constructor(car, speed, topState) {
    super(car, speed);
    this.topState = topState;
  }
  openTop(){
    this.topState = 'opened';
    console.log(`Top: ${this.topState}`);
  }
  closeTop(){
    this.topState = 'closed';
    console.log(`Top: ${this.topState}`);
  }
}
var cabriolet = new Cabriolet('BWM',120,'closed');
cabriolet.printSpeed();
cabriolet.openTop();
cabriolet.closeTop();
class TestlaCabriolet extends Cabriolet{
  constructor(openTop, name){
    super(openTop);
    this.name = name;
  }
  sayName(){
    console.log(`${this.name}`);
  }
}
var testlaCabriolet = new TestlaCabriolet(true,"Testla");
testlaCabriolet.openTop();
testlaCabriolet.sayName();