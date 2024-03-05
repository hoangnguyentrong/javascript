function inputArray (num){
  var soLonNhat = num[0];
  var soBeNhat = num[0];
  for(let i = 1 ; i < num.length; i++){
    if(soLonNhat < num[i]){
      soLonNhat = num[i];
    }
    if(soBeNhat > num[i]){
      soBeNhat = num[i]
    }
  }
  return console.log(soLonNhat,soBeNhat)



}
inputArray([2,3,4,5])

