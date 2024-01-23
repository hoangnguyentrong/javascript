//bai 1 switch case
var x = 5;
switch(x){
  case 0:
    console.log("thu 2");
    break;
  case 1:
    console.log("thu 3");
    break;
  case 2:
    console.log("thu 4");
    break;
  case 3:
    console.log("thu 5");
    break;
  case 4: 
     console.log("thu 6");
     break;
  case 5: 
      console.log("thu 7");
      break;
    default:
      console.log("chu nhat");
}
// bai 2 
let pro = ["thu2", "thu3", "thu4", "thu5", "thu6", "thu7", "cn"];
var x = 5;

switch (x) {
    case 0:
      console.log(pro[x - 5]);
        break;
    case 1:
             console.log(pro[x - 4]);
        break;
    case 2:
           console.log(pro[x - 3]);
        break;
    case 3:
            console.log(pro[x - 2]);
        break;
    case 4:
         console.log(pro[x - 1]);
        break;
    case 5:
              console.log(pro[x -0]);
        break;
    case 6:
             console.log(pro[x +1]);
        break;
}
//bai 3 ban kiem tra so nguyen to 
function checkPrime(n){
  let is_Check = true;
  if (n == 0 || n == 1  ){
    is_Check = false;
  }
  for(i = 2 ; i < n/2; i++){
    if(n%i == 0){
      is_Check = false;
    }
  }
  if(is_Check){
    console.log ('so nguyen to') ;
  }
  else{
    console.log('khong phai la so nguyen to') ;
  }
}
checkPrime(7);