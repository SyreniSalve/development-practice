const human = {
    firsName: 'John',
    lastName: 'Smith',
    age: 26,
    isDeveloper: true
};

const printHuman = (h) => h.isDeveloper ? `${h.firsName} ${h.lastName} (${h.age}) is a developer`: 
`${h.firsName} ${h.lastName} (${h.age}) is not a developer`;

console.log(printHuman(human));