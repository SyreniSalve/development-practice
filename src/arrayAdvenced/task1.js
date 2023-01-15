const arr = [{id: 4, name: 'Lecturer'}, 
{id: 3, title: 'devMenor'},
{id: 5}];

const obj1 = {id: 3};
const obj2 = {id: 6, job: 'developer'};

const idNotFound = (objArr, inputObj) => {
    const findId = objArr.find((arr) => arr.id === inputObj.id);
    return !Boolean(findId);
};

const fn = (objArr, inputObj) => {
    if(idNotFound(objArr, inputObj)) {
        const updatedArr = [...objArr];
        updatedArr.push(inputObj);
        console.log(updatedArr);
    } else {
        const updatedArr = objArr.map((obj) => {
            if (inputObj.id === obj.id) obj = {...inputObj};
            return obj;
        });
        console.log(updatedArr);
    };
};

fn(arr, obj1)
fn(arr, obj2);
