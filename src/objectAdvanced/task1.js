const obj = {
    name: 'Rutenis',
    surname: 'Turcinas',
    age: 33
};

const objInformation = (obj) => {
    for(let key in obj) {
        console.log(`field title: ${key}, value: ${obj[key]}`);
    };
}

const allfieldsKeys = (obj) => {
    for(let o in obj) {
        console.log(o);
    }
}

objInformation(obj);
allfieldsKeys(obj);