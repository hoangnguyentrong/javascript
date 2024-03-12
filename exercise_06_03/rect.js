class Rect{
  constructor(x,y,w,h){
    this.x =x;
  this.y = y;
  this.w = w;
  this.h = h;
  }
  calcArea(){
    return this.w * this.h;
  }
  
}
// var rect = new Rect(1,2,3,4);
// console.log(rect.calcArea());

var rect = new Rect(1,2,3,4);
console.log(rect.constructor.name+ "" + rect.constructor.prototype+ " " +rect.calcArea()+ "<br/>");
var rect1 = new Rect(1,2,3,4);
console.log(rect1.constructor.name+ "" + rect1.constructor.prototype+ "" +rect1.calcArea()+ "<br/>");
console.log(rect.calcArea())