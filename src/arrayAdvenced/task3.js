const people = [
    {name: 'Tomas', age: 15},
    {name: 'Erika', age: 22,}, 
    {name: 'Sualius', age: 17},
    {name: 'Audrius', age: 34}
];

const getAdultPeopleNames = (arr) => arr.filter((a) => a.age >= 18).map((p) => p.name);

console.log(getAdultPeopleNames(people));