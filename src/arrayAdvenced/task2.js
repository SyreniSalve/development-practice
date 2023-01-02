const objectArr = [{id: 4, name: 'Lecturer'}, 
{id: 3, title: 'devMenor'},
{id: 5}];

const numberArr = [1, 7, 3, 2, 10, 4];

const removeObj = (arr, id) => {
    const findObj = arr.findIndex((o) => o.id === id);
    if(findObj > -1) arr.splice(findObj, 1);
}; 

const removeObjById = (objArr, numArr) => {
    numArr.forEach(num => {
        removeObj(objArr, num)
    });
    return objArr;
};

console.log(removeObjById(objectArr, numberArr));