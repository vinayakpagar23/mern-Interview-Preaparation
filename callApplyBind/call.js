// Call :
// first method
let student = {
    firstName:"Vinayak",
    LastName:"Pagar",
    age:24,
    getDetails:function(){
        return `${this.firstName}  ${this.LastName} ${this.age}`
    }
}

let teacher = {
    firstName:"Uttam",
    LastName:"Pagar",
    age:44,
}

/* this is the first method , we can reuse function of another object */
let b =student.getDetails.call(teacher);
console.log(b);


// second Mthod of call
// we can declare function outside of the object and also can reause that function
let student1 = {
    firstName:"Vinayak",
    LastName:"Pagar",
    age:24,
  
}

let teacher1 = {
    firstName:"Uttam",
    LastName:"Pagar",
    age:44,
}
function getDetails(){
    return `${this.firstName}  ${this.LastName} ${this.age}`
}

function chooseSubject(sub,sub1,sub3){
    return sub+sub1+sub3;
}

console.log(getDetails.call(student1));
console.log(getDetails.call(teacher));
console.log(chooseSubject.call(teacher,"Computer-Mathematics ,","english ,","BalBharti"))


// Carry output
// we can create property in object as well

let student2 = {
    firstName:"Vinayak",
    LastName:"Pagar",
    age:24,
  
}

let teacher2 = {
    firstName:"Uttam",
    LastName:"Pagar",
    age:44,
}
function getDetails1(){
    return this.details= `${this.firstName}  ${this.LastName} ${this.age}`
}

getDetails1.call(student);
console.log(student);

// output
// Object { firstName: "Vinayak", LastName: "Pagar", age: 24, getDetails: getDetails()
// , details: "Vinayak  Pagar 24" }
// LastName: "Pagar"
// age: 24
// details: "Vinayak  Pagar 24"
// firstName: "Vinayak"

