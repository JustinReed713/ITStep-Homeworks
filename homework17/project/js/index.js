'use strict';
// --------------------------------------------------------- global variables and functions --------------------------------------------------------- //
var mainCycleStopPoint = false,
    arrayCleaner = (arr) => {  // clean array from null spaces item
        while (arr.includes('')) {
            arr.splice(arr.indexOf(''), 1);
            if (arr.includes('')) arr.splice(arr.lastIndexOf(''), 1);
        };
        return arr;
    };
// -------------------------------------------------------------------------------------------------------------------------------------------------- //
while (mainCycleStopPoint == false) {
    var chooseTaskValue = prompt(`Please enter number of script\n   1.     Array with random values;\n   2.     Filtering array;\n   3.     Function for construct array from entered values;\n   4.     Seven operations under array;\n   To exit programm choose Cancel`);
    if (chooseTaskValue == null) {
        mainCycleStopPoint == true;
        alert('Thanks for choosing us. See ya again!');
        break;
    };
    var innerCycleStopPoint = false;
    switch (chooseTaskValue) {
        case '1': // first task: randomize function that return array of selected length and fixed maximal value of each number
            innerCycleStopPoint = false;
            console.warn(`${chooseTaskValue}-st script was chosen.`);
            while (!innerCycleStopPoint) {
                let skipConfirmDialog = false;
                let enteredString = prompt(`${chooseTaskValue}-st script. \nEnter your first and second arguement separeted by dot or comma.\n      first parametr - maximal value of random number;\n      second parametr - number of random values;\nExample: 5.10`);
                if (enteredString == null || enteredString == '') {
                    skipConfirmDialog = confirm('Do you really want to cancel execution script?');
                };
                if (!skipConfirmDialog) {
                    let unrandomArray = (arr) => {
                        let resultArray = [];
                        console.log(`Arguements for an array:\n    array length - ${arr[1]};\n    max value - ${arr[0]}`);
                        while (resultArray.length != +arr[1]) {
                            
                            //------------------------- old code ------------------------------//
                            //resultArray.push(Math.round((Math.random() * (+arr[0])) + 0.5));

                            //------------------------- new code ------------------------------//
                            resultArray.push(Math.floor(Math.random() * (+arr[0] + 1)));
                        };
                        return resultArray;
                    };
                    let argArray = arrayCleaner(enteredString.split(/\D/));
                    if (argArray.length < 2) {
                        alert('Warning! You enter less then two arguements');
                        console.error('Warning! You enter less then two arguements');
                        continue;
                    }
                    console.log(unrandomArray(argArray).join(', '));
                } else {
                    console.error(`${chooseTaskValue}-st was cancelled`);
                };
                if (!confirm('Do you want to try again?')) innerCycleStopPoint = true;
            };
            console.warn(`${chooseTaskValue}-st script was ended.`);
            break;

        case '2': // second task: function that delete words that includes in first string
            innerCycleStopPoint = false;
            console.warn(`${chooseTaskValue}-nd script was chosen.`);
            while (!innerCycleStopPoint) {
                let skipConfirmDialog = false,
                    breakConfirmDialog = false;
                let enteredString = prompt(`${chooseTaskValue}-nd script. \nEnter your string array in the field below, separated every item of array by space, dot or comma.`);
                if (enteredString == null || enteredString == '') {
                    skipConfirmDialog = confirm('Do you really want to cancel execution script?');
                };
                if (!skipConfirmDialog) {
                    let enteredFilter;
                    while (breakConfirmDialog === false && enteredFilter != true) {
                        enteredFilter = prompt(`Enter your string array of bann words in the field below, separated every item of array by space, dot or comma.`);
                        if (enteredFilter == null || enteredFilter == '') {
                            breakConfirmDialog = confirm('Do you really want to cancel execution script?');
                        } else {
                            break;
                        };
                    };
                    if (!breakConfirmDialog) {
                        let strArray = arrayCleaner(enteredString.split(/\W/)),
                            strFilter = arrayCleaner(enteredFilter.split(/\W/)),
                            compareFilter = (arr, filter) => {
                                for (let index = 0; index < filter.length; index++) {
                                    arr = arr.filter(item => item.toLowerCase() != filter[index].toLowerCase());
                                };
                                return arr;
                            };
                        console.log(`Entered array: [ ${strArray.join(', ')} ] ,\n \nentered filter: [ ${strFilter.join(', ')} ]`);
                        console.log(`Result of filtering: [ ${compareFilter(strArray, strFilter).join(', ')} ]`);
                    };
                };
                if (skipConfirmDialog === true || breakConfirmDialog === true) console.error(`${chooseTaskValue}-nd was cancelled`);
                if (!confirm('Do you want to try again?')) innerCycleStopPoint = true;
            };
            console.warn(`${chooseTaskValue}-nd script was ended.`);
            break;

        case '3': //third task: function of constructing array of entered values
            innerCycleStopPoint = false;
            console.warn(`${chooseTaskValue}-nd script was chosen.`);
            while (!innerCycleStopPoint) {
                let testString = [
                    '{name: john, age: 42, mariage: true, work: {specialisation: FE-dev, expirience: 4}, pets: [turtl, {type: cat, age: 8, lifesLeft: [1, 2, 3, 4, 5, 6, 7], color: black}, {type: lizard, name: King, prefer: Likes to do everything}], car: {mark: tesla, model: model S, color: black}, hobby: [not drink tequila, jojo reference]}',
                    '[1, 3, 5, 7, 11, 13, 17, 19, 23]',
                    '{name: BoJack, surname: Horseman, profession: acthor, filmographic: [Horsin around, BoJack HorseMan show]}',
                    'null',
                    'undefined',
                    '[{firstPhrase: Omae wa mou, secondPhrase: mou SHINDEIRU}, {phrase: NANI?!}]'
                ];
                let includeCheck = (str, startPosition = 1) => (str.includes('{', startPosition) == true || str.includes('[', startPosition) == true) ? true : false;
                let startCheck = (str) => (str[0] === '[' || str[0] === '{') ? true : false;
                let cleanArrayConvertor = (str) => {

                    // ------------------------- old code ------------------------ //
                    //let itemArr = str.split(/\,\s+/);

                    //-------------------------- new code ------------------------ //
                    let itemArr = str.split(/\,\s+|\,/);
                    if (!str.includes(':')) {
                        for (let index = 0; index < itemArr.length; index++) {
                            itemArr[index] = primitiveConvertor(itemArr[index]);
                        };
                    };
                    return itemArr;
                };
                let cleanObjectConvertor = (str) => {
                    let retObj = {},
                        propertiesArr = cleanArrayConvertor(str);
                    for (let index = 0; index < propertiesArr.length; index++) {
                        let arguementList = propertiesArr[index].split(/\:\s+/);
                        retObj[arguementList[0]] = primitiveConvertor(arguementList[1]);
                    };
                    return retObj;
                };
                let primitiveConvertor = (str) => {
                    switch (str) { // reserved words
                        case 'null':
                            return null;
                        case 'undefined':
                            return undefined;
                        case '':
                            return undefined;
                        case 'true':
                            return true;
                        case 'false':
                            return false;
                        default:
                            return (isNaN(+str)) ? str : +str; // string or numeral
                    };
                };
                let regExpCall = (border) => {
                    switch (border) {
                        case ']':
                            return /\]/g;
                        case '}':
                            return /\}/g;
                        case '[':
                            return /\[/g;
                        case '{':
                            return /\{/g;
                    };
                };
                let borderCountOf = (str, itemBorder, index, prevPos, lastPos) => {
                    let sumOpBord = Array.from(str.slice(str.indexOf(itemBorder[index][0], prevPos), str.indexOf(itemBorder[index][1], lastPos) + 1).matchAll(regExpCall(itemBorder[index][0]))).length,
                        sumClBord = Array.from(str.slice(str.indexOf(itemBorder[index][0], prevPos), str.indexOf(itemBorder[index][1], lastPos) + 1).matchAll(regExpCall(itemBorder[index][1]))).length;
                    return (sumOpBord === sumClBord) ? true : false;
                };
                let includingCheck = (str, itemBorder, index, lastPos) => {
                    let sumOpSq = Array.from(str.slice(0, str.indexOf(itemBorder[index][0], lastPos)).matchAll(/[\[]/g)).length,
                        sumClSq = Array.from(str.slice(0, str.indexOf(itemBorder[index][0], lastPos)).matchAll(/[\]]/g)).length,
                        sumOpCr = Array.from(str.slice(0, str.indexOf(itemBorder[index][0], lastPos)).matchAll(/[\{]/g)).length,
                        sumClCr = Array.from(str.slice(0, str.indexOf(itemBorder[index][0], lastPos)).matchAll(/[\}]/g)).length;
                    return (sumOpSq === sumClSq && sumOpCr === sumClCr) ? true : false;
                };
                let borderArraySearcher = (str) => {
                    let itemBorder = [['[', ']'], ['{', '}']],
                        borderPosition = [];
                    for (let index = 0; index < itemBorder.length; index++) {
                        let lastPosition = 0,
                            prevPosition = 0;
                        while (str.includes(itemBorder[index][0], lastPosition)) {
                            if (includingCheck(str, itemBorder, index, lastPosition)) {
                                var startOf = str.indexOf(itemBorder[index][0], lastPosition);
                                do {
                                    lastPosition = str.indexOf(itemBorder[index][1], lastPosition + 1);
                                } while (!borderCountOf(str, itemBorder, index, prevPosition, lastPosition));
                                if (lastPosition > startOf) {
                                    borderPosition.push([startOf, lastPosition]);
                                    prevPosition = lastPosition;
                                };
                            } else {
                                lastPosition = str.indexOf(itemBorder[index][0], lastPosition) + 1;
                            };
                        };
                    };
                    return borderPosition.sort((a, b) => { return a[0] - b[0] });
                };
                let stringSlicer = (str) => {
                    let propertiesArr = [],
                        borderArr = borderArraySearcher(str);
                    if (borderArr[0][0] != 0) propertiesArr.push(str.slice(0, str.lastIndexOf(',', borderArr[0][0])));
                    for (let index = 0; index < borderArr.length; index++) {
                        propertiesArr.push(str.slice(str.lastIndexOf(' ', Math.ceil((str.lastIndexOf(',', borderArr[index][0]) + borderArr[index][0]) / 2)) + 1, borderArr[index][1] + 1));
                        if (index < borderArr.length - 1) {
                            if (/\w/.test(str.slice(borderArr[index][1] + 1, str.lastIndexOf(' ', Math.ceil((str.lastIndexOf(',', borderArr[index + 1][0]) + borderArr[index + 1][0]) / 2)) + 1)) == true) {
                                propertiesArr.push(str.slice(str.lastIndexOf(',', borderArr[index][1]), str.lastIndexOf(' ', Math.ceil((str.lastIndexOf(',', borderArr[index + 1][0]) + borderArr[index + 1][0]) / 2)) + 1));
                            };
                        };
                    };
                    if (borderArr[borderArr.length - 1][1] != str.length - 1) propertiesArr.push(str.slice(str.indexOf(' ', borderArr[borderArr.length - 1][1]) + 1));
                    return propertiesArr;
                };
                let rowItemConvertor = (str) => {
                    let arguementList = stringSlicer(str);
                    let isObjectType = false;
                    for (let index = 0; index < arguementList.length; index++) {
                        if (!includeCheck(arguementList[index], 0)) isObjectType = isObjectType || (arguementList[index].includes(':')) ? true : false;
                    };
                    let returnItem = (isObjectType) ? {} : [];
                    for (let index = 0; index < arguementList.length; index++) {
                        if (isObjectType) { // object
                            if (includeCheck(arguementList[index], 0)) {
                                let arguementOfObject = arguementList[index].split(/\:\s+(?=[\[\{])/);
                                returnItem[arguementOfObject[0]] = whoIsThatPokemon(arguementList[index].slice(arguementList[index].indexOf(arguementOfObject[1])));
                            } else {
                                Object.assign(returnItem, { ...whoIsThatPokemon(arguementList[index]) });
                            };
                        } else { // array
                            returnItem.push(whoIsThatPokemon(arguementList[index]));
                        };
                    };
                    return returnItem;
                };
                let whoIsThatPokemon = (str) => { // function for recognising item with pokemon reference
                    if (startCheck(str)) str = str.slice(1, str.length - 1);
                    if (str.includes(',') == true || str.includes(':') == true) { // item is complicated
                        if (includeCheck(str)) { // complicated item with included objects/arrays
                            return rowItemConvertor(str);
                        } else {
                            return (str.includes(':')) ? cleanObjectConvertor(str) : cleanArrayConvertor(str);
                        };
                    } else { // item is primitive
                        return primitiveConvertor(str);
                    };
                };

                let enterStopDialog = false,
                    testingCheats = false,
                    finalArr = [];

                while (!enterStopDialog) {
                    let enteredString = prompt(`${chooseTaskValue}-nd script. \n      Enter element in form below. \n      Choose CANCEL for stop entering.\n   P.S. If you dont want invent a values for array enter "Test" in field below.`);
                    if (enteredString === null) {
                        enterStopDialog = confirm('Do you really want to stop enter?');
                        continue;
                    };
                    if (enteredString.toLowerCase() === 'test') {
                        testingCheats = confirm('You entered reserved word "Test".\n      For Test function press OK.\n      For using as a usual word press CANCEL.');
                        if (testingCheats) break;
                    };
                    if (enterStopDialog === false && innerCycleStopPoint === false) {
                        finalArr.push(whoIsThatPokemon(enteredString));
                        console.log(finalArr);
                    };
                };
                if (testingCheats) {
                    console.error('Chosed Test function');
                    let startTime = Date.now();
                    for (let index = 0; index < testString.length; index++) finalArr.push(whoIsThatPokemon(testString[index]));
                    console.log(finalArr);
                    let finishTime = Date.now();
                    console.warn(`Execution script take ${finishTime - startTime}ms.`)
                };
                if (innerCycleStopPoint) console.error(`${chooseTaskValue}-nd was cancelled`);
                if (!confirm('Do you want to try again?')) innerCycleStopPoint = true;
            };
            console.warn(`${chooseTaskValue}-nd script was ended.`);
            break;



        case '4': // fourth task: seven operations under array
            innerCycleStopPoint = false;
            console.warn(`${chooseTaskValue}-th script was chosen.`);
            const arrayOfPersons = [
                {
                    name: 'Ferdinant',
                    surname: 'Foch',
                    age: 54,
                    nationality: 'French',
                    skill: 'Military management',
                    zodiacSign: undefined,
                    height: 173,
                    isAlive: false
                },
                {
                    name: 'Jackson',
                    surname: 'Bricks',
                    age: 20,
                    nationality: 'USA',
                    skill: 'farmer',
                    height: 187,
                    specialTrait: 'mechanical arms',
                    isFictionalCharacter: true
                },
                {
                    name: 'Hideo',
                    surname: 'Kozima',
                    age: 56,
                    nationality: 'USA',
                    skill: 'game developer',
                    height: 173,
                    specialTrait: 'genius',
                    actualGames: ['Death Stranding', 'Metal Gear'],
                    isAlive: true,
                },
                {
                    name: 'Kim',
                    surname: 'Kardashian',
                    age: 39,
                    nationality: 'USA',
                    skill: 'model',
                    height: 159,
                    zodiacSign: 'scorpio'
                },
                {
                    name: 'Mia',
                    surname: 'Khalifa',
                    age: 27,
                    nationality: 'Lebanon',
                    skill: 'actress',
                    height: 157,
                    zodiacSign: 'saggitarius',
                    specialTrait: 'very exspressionable',
                    isAlive: true,
                    isFictionalCharacter: false
                },
                {
                    name: 'Herman',
                    surname: 'Hesse',
                    age: 85,
                    nationality: 'Germany',
                    skill: 'writer',
                    zodiacSign: undefined,
                    isAlive: false,
                    isFictionalCharacter: false,
                    bibliography: ['Der Steppen Wolf', 'Das Glasperlenspiel',]
                },
                {
                    name: 'Fedor',
                    surname: 'Dostoevsky',
                    age: 60,
                    nationality: 'Russia',
                    skill: 'writer',
                    isAlive: false,
                    isFictionalCharacter: false,
                    bibliography: ['The demons', 'The Crime and Punishment', 'The Idiot']
                },
                {
                    name: 'Doomguy',
                    surname: undefined,
                    age: undefined,
                    nationality: undefined,
                    skill: 'demon slayer',
                    zodiacSign: undefined,
                    isFictionalCharacter: true,
                    specialTrait: 'Angry a bit',
                },
                {
                    name: 'Sonic',
                    surname: 'The Hedgehog',
                    age: 13,
                    nationality: undefined,
                    zodiacSign: undefined,
                    isFictionalCharacter: true,
                    specialTrait: 'Fast as f#@k',
                },
                {
                    name: 'Bruce',
                    surname: 'Wayne',
                    age: 12,
                    isFictionalCharacter: true
                },
                {
                    name: 'Ella',
                    surname: 'Fitzgerald',
                    age: 79,
                    isFrictionalCharacter: false,
                    isAlive: false,
                    specialTrait: 'Amazing voice',
                    signatureSongs: ['Cry Me a river', 'Hello Dolly', 'Summertime', 'In a sentimental mood']
                }
            ];
            let sortCallback = (itemFirst, itemSecond) => {
                if (itemFirst[keyName] > itemSecond[keyName]) { return 1; };
                if (itemFirst[keyName] < itemSecond[keyName]) { return -1; };
                if (itemFirst[keyName] === itemSecond[keyName]) { return 0; };
            };
            let consoleIntro = (taskNumber) => `Result for ${taskNumber} task: `;

            // ------------------------------------------------ first task ---------------------------------------------------

            console.log('1 task: Shows array that contain objects includes "name", "surname" and "age" properties, sorted by "surname" in alphabet.');
            let propChecker = (obj, prop) => {
                return (obj.hasOwnProperty(prop)) ? ((obj[prop] === undefined) ? (null) : obj[prop]) : null
            };
            let keyName = 'surname'
            console.log(consoleIntro(1), arrayOfPersons.map(item => Object.assign({}, { name: propChecker(item, 'name'), surname: propChecker(item, 'surname'), age: propChecker(item, 'age') })).sort(sortCallback), `\n `);

            // ----------------------------------------------- second task ---------------------------------------------------

            console.log('2 task: Shows array with objects includes eight and more properties, descending sorted.');
            console.log(consoleIntro(2), arrayOfPersons.filter(item => Object.keys(item).length >= 8).sort((itemFirst, itemSecond) => Object.keys(itemSecond).length - Object.keys(itemFirst).length), `\n `);

            // ---------------------------------------------- third task ----------------------------------------------------

            console.log('3 task: Shows array with objects ascending sorted by "age".');
            keyName = 'age'
            console.log(consoleIntro(3), arrayOfPersons.filter(item => item).sort(sortCallback), `\n `);

            // ----------------------------------------------- fourth task ---------------------------------------------------

            console.log('4 task: Shows array with objects that includes property "zodiacSign".');
            console.log(consoleIntro(4), arrayOfPersons.filter(item => item.hasOwnProperty('zodiacSign') == true), `\n `);

            // ------------------------------------------------ fifth task ---------------------------------------------------

            console.log('5 task: Shows sorted array with objects that includes object-value or array-value of any property.');
            let searcher = (object) => {
                for (let key in object) {

                    // ----------------------------------------- old code --------------------------------
                    //if (typeof object[key] === 'object') {

                    // ---------------------------------------------- new code ------------------------------
                    if (object[key] != null && typeof object[key] === 'object') {
                        return true;
                    };
                };
                return false;
            };
            console.log(consoleIntro(5), arrayOfPersons.sort(item => (searcher(item)) ? -1 : 1), `\n `);

            // ---------------------------------------------- six task -----------------------------------------------------

            console.log('6 task: Shows array with objects, and add to each object property "id" and random three-digit value.');
            let codeGenerate = () => { // шестое условие
                let code = 0;
                for (let index = 0; index <= 2; index++) {
                    let nmbr = Math.floor((Math.random()) * 10);
                    code = (code * 10) + nmbr;
                };
                return code;
            };
            console.log(consoleIntro(6), arrayOfPersons.map(item => Object.assign(item, { id: codeGenerate() })), `\n `);

            // ------------------------------------------------ seventh task ------------------------------------------------

            console.log('7 task: Shows array with objects of fiction character and add to each object property "fictionalUniverse" with value "null".');
            console.log(consoleIntro(7), arrayOfPersons.filter(item => (item.hasOwnProperty('isFictionalCharacter')) ? ((item.isFictionalCharacter) ? true : false) : false).map(item => Object.assign(item, { fictionalUniverse: null })), `\n `);
            console.warn(`${chooseTaskValue}-nd script was ended.`);
            break;

        default:
            alert('You didn`t choose a script. So sad :( ');
            break;
    };
};