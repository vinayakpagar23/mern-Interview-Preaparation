// static method belongs to classes
// we can use static method with class name to anywhere ...outside the class as well

// syntax  
//   className.staticmethodName(other stufff)

class Animal{
    constructor(name){
        this.name=Animal.capital(name);
    }

    walk(){
        console.log(`Animal ${this.name} is waliking`)
    }
    static capital(name){
        return name[0].toUpperCase()+ name.substr(1,name.length);
    }
}

// const obj =new Animal(Animal.capital("mungus"));
const obj =new Animal("mungus");
obj.walk();
