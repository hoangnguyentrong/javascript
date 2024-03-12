function global() { console.log(this + "<br/>");}
var o  = { "local" : function(){console.log(this + this.x + "<br/>");}, "x": 10};
global();
o.local();

var student  = {
  name: 'Mai Ha Thi' ,
  getName: function(){
    console.log(this.name);
    return this.name;
  }
};
var_deStudent = student.getName();