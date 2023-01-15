const people = [
    {name: 'Tomas', age: 15},
    {name: 'Erika', age: 22},
    {name: 'Tomas', age: 17},
    {name: 'Audrius', age: 34},
    {name: 'Erika', age: 42},
    {name: 'Tomas', age: 19},
];

const namesArr = (arr) => arr.map((a) => a.name);

const getPeopleNamesCount = (arr) => {
    const allNamesArr = arr.map((a) => a.name);
    return allNamesArr.reduce((n, count) => (n[count] = n[count] + 1 || 1, n), {});
};

console.log(getPeopleNamesCount(people));