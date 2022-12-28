const fn = (obj, field, value) => {
    const updateObject = {...obj, field: value };
    updateObject[`${field}`] = updateObject['field'];
    delete updateObject['field'];
    return updateObject;
}

console.log(fn({name: 'Rutenis', surname: 'Turcinas', age:33}, 'surname', 'lecturer'));

