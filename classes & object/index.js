// class- It is a template for JavaScript objects.
// class railway{
//     constructor(name){
//      this.name=name;
//     }
//     submit(){
//         console.log("passed")
//     }
//     getname(){
//         return this.name;
//     }
// }

// const obj = new railway("vinayak");
// obj.submit();
// console.log(obj.name);
// console.log(obj.getname());

// inheritance
                class Animal{
                    constructor(name,color){
                        this.name=name;
                        this.color=color;
                    }

                    run(){
                        console.log(this.name + " is running ")
                    }
                    shout(){
                        console.log(this.name + " is shouting");
                    }
                }

                class Monkey extends Animal{
                    constructor(name,color,type){
                       super(name,color);
                        this.type=type;
                        
                    }
                    eatBanana(){
                        console.log(this.name +" is eating banana "+this.type);
                    }
                }
                const obj =new Monkey("chimpazi","black","gkkk");
                obj.eatBanana();
                obj.shout();


// Method overriding

// class Employee{
//     constructor(name,salary){
//         this.name=name;
//         this.name=salary;
//     }

//     getSalary(){
//         console.log(`${this.name} salary is ${this.salary} `);
//     }
// }


// class programmer extends Employee{
//     constructor(type){
//       super
//     }
//     requestCoffee(x){
//         console.log(`employee has requested for coffee ${this.x}`)
//     }
// }

// let obj= new programmer();
