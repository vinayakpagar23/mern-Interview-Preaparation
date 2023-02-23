const arr =[1,2,3,4,5,6,7,76,7,8];
const obj ={
    name:"vinayak",
    city:"Nashik"
}
const letters = new Set(arr);
var newArr =[...letters]
console.log(newArr)



const checking =(...args)=>{  //rest operator
    console.log(args);
}

checking(...arr); //spread operator


