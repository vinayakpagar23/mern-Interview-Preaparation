const arr =[6,7,8,9,10,1,2,3,4,5];

Array.prototype.myFilter = function(cb){
    let newArr =[];
    for(let i =0;i<this.length;i++){
        if(cb(this[i],i,this)){
            newArr.push(this[i],i,this);
        }
    }
    return newArr;
}











// Array.prototype.myFilter=function(cb){
//     let newArr=[];
//     for(let i=0;i<this.length;i++){
//     if(cb(this[i],i,this)){
//         newArr.push(this[i]);
        
//     }
// }
// return newArr;
// }

// let ans =arr.myFilter((el)=>{
//     return el%2==0;
// })

// console.log(ans);