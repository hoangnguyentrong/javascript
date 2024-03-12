class pet{
  constructor(name,sound){
    this.name = name;
    this.sound = sound;
  }
  introduce(){
    console.log(`toi la pet va ten toi la ${this.name }`)
    return this.name ;
  }
  talk(){
    console.log(`${this.sound}`) ;
  }
  
}
class dog extends pet {
  constructor(name,sound,kind){
    super(name,sound);
    this.kind = kind;
  }
  mykind(){
    console.log(`toi la dong vat ${this.kind}`)
  }
  talk(){
    console.log(`Woof! Woof! ${this.sound}`);
  }
 
}
var myDog = new dog('Buddy','happy', 'Golden');
myDog.introduce();
myDog.mykind();
myDog.talk();



