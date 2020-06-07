'use strict';

// ------------------ first task------------------------
let currentPerson = {
    name: 'Alfred',
    lastName: 'Thaddeus Crane',
    middleName: 'Pennyworth',
    work: {
        speciality: 'Butler',
        workExpirience: 25
    }
};
console.log(currentPerson);

// ------------------ second task------------------------
currentPerson.age = 74;
currentPerson.height = 183;
currentPerson.weight = 77;
console.log(currentPerson);

// ------------------ third task------------------------
currentPerson.greeting = function () {
    console.log(`Hello, master Bruse. It's me - ${this.name} ${this.lastName} ${this.middleName}`);
};
currentPerson.greeting();

currentPerson.warning = function (warnText) {
    if (warnText === null || warnText === '') {
        warnText = '...oh. Never mind'
    };
    console.log(`Master Bruse. Warn you that ${warnText}`);
};
currentPerson.warning(prompt('Enter warn text'));

// ------------------ fourth task------------------------
let showAll = (obj) => {
    console.log('');
    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] != null) {
            for (let jkey in obj[key]) {
                console.log(`${jkey} : ${obj[key][jkey]}`);
            };
        } else {
            console.log(`${key} : ${obj[key]}`);
        };
    };
    console.log('');
};
showAll(currentPerson);

// ------------------ fifth task------------------------
let objAnalyze = (obj) => {
    let complicated = false,
        retValue = false;
    for (let key in obj) {
        (typeof obj[key] === 'object' && obj[key] != null) ? complicated = true : complicated = false;
        retValue = retValue || complicated;
    };
    return retValue;
};
console.log(`Object is complicated: ${objAnalyze(currentPerson)}`);