const person = {
    name: 'Max',
    age: 30
}

console.log(Object.getOwnPropertyDescriptors(person));
console.log(Object.getOwnPropertyDescriptor(person, 'name'));

console.log(Object.entries(person)); //Object to array
console.log(Object.fromEntries([['key', 'value']])); //array to Object

for (const [key, value] of Object.entries(person)) {
    console.log(key, value);
}

console.log(Object.keys(person));
console.log(Object.values(person));