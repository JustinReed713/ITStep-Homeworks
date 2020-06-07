'use strict';

let mainCycleStopPoint = 0;
while (mainCycleStopPoint == 0) {//main cycle for choosing one of scripts
    let chooseTaskValue = prompt('Please, choose the script you want to execute, and enter it number below: 1. appeal to the person; 2. number analizing; 3. age checker; 4. word writing numbers; To exit programm choose Cancel');
    if (chooseTaskValue == null) {//exit from menu and terminate main cycle
        mainCycleStopPoint == 1;
        alert('See ya again!');
        break;
    };
    let innerCycleStopPoint = 0;
    switch (chooseTaskValue) {

        case '1': // first csript: appeal to user in accordance with to the tasks
            innerCycleStopPoint = 0;
            alert('You choose first script');
            while (innerCycleStopPoint == 0) { //cycle for unlimited using script
                let enteringData = ' ',
                    skipConfirm,
                    promptText,
                    index,
                    firstName,
                    secondName,
                    nickName;
                for (index = 0; index < 3; index++) { //three repetition cycle for entering necessary data
                    switch (index) { //choosing text for prompt modal window in accordance with index number of iteration
                        case 0:
                            promptText = 'first '
                            break;

                        case 1:
                            promptText = 'second '
                            break;

                        case 2:
                            promptText = 'nick'
                            break;
                    };
                    enteringData = prompt(`Enter your ${promptText} name`); //getting name from prompt modal window
                    if (enteringData == null) { // cheking CANCEL button
                        skipConfirm = confirm('Do you really want to skip this part?'); //getting confirmation for skip naming
                        if (skipConfirm == true) { //if choosed OK button for skipping entering data
                            switch (index) { //in accordance with index number of iteration
                                case 0: //if skipped on first name
                                    index = 3;
                                    break;

                                case 1: //if skipped on second name
                                    continue;

                                case 2: //if skipped on nickname
                                    continue;

                                default:
                                    break;
                            };
                        } else { //if choosed CANCEL button for returning to entering data
                            skipConfirm = true;
                            continue;
                        };
                    } else { //if data was entered
                        let numSkipped = false;
                        skipConfirm = false;
                        if (enteringData != '') {
                            let numCheck = +enteringData; //translate data from string into numeric value
                            while (!isNaN(numCheck)) { //if was entered numeric
                                enteringData = prompt(`Warning! You enter a numeric value. Please enter your real ${promptText} name.`);
                                if (enteringData == null) { // cheking CANCEL button
                                    skipConfirm = confirm('Do you really want to skip this part?');
                                    if (skipConfirm == true) { //if choosed OK button for skipping
                                        numSkipped = true;
                                        break;
                                    };
                                } else { //if choosed CANCEL button for returning to giving name
                                    numCheck = +enteringData;
                                };
                            };
                        };
                        if (skipConfirm == true) { //double check comparetion for skipping giving name
                            if (numSkipped == true) { //if user wants to skip
                                switch (index) { //in accordance with index number of iteration
                                    case 0: //if skipped on first name
                                        index = 3;
                                        break;

                                    case 1: //if skipped on second name
                                        continue;

                                    case 2: //if skipped on nickname
                                        continue;

                                    default:
                                        break;
                                };
                            } else { //if user wants to return entering data
                                index--;
                                skipConfirm = true;
                                continue;
                            };
                        } else { //if skipping no was chosed
                            switch (index) { //choosing varyable for appropriation entered data prompt modal window in accordance with index number of iteration
                                case 0:
                                    firstName = enteringData;
                                    break;

                                case 1:
                                    secondName = enteringData;
                                    break;

                                case 2:
                                    nickName = enteringData;
                                    break;
                            };
                        };
                    };
                };
                let isNoname;
                ((firstName || (secondName && nickName)) == false) ? isNoname = 'noname' : isNoname = ''; //check if entered only secondname or nickname
                alert('Hello dear ' + (firstName || (nickName && firstName)) + ' ' + (((firstName && secondName) || (secondName && nickName))) + isNoname); //output appeal dialog
                let tryAgain = confirm('Do you want to try again?'); //confirmation modal window for exit from this script and back to main menu
                if (tryAgain == false) {
                    innerCycleStopPoint = 1;
                };
            };
            break; //end of first script

        case '2': //second script: analize entering number
            function languageCompare(comparingString) { //qualified function for language of entered string
                let enteredInLanguage,
                    languageCompareArray,
                    isCompared,
                    index;
                for (index = 0; index <= 2; index++) { //option loop
                    switch (index) {
                        case 0: //check for russian
                            languageCompareArray = /[а-я]/gi;
                            enteredInLanguage = 'russian';
                            break;
                        case 1: //check for english
                            languageCompareArray = /[a-z]/gi;
                            enteredInLanguage = 'english';
                            break;
                    };
                    isCompared = languageCompareArray.test(comparingString); //comparing entered text with array
                    languageCompareArray.lastIndex = 0;
                    if (isCompared == true) {
                        break;
                    } else {
                        enteredInLanguage = 'unknown language';
                    };
                };
                return enteredInLanguage; // return result of qualification
            };
            alert('You choose second script');
            while (innerCycleStopPoint == 0) { //cycle for unlimited using script
                let comparingValue = prompt('Enter a number at numeral part of keybord. For cancel executing current cript choose CANCEL button.'), //getting data from prompt modal window
                    enteredString = '',
                    isAboveOneHundred = '',
                    isEven = '',
                    isPositive = '',
                    isInteger = '',
                    stringOutputMessage = 'Your entered number is ',
                    additionalOutputMassage = '';
                innerCycleStopPoint = 0;
                if (comparingValue == null) { // cheking CANCEL button
                    let confirmCancellingExecute = confirm('Do you really want cancel script?');
                    if (confirmCancellingExecute == true) { //if choosed OK button for skipping
                        break;
                    } else {
                        continue;
                    };
                } else if (comparingValue == '') { //if nothing was entered
                    additionalOutputMassage = 'nothing. :( ';
                } else { //if any data was entered
                    comparingValue = comparingValue.replace(",", "."); //replace "," into "." if entered
                    enteredString = +comparingValue; //convert into numeral
                    if (isNaN(enteredString)) { //if was entered a string walue
                        stringOutputMessage = 'You entered a string value in ';
                        additionalOutputMassage = languageCompare(comparingValue);
                    } else { //if entered data was numeral
                        (enteredString > 100) ? isAboveOneHundred = 'above one hundred, ' : isAboveOneHundred = 'below one hundred, ';
                        ((enteredString % 2) == 0) ? isEven = 'even, ' : isEven = 'odd, ';
                        (enteredString >= 0) ? isPositive = 'positive, ' : isPositive = 'negative, ';
                        ((enteredString % 1) == 0) ? isInteger = 'integer' : isInteger = 'fractional';
                    };
                };
                alert(stringOutputMessage + additionalOutputMassage + isAboveOneHundred + isEven + isPositive + isInteger);//output result of operation
                let tryAgain = confirm('Do you want to try again?');//confirmation modal window for exit from this script and back to main menu
                if (tryAgain == false) {
                    innerCycleStopPoint = 1;
                };
            };
            break; //end of second script

        case '3': //third script: cheking age of user and respectful greeting/goodbye
            innerCycleStopPoint = 0;
            alert('You choose third script');
            while (innerCycleStopPoint == 0) {//cycle for unlimited using script
                let userName = prompt('Enter your name');
                let userAge = prompt('Enter your age');
                userAge = +userAge;
                while (isNaN(userAge)) {//checking data for text information
                    userAge = prompt('Warning! You entered a non-numeric value. Please enter your age');
                    userAge = +userAge;
                };
                (userAge >= 18) ? alert(`Hello , ${userName}. Welcome aboard.`) :
                    ( //if age doesn`t satisfy condition
                        alert(`Sorry, ${userName}. Your age is under 18th. Access denied.`), //accompanying wish
                        alert('PS. Chao, peach. Grow up.')
                    );
                let tryAgain = confirm('Do you want to try again?'); //confirmation modal window for exit from this script and back to main menu
                if (tryAgain == false) {
                    innerCycleStopPoint = 1;
                };
            };
            break;

        case '4': //fourth script: translation from a digital form of writing a number to an alphabetic
            innerCycleStopPoint = 0;
            function analizeOfThree(number, index, oneHundredAboveCheck) { //function translation thousandth separator from a digital to an alphabet
                let numberInString,
                    unitsOfNumberInString = '',
                    tensOfNumberInString = '',
                    additionalUniteWord = '',
                    hundredsOfNumberInString = '',
                    isAboveOneHundred;
                if ((number == 0) && (oneHundredAboveCheck == false)) { //if thousand separate equal zero 
                    unitsOfNumberInString = 'zero';
                } else {
                    let hundredsOfNumber = Math.floor(number / 100), //getting hundreds part of separate
                        dozensOfNumber = number % 100; //getting dozens of separate
                    (number > 99) ? isAboveOneHundred = true : isAboveOneHundred = false; //check for separate is above one hundred
                    if (isAboveOneHundred == true) { // if thousand separate above one hundred
                        switch (hundredsOfNumber) { //compare hundreds part of number
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
                        hundredsOfNumberInString = `${hundredsOfNumberInString} hundred`; //output alphabet form of hundreds part
                    };
                    switch (dozensOfNumber) { //compare dozens of separate
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
                            while (intermediateResultOfAnalize != 0) { //loop until integerPartOfResultAnalize equal 0
                                let integerPartOfResultAnalize = Math.floor(intermediateResultOfAnalize / 10),
                                    fractionalPartOfResultAnalize = intermediateResultOfAnalize % 10;
                                switch (fractionalPartOfResultAnalize) { //compare with fractional part
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
                                switch (iterationCount) { //changing ending of the word in accordance with conditions
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
                if ((index == 0) && (oneHundredAboveCheck == true) && (number == 0)) { //'and' before dozensOfNumber
                    additionalUniteWord = '';  
                } else if ((index == 0) && (oneHundredAboveCheck == true)) {
                    additionalUniteWord = 'and ';
                } else {
                    additionalUniteWord = '';
                };
                numberInString = `${hundredsOfNumberInString} ${additionalUniteWord}${tensOfNumberInString}${unitsOfNumberInString}`; //attach all parts in one
                return numberInString; //output result
            };
            alert('You choose fourth script');
            while (innerCycleStopPoint == 0) {//cycle for unlimited using script
                let alertOutputEnteredString = '';
                let comparingValue = prompt('Enter a number from zero to thousand`s thousand`s billions at numeral part of keybord. For cancel executing current cript choose CANCEL button.'),
                    enteredNumber = +comparingValue,
                    confirmCancellingExecute,
                    numberConvertedInString = '';
                if (comparingValue == null) { // cheking CANCEL button
                    confirmCancellingExecute = confirm('Do you really want cancel script?');
                    if (confirmCancellingExecute == true) { //if choosed OK button for skipping 
                        break;
                    } else {
                        continue;
                    };
                } else if (comparingValue == '') { //if nothing was entered
                    numberConvertedInString = 'nothing. :( ';
                } else {
                    let integerPartOfNumber,
                        fractionalPartOfNumber,
                        index = 0,
                        numSkipped = false,
                        intermediateResult,
                        isEnteredNumberAboveOneHundred;
                    while (isNaN(enteredNumber)) { //if was entered numeric
                        comparingValue = prompt('Warning! You enter a non numeric value. Please enter your number.');
                        if (comparingValue == null) { // cheking CANCEL button
                            confirmCancellingExecute = confirm('Do you really want to skip this part?');
                            if (confirmCancellingExecute == true) { //if choosed OK button for skipping
                                numSkipped = true;
                                break;
                            };
                        } else if (comparingValue == '') { //if nothing was entered
                            numberConvertedInString = 'nothing. :( ';  //if choosed CANCEL button for returning to giving name
                            numSkipped = true;
                            break;
                        } else {
                            enteredNumber = +comparingValue;
                        };
                    };
                    if (numSkipped == false) {
                        intermediateResult = enteredNumber;
                        do {
                            integerPartOfNumber = Math.floor(intermediateResult / 1000); //getting integer part of thousands separating
                            fractionalPartOfNumber = intermediateResult % 1000; //getting fractional part of thosands separating
                            (enteredNumber > 99) ? isEnteredNumberAboveOneHundred = true : isEnteredNumberAboveOneHundred = false; //check is entered number above one hundred
                            alertOutputEnteredString = analizeOfThree(fractionalPartOfNumber, index, isEnteredNumberAboveOneHundred);
                            intermediateResult = integerPartOfNumber;
                            switch (index) {
                                case 0: //hundreds
                                    break;
                                case 1: //thousands
                                    if (fractionalPartOfNumber != 0) {
                                        alertOutputEnteredString = `${alertOutputEnteredString} thousand `;
                                    } else {
                                        alertOutputEnteredString = '';
                                    };
                                    break;
                                case 2: //million
                                    if (fractionalPartOfNumber != 0) {
                                        alertOutputEnteredString = `${alertOutputEnteredString} million `;
                                    } else {
                                        alertOutputEnteredString = '';
                                    };
                                    break;
                                case 3: //million
                                    if (fractionalPartOfNumber != 0) {
                                        alertOutputEnteredString = `${alertOutputEnteredString} billion `;
                                    } else {
                                        alertOutputEnteredString = '';
                                    };
                                    break;
                                case 4: //billion
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
                    };
                };
                alert(`You entered: ${numberConvertedInString}`); //output result of convertion
                let tryAgain = confirm('Do you want to try again?'); //confirmation modal window for exit from this script and back to main menu
                if (tryAgain == false) {
                    innerCycleStopPoint = 1;
                };
            };
            break;
        default://if entered no one of declarated key-numbers
            alert('You aren`t choose a script. So sad :( ');
            break;
    };
};