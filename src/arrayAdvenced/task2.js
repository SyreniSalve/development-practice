const objectArr = [{id: 4, name: 'Lecturer'}, 
{id: 3, title: 'devMenor'},
{id: 5}];

const numberArr = [1, 7, 3, 2, 10, 4];

const removeObjById = (objArr, numArr) => objArr.filter(({ id }) => !numArr.includes(id))

console.log(removeObjById(objectArr, numberArr));