Array.prototype.popp = function () {
    var myArray = this;
    var length = myArray.length-1;
    var element = myArray[length];
    myArray.length = length;
   
    return element;
}

var hello = [1,2,3,4,5,6];

Array.prototype.poop =function(){
    let ele = this[this.length-1];
    this.length =this.length-1;
    return ele;
}

console.log(hello.poop());
console.log(hello)
console.log(typeof hello)
// [1, 2, 3, 4, 5]

function mul (x) {
    return function (y) { // anonymous function
     if(y) return mul(x*y);
     return x;
  }
}

console.log(mul(2)(3)(6)(8)());
