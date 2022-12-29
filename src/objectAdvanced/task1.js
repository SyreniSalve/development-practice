const obj = {
    name: 'Rutenis',
    surname: 'Turcinas',
    age: 33
};

const objInformation = (obj) => {
    const {name, surname} = obj;
    console.log(`field title: name, value: ${name}\nfield title: surname, value: ${surname}`);
}

const allfieldsKeys = (obj) => {
    for(let o in obj) {
        console.log(o);
    }
}

objInformation(obj);
allfieldsKeys(obj);