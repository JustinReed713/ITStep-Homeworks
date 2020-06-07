'use strict';

// ---------------------- third script variables for drafting last cancelled message --------------------------
let draftMessage = {
    receiverEmail: '',
    sendingMessage: '',
    senderName: ''
};
// ------------------------------------------------------------------------------------------------------------
let mainCycleStopPoint = false;
while (mainCycleStopPoint == false) {  // main cycle for choosing one of the scripts
    let chooseTaskValue = prompt('Please, choose the script you want to execute, and enter its number below: 1. summing depending on string or numeric value; 2. alphabet sorter; 3. sign to the message; 4. exponentiation; To exit programm choose Cancel');
    if (chooseTaskValue == null) {  // exit from menu and terminate main cycle
        mainCycleStopPoint == true;
        alert('See ya again!');
        break;
    };
    let innerCycleStopPoint = false;
    switch (chooseTaskValue) {
        case '1':  // summing depending on string or numeric value
            innerCycleStopPoint = false;
            // ------------------------------- function to convert digital to an alphabet form ----------------------------------------
            let numIntoAlphabetConvertor = (enteredNumber) => {
                let analizeOfThree = (number, index, oneHundredAboveCheck) => { // function translation thousandth separator from a digital to an alphabet
                    let numberInString,
                        unitsOfNumberInString = '',
                        tensOfNumberInString = '',
                        additionalUniteWord = '',
                        hundredsOfNumberInString = '',
                        isAboveOneHundred;
                    if ((number == 0) && (oneHundredAboveCheck == false)) { // if thousand separate equal zero 
                        unitsOfNumberInString = 'zero';
                    } else {
                        let hundredsOfNumber = Math.floor(number / 100), // getting hundreds part of separate
                            dozensOfNumber = number % 100; // getting dozens of separate
                        (number > 99) ? isAboveOneHundred = true : isAboveOneHundred = false; // check for separate is above one hundred
                        if (isAboveOneHundred == true) { // if thousand separate above one hundred
                            switch (hundredsOfNumber) { // compare hundreds part of number
                                case 1:
                                    hundredsOfNumberInString = 'one';
                                    break;
                                case 2:
                                    hundredsOfNumberInString = 'two';
                                    break;
                                case 3:
                                    hundredsOfNumberInString = 'three';
                                    break;
                                case 4:
                                    hundredsOfNumberInString = 'four';
                                    break;
                                case 5:
                                    hundredsOfNumberInString = 'five';
                                    break;
                                case 6:
                                    hundredsOfNumberInString = 'six';
                                    break;
                                case 7:
                                    hundredsOfNumberInString = 'seven';
                                    break;
                                case 8:
                                    hundredsOfNumberInString = 'eight';
                                    break;
                                case 9:
                                    hundredsOfNumberInString = 'nine';
                                    break;
                            };
                            hundredsOfNumberInString = `${hundredsOfNumberInString} hundred`; // output alphabet form of hundreds part
                        };
                        switch (dozensOfNumber) { // compare dozens of separate
                            case 0:
                                tensOfNumberInString = '';
                                break;
                            case 10:
                                tensOfNumberInString = 'ten';
                                break;
                            case 11:
                                tensOfNumberInString = 'eleven';
                                break;
                            case 12:
                                tensOfNumberInString = 'twelve';
                                break;
                            default:
                                let intermediateResultOfAnalize = dozensOfNumber,
                                    previousFractionalPartOfResultAnalize,
                                    iterationCount = 0,
                                    partOfNumberInString;
                                while (intermediateResultOfAnalize != 0) { // loop until integerPartOfResultAnalize equal 0
                                    let integerPartOfResultAnalize = Math.floor(intermediateResultOfAnalize / 10),
                                        fractionalPartOfResultAnalize = intermediateResultOfAnalize % 10;
                                    switch (fractionalPartOfResultAnalize) { // compare with fractional part
                                        case 0:
                                            partOfNumberInString = '';
                                            break;
                                        case 1:
                                            if ((integerPartOfResultAnalize > 1) || (iterationCount == 0)) {
                                                partOfNumberInString = 'one';
                                            } else {
                                                partOfNumberInString = '';
                                            }
                                            break;
                                        case 2:
                                            if ((integerPartOfResultAnalize > 1) && (iterationCount == 0)) {
                                                partOfNumberInString = 'two';
                                            } else {
                                                partOfNumberInString = 'twen';
                                            }
                                            break;
                                        case 3:
                                            if ((integerPartOfResultAnalize > 1) && (iterationCount == 0)) {
                                                partOfNumberInString = 'three';
                                            } else {
                                                partOfNumberInString = 'thir';
                                            }
                                            break;
                                        case 4:
                                            if ((integerPartOfResultAnalize >= 1) && (iterationCount == 0)) {
                                                partOfNumberInString = 'four';
                                            } else {
                                                partOfNumberInString = 'for';
                                            }
                                            break;
                                        case 5:
                                            if ((integerPartOfResultAnalize > 1) && (iterationCount == 0)) {
                                                partOfNumberInString = 'five';
                                            } else {
                                                partOfNumberInString = 'fif';
                                            }
                                            break;
                                        case 6:
                                            partOfNumberInString = 'six';
                                            break;
                                        case 7:
                                            partOfNumberInString = 'seven';
                                            break;
                                        case 8:
                                            if ((integerPartOfResultAnalize > 1) && (iterationCount == 0)) {
                                                partOfNumberInString = 'eight';
                                            } else {
                                                partOfNumberInString = 'eigh';
                                            }
                                            break;
                                        case 9:
                                            partOfNumberInString = 'nine';
                                            break;
                                    };
                                    intermediateResultOfAnalize = integerPartOfResultAnalize;
                                    switch (iterationCount) { // changing ending of the word in accordance to conditions
                                        case 0:
                                            if (integerPartOfResultAnalize == 1) {
                                                unitsOfNumberInString = `${partOfNumberInString}teen`;
                                            } else {
                                                unitsOfNumberInString = partOfNumberInString;
                                            };
                                            break;
                                        case 1:
                                            if (dozensOfNumber > 19) {
                                                tensOfNumberInString = `${partOfNumberInString}ty`;
                                            };
                                            if ((fractionalPartOfResultAnalize > 1) && (previousFractionalPartOfResultAnalize >= 1)) {
                                                tensOfNumberInString = tensOfNumberInString + '-';
                                            };
                                            break;
                                    };
                                    previousFractionalPartOfResultAnalize = fractionalPartOfResultAnalize;
                                    iterationCount++;
                                };
                                break;
                        };
                    };
                    if ((index == 0) && (oneHundredAboveCheck == true) && (number == 0)) { // 'and' before dozensOfNumber
                        additionalUniteWord = '';
                    } else if ((index == 0) && (oneHundredAboveCheck == true)) {
                        additionalUniteWord = 'and ';
                    } else {
                        additionalUniteWord = '';
                    };
                    numberInString = `${hundredsOfNumberInString} ${additionalUniteWord}${tensOfNumberInString}${unitsOfNumberInString}`; // attach all parts in one
                    return numberInString; // output result
                };
                //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                let integerPartOfNumber,
                    fractionalPartOfNumber,
                    index = 0,
                    intermediateResult,
                    alertOutputEnteredString = '',
                    numberConvertedInString = '',
                    isEnteredNumberAboveOneHundred;
                intermediateResult = Math.abs(enteredNumber);
                do {
                    integerPartOfNumber = Math.floor(intermediateResult / 1000); // getting integer part of thousands separating
                    fractionalPartOfNumber = intermediateResult % 1000; // getting fractional part of thosands separating
                    (Math.abs(enteredNumber) > 99) ? isEnteredNumberAboveOneHundred = true : isEnteredNumberAboveOneHundred = false; // check is entered number above one hundred
                    alertOutputEnteredString = analizeOfThree(fractionalPartOfNumber, index, isEnteredNumberAboveOneHundred);
                    intermediateResult = integerPartOfNumber;
                    switch (index) {
                        case 0: // hundreds
                            break;
                        case 1: // thousands
                            if (fractionalPartOfNumber != 0) {
                                alertOutputEnteredString = `${alertOutputEnteredString} thousand `;
                            } else {
                                alertOutputEnteredString = '';
                            };
                            break;
                        case 2: // million
                            if (fractionalPartOfNumber != 0) {
                                alertOutputEnteredString = `${alertOutputEnteredString} million `;
                            } else {
                                alertOutputEnteredString = '';
                            };
                            break;
                        case 3: // million
                            if (fractionalPartOfNumber != 0) {
                                alertOutputEnteredString = `${alertOutputEnteredString} billion `;
                            } else {
                                alertOutputEnteredString = '';
                            };
                            break;
                        case 4: // billion
                            if (fractionalPartOfNumber != 0) {
                                alertOutputEnteredString = `${alertOutputEnteredString} thousand's `;
                            } else {
                                alertOutputEnteredString = '';
                            };
                            break;
                        case 5: // thousand billion
                            if (fractionalPartOfNumber != 0) {
                                alertOutputEnteredString = `${alertOutputEnteredString} thousand's `;
                            } else {
                                alertOutputEnteredString = '';
                            };
                            break;
                    };
                    numberConvertedInString = alertOutputEnteredString + numberConvertedInString;
                    index++;
                } while (intermediateResult != 0);
                if (enteredNumber < 0) {
                    numberConvertedInString = `minus ${numberConvertedInString}`;
                };
                return numberConvertedInString;
            };
            //-------------------------------------- function for summing with additional conditions ------------------------------------------------------------
            let sumMaster = (valuesArray) => {
                let arrayLength = valuesArray.length,
                    isString = false,
                    isNumber = false,
                    camelCaseEnable = false,
                    spaceSeparateEnable = false,
                    numberAsStringEnabled = false,
                    tranlateArray = [],
                    summedString = '';
                for (let index = 0; index < arrayLength; index++) { // analyse what kind of variables was entered
                    if (isNaN(+valuesArray[index])) {
                        isString = true;
                        tranlateArray[index] = valuesArray[index];
                    } else {
                        tranlateArray[index] = +valuesArray[index];
                    };
                    if (!isNaN(+valuesArray[index])) {
                        isNumber = true;
                    };
                };
                if (isString && !isNumber && valuesArray.length > 1) { // choosing an additional conditions
                    camelCaseEnable = confirm('You entered a string values. Do you want to use "camelCase" type? If you choose CANCEL final string would be "as enter".');
                    summedString = '';
                };
                if (isNumber && !isString) {
                    numberAsStringEnabled = confirm('You entered a numeral values. Do you want to show values as a "string" value? If you choose CANCEL final string would be numeral sum.');
                    if (numberAsStringEnabled == true) {
                        summedString = '';
                    } else {
                        summedString = 0;
                    };
                };
                if (((!camelCaseEnable && isString) || (isNumber && numberAsStringEnabled)) && valuesArray.length > 1) {
                    spaceSeparateEnable = confirm('Do you want to separate by spaces? If you choose CANCEL final string would be show together.');
                };
                for (let index = 0; index < arrayLength; index++) { // output final result
                    if (isString) {
                        if (!camelCaseEnable) {
                            if (spaceSeparateEnable) {
                                summedString += `${tranlateArray[index]} `;
                            } else {
                                summedString += tranlateArray[index];
                            };
                        } else {
                            let camelValue;
                            if (index === 0 || typeof tranlateArray[index] === 'number') {
                                camelValue = tranlateArray[index];
                            } else {
                                camelValue = tranlateArray[index][0].toUpperCase() + tranlateArray[index].slice(1, tranlateArray[index].length);
                            };
                            summedString += camelValue;
                        };
                    };
                    if (isNumber && !isString) {
                        if (!numberAsStringEnabled) {
                            summedString += tranlateArray[index];
                        } else {
                            if (spaceSeparateEnable) {
                                summedString += `${tranlateArray[index]} `;
                            } else {
                                summedString += `${tranlateArray[index]}`;
                            };
                        };
                    };
                };
                if (isNumber && !numberAsStringEnabled && !isString) {
                    let translateToAlphabetEnable = confirm('Do you want to translate numeral value into alphabet?');
                    if (translateToAlphabetEnable) {
                        summedString = numIntoAlphabetConvertor(summedString);
                    };
                };
                return `Final string is ${summedString}`;
            };
            //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            console.warn('You choose first script.');
            alert('You choose first script');
            while (!innerCycleStopPoint) {
                let skipConfirmDialog = false,
                    enteredVariables = [],
                    isStopEntering = false,
                    index = 0;
                console.warn('Start entering values')

                // ---------------------------------------------- old code ---------------------------------------------------------

                /* while (!isStopEntering) { // entering values
                    let enteredValue = prompt('Enter your string');
                    if (enteredValue == null || enteredValue == '') { // if cancel button was choosed
                        if (index == 0) {
                            skipConfirmDialog = confirm('Do you want to stop script?');
                            if (skipConfirmDialog) {
                                isStopEntering = true;
                                break;
                            };
                        };
                        if (index <= 2) { // if was entered less than three variables
                            alert('You enter less than three values. Please enter next.');
                            skipConfirmDialog = confirm('Would you like to enter next value?');
                            if (!skipConfirmDialog) {
                                isStopEntering = true;
                                skipConfirmDialog = true;
                            } else {
                                skipConfirmDialog = false;
                            };
                        } else {
                            isStopEntering = confirm('Do you really want to stop entering?');
                            console.warn('Entering values is stopped');
                        };
                    } else {
                        enteredVariables[index] = enteredValue;
                        console.log(`You enter ${enteredVariables[index]}`);
                        index++;
                    };
                }; */

                // ---------------------------------------------- new code ---------------------------------------------------------


                while (!isStopEntering && index <= 2) { // entering values
                    let enteredValue = prompt('Enter your string');
                    if (enteredValue == null || enteredValue == '') { // if cancel button was choosed
                        if (index == 0) {
                            skipConfirmDialog = confirm('Do you want to stop script?');
                            if (skipConfirmDialog) {
                                isStopEntering = true;
                                break;
                            };
                        } else {
                            isStopEntering = confirm(`Do you want to stop entering on ${index + 1}-th value?`);
                        };
                    } else {
                        enteredVariables[index] = enteredValue;
                        console.log(`You enter ${enteredVariables[index]}`);
                        index++;
                    };
                };

                //-------------------------------------------------------------------------------------------------------------------

                if (!skipConfirmDialog) { // if script wasn't skipped
                    console.log(sumMaster(enteredVariables));
                    console.warn('End of first script');
                } else {
                    console.error('Script canceled');
                };
                let tryAgain = confirm('Do you want to try again?'); //confirmation modal window for exit from the script and return to main menu
                if (!tryAgain) {
                    innerCycleStopPoint = true;
                };
            };
            break;

        case '2': // alphabet sorter
            innerCycleStopPoint = false;
            //----------------------------------- function for recognition of entered language ----------------------------------------------------------
            let languageCompare = (comparingString) => {
                let enteredInLanguage,
                    languageCompareArray,
                    isCompared,
                    index;
                if (typeof +comparingString === 'number') { // recognition of numeric
                    enteredInLanguage = 'number'
                };
                if (isNaN(+comparingString)) {
                    for (index = 0; index <= 2; index++) { // option loop
                        switch (index) {
                            case 0: // check for russian
                                languageCompareArray = /[а-я]/gi;
                                enteredInLanguage = 'russian';
                                break;
                            case 1: // check for english
                                languageCompareArray = /[a-z]/gi;
                                enteredInLanguage = 'english';
                                break;
                        };
                        isCompared = languageCompareArray.test(comparingString); // comparing entered text with array
                        languageCompareArray.lastIndex = 0;
                        if (isCompared == true) {
                            break;
                        } else {
                            enteredInLanguage = 'unknown language';
                        };
                    };
                };
                return enteredInLanguage; // return result of recognition
            };
            //---------------------------------------------- function for sorting values -----------------------------------------------------
            let sorterArray = (array, type) => {
                switch (type) {
                    case 'number':
                        let compareNumeric = (a, b) => {
                            return a - b;
                        };
                        return array.sort(compareNumeric);
                    default:
                        let compareRegister = (a, b) => {
                            return a.localeCompare(b);
                        };
                        return array.sort(compareRegister);
                };
            };
            //----------------------------------------------- function for converting from array to string and separate by spaces -----------------------------------------------------
            let arrayToStringConverter = (array) => {
                let stringWithSeparate = '';
                for (let index = 0; index < array.length; index++) {
                    stringWithSeparate += `${array[index]} `;
                };
                return stringWithSeparate;
            };
            //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            console.warn('You choose second script.');
            alert('You choose second script');
            while (innerCycleStopPoint == false) { // cycle for unlimited using of script
                let skipConfirmDialog = false,
                    enteredVariables = [],
                    isStopEntering = false,
                    index = 0;
                console.warn('Start entering values');
                while (!isStopEntering) { // entering values
                    let enteredValue = prompt('Enter your string');
                    if (enteredValue == null || enteredValue == '') {
                        if (index == 0) {
                            skipConfirmDialog = confirm('Do you want to stop the script?');
                            if (skipConfirmDialog) {
                                isStopEntering = true;
                                break;
                            };
                        };
                        if (index <= 2) {
                            alert('You enter less than three values. Please enter next.');
                            skipConfirmDialog = confirm('Would you like to enter next value?');
                            if (!skipConfirmDialog) {
                                isStopEntering = true;
                                skipConfirmDialog = true;
                            } else {
                                skipConfirmDialog = false;
                            };
                        } else {
                            isStopEntering = confirm('Do you really want to stop entering?');
                            console.warn('Entering values is stopped');
                        };
                    } else {
                        enteredVariables[index] = enteredValue;
                        console.log(`You enter ${enteredVariables[index]}`);
                        index++;
                    };
                };
                if (!skipConfirmDialog) {
                    let typeOfValue,
                        numeralArray = [],
                        russianArray = [],
                        englishArray = [],
                        unknownLanguageArray = [],
                        isNumber = false,
                        isRussian = false,
                        isEnglish = false,
                        isUnknown = false;
                    for (let index = 0; index < enteredVariables.length; index++) {
                        typeOfValue = languageCompare(enteredVariables[index]);
                        switch (typeOfValue) {
                            case 'number':
                                isNumber = true;
                                numeralArray.push(enteredVariables[index]);
                                break;
                            case 'russian':
                                isRussian = true;
                                russianArray.push(enteredVariables[index]);
                                break;
                            case 'english':
                                isEnglish = true;
                                englishArray.push(enteredVariables[index]);
                                break;
                            case 'unknown language':
                                isUnknown = true;
                                unknownLanguageArray.push(enteredVariables[index]);
                                break;
                        };
                    };
                    if (isNumber) {
                        typeOfValue = 'number';
                        console.log(`Is ${typeOfValue}: ${arrayToStringConverter(sorterArray(numeralArray, typeOfValue))}`);
                    };
                    if (isRussian) {
                        typeOfValue = 'russian';
                        console.log(`Is ${typeOfValue}: ${arrayToStringConverter(sorterArray(russianArray, typeOfValue))}`);
                    };
                    if (isEnglish) {
                        typeOfValue = 'english';
                        console.log(`Is ${typeOfValue}: ${arrayToStringConverter(sorterArray(englishArray, typeOfValue))}`);
                    };
                    if (isUnknown) {
                        typeOfValue = 'unknown language';
                        console.log(`Is ${typeOfValue}: ${arrayToStringConverter(sorterArray(unknownLanguageArray, typeOfValue))}`);
                    };
                    console.warn('End of second script');
                } else {
                    console.error('Script canceled');
                };
                let tryAgain = confirm('Do you want to try again?'); // confirmation modal window for exit from the script and return to main menu
                if (tryAgain == false) {
                    innerCycleStopPoint = true;
                };
            };
            break;

        case '3':  // sign to the message
            innerCycleStopPoint = false;
            //------------------------------------- function for signing in the end of message ----------------------------------------------------
            let postScriptum = (message, name) => {
                let additionalDot,
                    isPunctuationMark = /[, , . , !, ?,",']/.test(message[message.length - 1]);
                if (isPunctuationMark) {
                    additionalDot = ''
                } else {
                    additionalDot = '.'
                };
                message = message + additionalDot + ` With kind regards, ${name}`;
                return message;
            };
            //----------------------------------------------------- function for validating entered email -----------------------------------------------------------
            let validateEmail = (email) => {
                let pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                return pattern.test(String(email).toLowerCase());
            };
            //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            console.warn('You choose third script.');
            alert('You choose third script');
            while (innerCycleStopPoint == false) { // cycle for unlimited using of script
                let currentMessage = {
                    receiverEmail: '',
                    sendingMessage: '',
                    senderName: ''
                },
                    skipConfirmDialog = false,
                    index = 0,
                    dialogString = ['receiver email in standart view. For example "fe_dev@gmail.com"', 'sending message', 'sender name'],
                    objectKeyLinker = ['receiverEmail', 'sendingMessage', 'senderName'];
                if ((draftMessage[objectKeyLinker[0]] || draftMessage[objectKeyLinker[1]] || draftMessage[objectKeyLinker[2]]) != '') {
                    console.warn('One draft message found')
                    let restoreDraftMessageConfirm = confirm('You have one draft message. Do you want to continue sending it?');
                    if (restoreDraftMessageConfirm) {
                        currentMessage = draftMessage;
                    };
                };
                while (!skipConfirmDialog && index <= 2) {
                    let enteredValue = prompt(`Enter ${dialogString[index]}`, currentMessage[objectKeyLinker[index]]);
                    if ((enteredValue == null) || (enteredValue == '')) {
                        if (enteredValue == null) {
                            skipConfirmDialog = confirm('Do you really want to skip?');
                        };
                        if (enteredValue == '') {
                            skipConfirmDialog = confirm('You entered nothing. Do you really want to skip?');
                        };
                        if (skipConfirmDialog) {
                            index = 3;
                            break;
                        } else {
                            continue;
                        };
                    };
                    if ((index == 0) && (validateEmail(enteredValue) == false)) { // validate email
                        alert('You entered a wrong email');
                        continue;
                    };
                    currentMessage[objectKeyLinker[index]] = enteredValue;
                    index++;
                };
                if ((skipConfirmDialog == true) && (currentMessage[objectKeyLinker[0]] != '')) {
                    console.error(`Enter was skipped on ${dialogString[index]}`)
                    let draftConfirmationDialog = confirm('Do you want to save this message as a draft?');
                    if (draftConfirmationDialog) {
                        draftMessage = currentMessage;
                        console.warn('Message saved as a draft');
                    };
                } else { // shows message
                    if (!skipConfirmDialog) {
                        currentMessage[objectKeyLinker[1]] = postScriptum(currentMessage[objectKeyLinker[1]], currentMessage[objectKeyLinker[2]]);
                        for (let index = 0; index < 2; index++) {
                            console.log(`${dialogString[index][0].toUpperCase() + dialogString[index].slice(1, dialogString[index].length)} : ${currentMessage[objectKeyLinker[index]]}`);
                        };
                        for (let index = 0; index <= 2; index++) {
                            draftMessage[objectKeyLinker[index]] = '';
                        };
                    };
                };
                if (index > 2) {
                    console.warn('End of third script');
                };
                let tryAgain = confirm('Do you want to try again?'); //confirmation modal window for exit from the script and return to main menu
                if (tryAgain == false) {
                    innerCycleStopPoint = true;
                };
            };
            break;

        case '4': // exponentiation
            innerCycleStopPoint = false;
            //------------------------------------------- function for exponentiation ---------------------------------------------------------
            let powMathSquared = (a, b) => (b === undefined) ? Math.pow(a, a) : Math.pow(a, b);
            //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            console.warn('You choose fourth script.');
            alert('You choose fourth script');
            while (innerCycleStopPoint == false) { // cycle for unlimited using of script
                let firstValue = null,
                    secondValue = null,
                    skipPoint = false;
                while (firstValue == null) {
                    firstValue = prompt('Enter first value.');
                    if (firstValue == null) { // cheking CANCEL button
                        let skipConfirm = confirm('Do you really want to cancel script?'); //getting confirmation for skip entering
                        if (skipConfirm == true) { // if  OK button is choosed for skipping entering data
                            skipPoint = true;
                            break;
                        } else {
                            continue;
                        };
                    };
                };
                if (firstValue == '') {
                    alert('You entered nothing. It is equal zero.');
                    firstValue = 0;
                } else {
                    while (isNaN(firstValue)) {
                        firstValue = prompt('Warning! You enter a string value. Please enter a value on numeral part of keyboard');
                        if (firstValue == null) { // cheking CANCEL button
                            let skipConfirm = confirm('Do you really want to skip this part?');
                            if (skipConfirm == true) { // if  OK button is choosed for skipping
                                skipPoint = true;
                                break;
                            };
                        };
                        if (firstValue == '') {
                            alert('You entered nothing. It is equal zero.');
                            firstValue = 0;
                        };
                    };
                };
                if (!skipPoint) {
                    while (secondValue == null) { // cheking CANCEL button
                        secondValue = prompt('Enter second number.');
                        if (secondValue == null) {
                            let skipConfirm = confirm(`Do you really want to skip entering second number? It is equal ${firstValue}.`); // getting confirmation for skip entering
                            if (skipConfirm == true) { // if  OK button is choosed for skipping entering data
                                secondValue = firstValue;
                                break;
                            } else {
                                continue;
                            };
                        };
                    };
                    if (secondValue == '') {
                        alert('You entered nothing. It is equal 0.');
                        secondValue = '0';
                    } else {
                        while (isNaN(secondValue)) {
                            secondValue = prompt('Warning! You enter a string value. Please enter a value on numeral part of keyboard');
                            if (secondValue == null) { // cheking CANCEL button
                                let skipConfirm = confirm(`Do you really want to skip entering second number? It is equal ${firstValue}.`);
                                if (skipConfirm == true) { // if OK button is choosed for skipping
                                    secondValue = firstValue;
                                    break;
                                };
                            };
                            if (secondValue == '') {
                                alert('You entered nothing. It is equal 0.');
                                secondValue = '0';
                            };
                        };
                    };
                    console.log(`The ${firstValue} in ${secondValue}-th degree equal ${powMathSquared(firstValue, secondValue)}`);
                    console.warn('End of fourth script');
                } else {
                    console.error('Script canceled');
                };
                let tryAgain = confirm('Do you want to try again?'); // confirmation modal window for exit from the script and return to main menu
                if (tryAgain == false) {
                    innerCycleStopPoint = true;
                };
            };
            break;

        default: // if entered no one of declarated key-numbers
            alert('You didn`t choose a script. So sad :( ');
            break;
    };
};