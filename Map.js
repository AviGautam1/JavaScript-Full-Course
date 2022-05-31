// Map holds the key:value pair and not allowed duplicate keys like object 
// Map is iterable 
// Create Map using --> new Map() method 
const person = new Map();
person.set('firstName', 'Avinesh');
person.set('age', 25);
// console.log(person);

// access items from Map by using get() method 
// keys() method returns all the keys in Map 
console.log(person.get('firstName'));
// console.log(person.keys());
for(let key of person.keys()){
    console.log(key, typeof key);
}

// Optional chaining
const user = {
    name : "Avinesh",
    // gender : "male"
}
console.log(user?.name);
console.log(user?.gender);