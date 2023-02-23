// Prototype

// const obj1={
//     name:"Vinayak",
//     education:"Software engineer",
//     getName:function(){
//         return this.name
//     },
//     getPlace:function(){
//         return this.place;
//     }
// }
// const obj2={
//     name:"suraj",
//     Mobile:9689886567,
//     place:"Pune",
//     __proto__:obj1
// }

// console.log(obj2.name);  //vinayak
// console.log(obj2.getName()); // vinayak


// const obj3={
//     class:"First class with destiction",
//     place:"Dareaon",
//     __proto__:obj2
// }

// console.log(obj3.name);  // vinayak
// console.log(obj3.place); // Daregaon   if place property is not present in this object it will take place from above object
// console.log(obj3.getPlace()); //daregaon


/* Array Prototype*/

const arr =["Vinayak","Sunaina"];
// console.log(arr);

const newArr = new Array();
console.log(newArr);  //return All properties of array

// // creating show function to show all array
Array.prototype.my_show=function(){
 return this
}

console.log(arr.my_show());// show all array



















//   Three type to declare object

// const obj =new Object({
//     name:"vinayak",
// })
// var obj2 = new Object();
// const obj3 ={}

// console.log(obj);
// console.log(obj2);