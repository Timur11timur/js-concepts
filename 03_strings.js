const start = '   Hi How are you ';
const end = 'Here some text         ';

console.log(start.trimStart() + end.trimEnd())
console.log((start + end).trim())

console.log('url'.padStart(7, 'www.'))
console.log('url'.padEnd(7, '.com'))

function tag(string, name, age) {
    const [s1, s2, s3] = string;
    const ageStr = age > 42 ? 'Oldest' : 'Yangest';

    return `${s1}${name}${s2}${ageStr}${s3}`;
}

const person = {
    name: 'John',
    age: 30
}

console.log(tag`A man with name ${person.name} is ${person.age} in family!`)