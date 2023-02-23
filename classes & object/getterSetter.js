class Animal{
    constructor(name){
        this._name=name;
    }
    fly(){
        console.log("I am flying")
    }
    get name(){
        return this._name
    }
    set name(newName){
        this._name=newName;
    }
}

const obj = new Animal("chuchu");
console.log(obj.name)
obj.name="mungabai";
console.log(obj.name);
