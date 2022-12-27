const complexObject = {};

complexObject.person = {
    name: 'John',
    email: 'john.doe@email.com',
    birthDate: new Date('2022-12-27')
};

complexObject['academy'] = {
    title: 'SDAcademy',
    numberOfStudents: 130
};

const informationAboutPerson = (complexObject) => `${complexObject.person.name} - ${complexObject.academy.title}`;
console.log(informationAboutPerson(complexObject));