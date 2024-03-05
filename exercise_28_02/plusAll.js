function plusAll(){
  var res = 0;
  for(var i in arguments){
    res += arguments[i];
  }
  return res;
}
console.log(plusAll(1,2))

var person1 = {name : 'Nhat Minh', age: 12};
var person2 = {name : 'Huu Trung', age: 35};
 
var sayHello = function(){alert('Hello,' + this.name);};
var sayGoodbye = function(){alert('Goodbye' + this.name );};
