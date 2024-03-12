class pet{
  constructor(name,talk){
    this.name = name;
    this.talk = talk;
  }
  introduce(){
    console.log(`ten toi la ${this.name + this.talk}`)
    return this.name + this.talk;
  }
}
class dog extends pet {
  constructor(name,talk,kind){
    super(name,talk);
    this.kind = kind;
  }
  mykind(){
    console.log(`toi la dong vat ${this.kind}`)
  }
  talk(){
    console.log(`Woof! Woof!`);
  }
  introduce(){
    super.introduce();
    console.log(`${this.kind}`);
  }
}
var myPet = new pet(' momo',' meomeo');
myPet.introduce();
var mydog = new dog('momo1', ' meomeo1', ' dog');
mydog.introduce();

