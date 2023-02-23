const arr =[6,7,8,9,10,1,2,3,4,5];

// const ans =arr.reduce((accu,ele,i,arr)=>{
//   return accu+ele;
// },0)

Array.prototype.myReduce=function(cb,initial){
    var accu =initial;
    for(let i =0;i<this.length;i++){
        accu=accu?cb(accu,this[i],i,this):this[i];
    }
    return accu;
}

ans=arr.myReduce((acc,ele)=>{
  return acc+ele;
},0)
console.log(ans);


