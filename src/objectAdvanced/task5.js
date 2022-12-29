const person = {
    name: 'John',
    surname: 'Doe',
    age: 2,
    birthDate: new Date('2020-12-28')
};

const fn = (person) => {
    const fullName = `${person.name} ${person.surname}`;
    const nickname = `${person.surname}${person.age}`;
    person = {...person, fullName: fullName, nickname: nickname};
    delete person.name, delete person.surname, delete person.age;
    return person;
};

console.log(fn(person));