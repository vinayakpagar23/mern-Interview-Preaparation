const arr =[6,7,8,9,10,1,2,3,4,5];

Array.prototype.myMap=function(cb){
    var newArr=[];
    for(let i=0;i<this.length;i++){
        newArr.push(cb(this[i],i,this));
    }
    return newArr;
}

const test = arr.myMap((ele,i,arr)=>{
    return ele>2;
})

console.log(test)