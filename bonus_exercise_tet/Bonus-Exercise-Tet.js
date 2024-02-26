//toan tu ba ngoi
const x = 100;
const result = (x < 1000) ? console.log("nho hon 1000") : "lon hon hoac bang 1000";
//shorthand evaluaated
const variable2 = variable1 || "";
//Variable declaration – If Comparison
let x1, y, z = 3;
if(isTurnOn);
//For loop – For loop with decimal base
for (let item in sampleArr);

for (let i = 0;i< 1e5;i++){}
//Object property
const x2 = 1, y1 = 2;
const obj = { x2,y1 };
//Rút gọn định nghĩa function(Sử dụng arrow function) 
sayHello  = name => console.log('Hello', name);
setTimeout(() => console.log('Loaded'), 2000);
list.forEach(item => console.log(item));

getValue = ratio => ratio * 6.9
//Set default value for parameter in function
getValue = (a,b = 3 , c = 4) => (a*b + c);
//Template list
const welcome = `You have logged in as ${first} ${last} .`;

const lorem = `Lorem ipsum dolor sit consectetur
    adipisicing elit, sed do eiusmod temor incidiunt
    ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute
    irure dolor in reprehenderit in voluptate velit esse.`;

//Destructuring Assignment
import {action, service} from 'lib';
const {form, error, entiry, controller, component} = this.props;

//Constraint Param
mandatory = () => { throw new Error('Thiếu tham số!');}
sample = (param1 = mandatory()) => param1

//Find() in arrays
const name = 'Emp A'
emp = employees.find(item => item.name === name)

//Object[key]
function validate(fullName){
  if(!fullName.firstName)
  return false;
if(!fullName.lastName)
return false;
return true;
}
console.log(validate({fisrtName:'Duy', lastName:'Buffet'}));
const rule = {
  fisrtName: {
    required:true
  },
  lastName: {
    required:true
  }
}

const validate = (rule, values) => {
  for(prop in rule ){
    if(rule[prop].required){
      if(!values[prop]){
        return false;
      }
    }
  }
  return true;
}

console.log(validate(rule, {firstName:'Duy'}));
console.log(validate(rule, {fisrtName:'Duy', lastName:'Buffet'}));