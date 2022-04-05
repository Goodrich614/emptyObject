const person1 = {
    name: 'Sean',
    age: 25,
    height: 69
}
const person2 = {
    name: 'Mary',
    age: 53,
    height: null
}
const isEmptyObject = (obj) => {
    let result = ((obj.age == null || obj.name == null || obj.height == null) ? true : false);
    return result;
}
console.log(`${isEmptyObject(person1)}, the object has no null values`);
console.log(`${isEmptyObject(person2)}, the object has null values`);