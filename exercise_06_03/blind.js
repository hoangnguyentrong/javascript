var checkNumericRange = function(value){
  if(typeof value !== 'number')
  return false;
    else 
    return value >= this.minimun && value <= this.maximum;
}

var range = {minimun:10, maximum:20};

var boundCheckNumericRange = checkNumericRange.bind(range);

var result = boundCheckNumericRange(12);
console.log(result)
