// use extends keywords for class inheritance
class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}



// const animal1 = new Dog("Jeck", 2);
// console.log(animal1);
// console.log(animal1.eat());
// console.log(animal1.isCute());

// super () class --> used to call the constructor of parent class 
class Dog extends Animal{
    constructor(name, age, speed){
    super(name, age);
    this.speed = speed;
    }

}

const animal1 = new Dog("Jeck", 2, 45);
console.log(animal1);
