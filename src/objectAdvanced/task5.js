const person = {
    name: 'John',
    surname: 'Doe',
    age: 2,
    birthDate: new Date('2020-12-28')
};

const fn = (person) => {
    const fullName = `${person.name} ${person.surname}`;
    const nickname = `${person.surname}${person.age}`;
    const updatedPerson = {...person, fullName: fullName, nickname: nickname};
    delete updatedPerson.name, delete updatedPerson.surname, delete updatedPerson.age;
    return updatedPerson;
};

console.log(fn(person));