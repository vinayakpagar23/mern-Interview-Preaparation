Array.prototype.popp = function () {
    var myArray = this;
    var length = myArray.length-1;
    var element = myArray[length];
    myArray.length = length;
   
    return element;
}

var hello = [1,2,3,4,5,6];


console.log(hello.popp());
console.log(hello)
// [1, 2, 3, 4, 5]