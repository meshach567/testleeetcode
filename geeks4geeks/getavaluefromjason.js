// How to Get First N Elements from an Array?

let a = [
    { "name": "Sourav", "age": 23 },
    { "name": "Ajay", "age": 25 }
];

let person = a.find(item => item.name === "Ajay");
console.log(person.age);

// This code retrieves the age of a person named "Ajay" from an array of objects.

let b = [
    { "name": "Sourav", "age": 23 },
    { "name": "Ajay", "age": 25 }
];

let names = b.map(item => item.name);
console.log(names);

// This code extracts the names from an array of objects and returns them in a new array.

let c = [
    { "name": "Sourav", "age": 23 },
    { "name": "Ajay", "age": 25 },
    { "name": "Sourav", "age": 30 }
];

let res = c.filter(item => item.name === "Sourav");
console.log(res);