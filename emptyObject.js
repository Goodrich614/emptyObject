const person1 = {
    name: 'Sean',
    age: 25,
    height: 69
}
const person2 = {
    name: null,
    age: '',
    height: undefined
}
const isEmptyObject = Object.values(obj).every(value => {
    if(value === null || value === undefined || value === '') {
        return true;
    }
    return false;
});

console.log(isEmptyObject(person1));
