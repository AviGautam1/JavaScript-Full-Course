// create static method 
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName){
        
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;

    }

    static classInfo(){
        return `this is person class`;
    }
}

const person1 = new Person("Avinesh", "Gautam", 25);
// person1.fullName = "Ankur Yadav";
// console.log(person1);
// console.log(person1.fullName);
// const info = Person.classInfo();
console.log(info);





