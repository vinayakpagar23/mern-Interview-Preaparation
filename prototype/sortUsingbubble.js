
const arr =[6,7,8,9,10,1,2,3,4,5];

// sort function using bubble sort

Array.prototype.sort_arr=function(){
    for(var i=0;i<this.length;i++){
        for(var j=0;j<this.length-i-1;j++){
             if(this[j]>this[j+1]){
                let temp =this[j];
                this[j]=this[j+1];
                this[j+1]=temp;
             }
        }
    }
    return this;
}

// console.log(arr.sort_arr());
// console.log(arr);




arr.forEach((ele,i,p)=>{
   return p[i]=ele*2;
})

console.log(arr)