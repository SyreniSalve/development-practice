const arr = [{id: 4, name: 'Lecturer'}, 
{id: 3, title: 'devMenor'},
{id: 5}];

const obj1 = {id: 3};
const obj2 = {id: 6, job: 'developer'};

const idNotFound = (objArr, inputObj) => {
    const findId = objArr.find((arr) => {
        return arr.id === inputObj.id;
    });

    if(findId === undefined) return true;
};

const fn = (objArr, inputObj) => {
    if(idNotFound(objArr, inputObj)) {
        updatedArr = objArr;
        updatedArr.push(inputObj);
    } else {
        updatedArr = objArr.map((obj) => {
            if (inputObj.id === obj.id) obj = {...inputObj};
            return obj;
        });
    };

    console.log(updatedArr);
};

fn(arr, obj1)
fn(arr, obj2);
