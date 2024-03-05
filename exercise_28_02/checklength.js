function checklenght(){
  const Mang2 = sentence.split(' ')
  var kt = Mang2[0];
  var Max = Mang2[0].length;
  for(let i = 0;i < Mang2.length;i++){
      if(Max < Mang2[i].length){
          Max = Mang2[i].length;
          kt = Mang2[i];
      }
  }
  return kt;
}
var sentence = 'Co thuy dep gai'
console.log(checklenght())
