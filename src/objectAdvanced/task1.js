const obj = {
    name: 'Rutenis',
    surname: 'Turcinas',
    age: 33,
    pet : {
        type: 'cat',
        name: 'Tom',
        age: 3
    }
};

const objInformation = (obj) => {
    for(let key in obj) {
        if (typeof obj[key] === 'object') {
            console.log(`field title: ${key}: `);
            for(let newKey in obj[key]) {
                console.log(`field title: ${newKey}, value: ${obj[key][newKey]}`); 
            }   
        } else {
            console.log(`field title: ${key}, value: ${obj[key]}`);
        }
        
    };
};

objInformation(obj);