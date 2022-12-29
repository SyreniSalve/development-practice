const fn = (obj, field, value) => {
    const updateObject = {...obj, [field]: value };
    return updateObject;
}

console.log(fn({name: 'Rutenis', surname: 'Turcinas', age:33}, 'surname', 'lecturer'));

