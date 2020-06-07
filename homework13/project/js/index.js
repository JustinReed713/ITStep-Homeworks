'use strict';

let mainCycleStopPoint = false;
while (!mainCycleStopPoint) {//main cycle for choosing one of the scripts
    let chooseTaskValue = prompt('Please, choose the script you want to execute, and enter it number below: 1. output every number in range ; 2. PIN and PUK code entering; 3. analyze every number in range ; 4. output every number in range and stop on seventh iteration ; To exit programm choose Cancel');
    if (chooseTaskValue == null) {//exit from menu and terminate main cycle
        mainCycleStopPoint == 1;
        alert('See ya again!');
        break;
    };
    let innerCycleStopPoint = false;
    switch (chooseTaskValue) {

        case '1': // first csript: appeal to user in accordance to the tasks
            innerCycleStopPoint = false;
            alert('You choose first script.');
            console.warn('You choose first script.');
            while (!innerCycleStopPoint) { //cycle for unlimited using script
                let startSequenceNumber = null,
                    finishSequenceNumber = null,
                    nextSequenceNumber,
                    lastSequenceNumber,
                    skipPoint = false;
                while (startSequenceNumber == null) {
                    startSequenceNumber = prompt('Enter start number.');
                    if (startSequenceNumber == null) { //cheking CANCEL button
                        let skipConfirm = confirm('Do you really want to cancel script?'); //getting confirmation for skip entering
                        if (skipConfirm == true) { //if  OK button choosed for skipping entering data
                            skipPoint = true;
                            break;
                        } else {
                            continue;
                        };
                    };
                };
                if (startSequenceNumber == '') {
                    alert('You entered nothing. It is equal zero.');
                } else {
                    while (isNaN(startSequenceNumber)) {
                        startSequenceNumber = prompt('Warning! You enter a string value. Please enter a value on numeral part of keyboard');
                        if (startSequenceNumber == null) {// cheking CANCEL button
                            let skipConfirm = confirm('Do you really want to skip this part?');
                            if (skipConfirm == true) {//if  OK button choosed for skipping
                                skipPoint = true;
                                break;
                            };
                        };
                        if (startSequenceNumber == '') {
                            alert('You entered nothing. It is equal zero.');
                        };
                    };
                };
                if (!skipPoint) {
                    while (finishSequenceNumber == null) { //cheking CANCEL button
                        finishSequenceNumber = prompt('Enter second number.');
                        if (finishSequenceNumber == null) {
                            let skipConfirm = confirm('Do you really want to skip entering second number? It is equal 10.'); //getting confirmation for skip entering
                            if (skipConfirm == true) { //if  OK button choosed for skipping entering data
                                finishSequenceNumber = '10';
                                break;
                            } else {
                                continue;
                            };
                        };
                    };
                    if (finishSequenceNumber == '') {
                        alert('You entered nothing. It is equal 10.');
                        finishSequenceNumber = '10';
                    } else {
                        while (isNaN(finishSequenceNumber)) {
                            finishSequenceNumber = prompt('Warning! You enter a string value. Please enter a value on numeral part of keyboard');
                            if (finishSequenceNumber == null) {// cheking CANCEL button
                                let skipConfirm = confirm('Do you really want to skip entering second number? It is equal 10.');
                                if (skipConfirm == true) {//if OK button choosed for skipping
                                    finishSequenceNumber = '10';
                                    skipPoint = true;
                                    break;
                                };
                            };
                            if (finishSequenceNumber == '') {
                                alert('You entered nothing. It is equal 10.');
                                finishSequenceNumber = '10';
                            };
                        };
                    };
                    while (Math.abs((+finishSequenceNumber) - (+startSequenceNumber)) < 5) {
                        finishSequenceNumber = +prompt('You enter wrong finish condition: steps of output is less than 5. Please change last number.')
                    };
                    nextSequenceNumber = +startSequenceNumber;
                    lastSequenceNumber = +finishSequenceNumber;
                    if (+finishSequenceNumber < +startSequenceNumber) {
                        lastSequenceNumber--;
                    } else {
                        lastSequenceNumber++;
                    };
                    console.log(`You entered ${+startSequenceNumber} for first and ${+finishSequenceNumber} for last condition numbers`)
                    while (nextSequenceNumber != lastSequenceNumber) {
                        console.log(nextSequenceNumber)
                        if (+finishSequenceNumber < +startSequenceNumber) { //if last number less than first
                            nextSequenceNumber--; //decremention
                        } else {
                            nextSequenceNumber++; //incremention
                        };
                    };
                } else {
                    console.error('You cancelled script');
                    break;
                };
                console.warn('End of first script');
                let tryAgain = confirm('Do you want to try again?'); //confirmation modal window for exit from this script and back to main menu
                if (tryAgain == false) {
                    innerCycleStopPoint = 1;
                };
            };
            break;

        case '2':
            function codeGenerate(size) { //function for randomize codes with adjusted number of digits
                let code = 0;
                for (let index = 0; index <= (size - 1); index++) {
                    let nmbr = Math.floor((Math.random()) * 10);
                    code = (code * 10) + nmbr;
                };
                return code;
            };
            innerCycleStopPoint = 0;
            alert('You choose second script.');
            console.warn('You choose second script.')
            while (innerCycleStopPoint == 0) { //cycle for unlimited using script
                let pinCode = null,
                    pukCode = null,
                    skipPoint = false,
                    iIndex,
                    jIndex;
                if (confirm('Do you want to generate PIN and PUK-codes automatically? For manual entering codes choose CANCEL.')) {
                    console.warn('Codes generated automatically.')
                    let digitsCode = +prompt('How many digits do you want in your code?', 4);
                    pinCode = codeGenerate(digitsCode);
                    pukCode = codeGenerate(digitsCode);
                    alert(`Your PIN-code is ${pinCode} and PUK-code is ${pukCode}. Don't forget it.`); //shows codes because they are generated automatically and user doesn`t know them
                } else {
                    console.warn('User sets codes manually.')
                    while (pinCode == null) { //cheking CANCEL button
                        pinCode = prompt('Enter your PIN-code.');
                        if (pinCode == null) {
                            let skipConfirm = confirm('Do you really want to cancel entering PIN-code?'); //getting confirmation for skip entering
                            if (skipConfirm == true) { //if OK button choosed for skipping entering data
                                skipPoint = true;
                                break;
                            } else {
                                continue;
                            };
                        };
                    };
                    if (pinCode == '') {
                        alert('You entered nothing. It is equal 1234.');
                        pinCode = '1234';
                    } else {
                        while (isNaN(pinCode)) {
                            pinCode = prompt('Warning! You enter a string value. Please enter a value on numeral part of keyboard');
                            if (pinCode == null) {// cheking CANCEL button
                                let skipConfirm = confirm('Do you really want to cancel entering PIN-code?');
                                if (skipConfirm == true) {//if OK button choosed for skipping
                                    skipPoint = true;
                                    break;
                                };
                            };
                            if (pinCode == '') {
                                alert('You entered nothing. It is equal 1234.');
                                pinCode = '1234';
                            };
                        };
                    };
                    if (!skipPoint) {
                        while (pukCode == null) { //cheking CANCEL button
                            pukCode = +prompt('Enter your PUK-code.');
                            if (pukCode == null) {
                                let skipConfirm = confirm('Do you really want to skip entering PUK-code? It is equal 1234.'); //getting confirmation for skip entering
                                if (skipConfirm == true) { //if OK button choosed for skipping entering data
                                    pukCode = '1234';
                                    break;
                                } else {
                                    continue;
                                };
                            };
                        };
                        if (pukCode == '') {
                            alert('You entered nothing. It is equal 1234.');
                            pukCode = '1234';
                        } else {
                            while (isNaN(pukCode)) {
                                pukCode = prompt('Warning! You enter a string value. Please enter a value on numeral part of keyboard');
                                if (pukCode == null) {// cheking CANCEL button
                                    let skipConfirm = confirm('Do you really want to skip entering PUK-code? It is equal 1234.');
                                    if (skipConfirm == true) {//if OK button choosed for skipping
                                        pukCode = '1234';
                                        break;
                                    };
                                };
                                if (pukCode == '') {
                                    alert('You entered nothing. It is equal 1234.');
                                    pinCode = '1234';
                                };
                            };
                        };
                    } else {
                        console.error('You cancelled script');
                        break;
                    };
                };
                if (!skipPoint) {
                    for (iIndex = 0; iIndex < 3; iIndex++) {
                        let enteredCode = +prompt('Please enter your PIN-code.');
                        if (enteredCode == pinCode) {
                            alert('Your PIN-code accepted. Access confirmed.');
                            break;
                        } else {
                            alert(`You enter wrong PIN-code. Attempts left: ${3 - (iIndex + 1)}.`);
                        };
                    };
                    if (iIndex == 3) {
                        alert('You enter wrong PIN-code three times. Enter your PUK-code.');
                        for (jIndex = 0; jIndex < 3; jIndex++) {
                            let enteredCode = +prompt('Please enter your PUK-code.');
                            if (enteredCode == pukCode) {
                                alert('Your PUK-code accepted. Access confirmed.');
                                break;
                            } else {
                                alert(`You enter wrong PUK-code. Attempts left: ${3 - (jIndex + 1)}.`);
                            };
                        };
                        if (jIndex == 3) {
                            console.error('You waste all attempts');
                            alert('You waste all your attempts. Access denied. Please contact support center and eat some broccoli for increasing your mental function.');
                        };
                    };
                };
                console.warn('End of second script');
                let tryAgain = confirm('Do you want to try again?'); //confirmation modal window for exit from this script and back to main menu
                if (tryAgain == false) {
                    innerCycleStopPoint = 1;
                };
            };
            break;

        case '3':  //second script: analize entering number
            function numberAnalize(number) {
                let isAboveOneHundred = '',
                    isEven = '',
                    isPositive = '',
                    isInteger = '';
                (number > 100) ? isAboveOneHundred = 'above one hundred' : isAboveOneHundred = 'below one hundred';
                ((number % 2) == 0) ? isEven = 'even' : isEven = 'odd';
                (number >= 0) ? isPositive = 'positive' : isPositive = 'negative';
                ((number % 1) == 0) ? isInteger = 'integer' : isInteger = 'fractional';
                console.log(`${number} is ${isAboveOneHundred}, ${isEven}, ${isPositive}, ${isInteger}`);//show result of operation
            };
            innerCycleStopPoint = 0;
            alert('You choose third script.');
            console.warn('You choose third script.')
            while (!innerCycleStopPoint) { //cycle for unlimited using script
                let startSequenceNumber = null,
                    finishSequenceNumber = null,
                    nextSequenceNumber,
                    lastSequenceNumber,
                    skipPoint = false;
                while (startSequenceNumber == null) {
                    startSequenceNumber = prompt('Enter start number.');
                    if (startSequenceNumber == null) { //cheking CANCEL button
                        let skipConfirm = confirm('Do you really want to cancel script?'); //getting confirmation for skip entering
                        if (skipConfirm == true) { //if OK button choosed for skipping entering data
                            skipPoint = true;
                            break;
                        } else {
                            continue;
                        };
                    };
                };
                if (startSequenceNumber == '') {
                    alert('You entered nothing. It is equal zero.');
                } else {
                    while (isNaN(startSequenceNumber)) {
                        startSequenceNumber = prompt('Warning! You enter a string value. Please enter a value on numeral part of keyboard');
                        if (startSequenceNumber == null) {// cheking CANCEL button
                            let skipConfirm = confirm('Do you really want to skip this part?');
                            if (skipConfirm == true) {//if OK button choosed for skipping
                                skipPoint = true;
                                break;
                            };
                        };
                        if (startSequenceNumber == '') {
                            alert('You entered nothing. It is equal zero.');
                        };
                    };
                };
                if (!skipPoint) {
                    while (finishSequenceNumber == null) { //cheking CANCEL button
                        finishSequenceNumber = prompt('Enter second number.');
                        if (finishSequenceNumber == null) {
                            let skipConfirm = confirm('Do you really want to skip entering number? It is equal 10.'); //getting confirmation for skip entering
                            if (skipConfirm == true) { //if OK button choosed for skipping entering data
                                finishSequenceNumber = '10';
                                break;
                            } else {
                                continue;
                            };
                        };
                    };
                    if (finishSequenceNumber == '') {
                        alert('You entered nothing. It is equal 10.');
                        finishSequenceNumber = '10';
                    } else {
                        while (isNaN(finishSequenceNumber)) {
                            finishSequenceNumber = prompt('Warning! You enter a string value. Please enter a value on numeral part of keyboard');
                            if (finishSequenceNumber == null) {// cheking CANCEL button
                                let skipConfirm = confirm('Do you really want to skip entering second number? It is equal 10.');
                                if (skipConfirm == true) {//if OK button choosed for skipping
                                    finishSequenceNumber = '10';
                                    skipPoint = true;
                                    break;
                                };
                            };
                            if (finishSequenceNumber == '') {
                                alert('You entered nothing. It is equal 10.');
                                finishSequenceNumber = '10';
                            };
                        };
                    };
                    nextSequenceNumber = +startSequenceNumber;
                    lastSequenceNumber = +finishSequenceNumber;
                    if (+finishSequenceNumber < +startSequenceNumber) {
                        lastSequenceNumber--;
                    } else {
                        lastSequenceNumber++;
                    };
                    console.log(`You entered ${+startSequenceNumber} for first and ${+finishSequenceNumber} for last condition numbers`)
                    do {
                        numberAnalize(nextSequenceNumber);
                        if (+finishSequenceNumber < +startSequenceNumber) {
                            nextSequenceNumber--;
                        } else {
                            nextSequenceNumber++;
                        };
                    } while (nextSequenceNumber != lastSequenceNumber);
                } else {
                    console.error('You cancelled script');
                    break;
                };
                console.warn('End of third script');
                let tryAgain = confirm('Do you want to try again?'); //confirmation modal window for exit from this script and back to main menu
                if (tryAgain == false) {
                    innerCycleStopPoint = 1;
                };
            };
            break; //end of second script

        case '4':
            innerCycleStopPoint = 0
            console.warn('You choose fourth script.')
            alert('You choose fourth script.');
            while (!innerCycleStopPoint) { //cycle for unlimited using script
                let startSequenceNumber = null,
                    finishSequenceNumber = null,
                    nextSequenceNumber,
                    lastSequenceNumber,
                    index = 0,
                    skipPoint = false;
                while (startSequenceNumber == null) {
                    startSequenceNumber = prompt('Enter start number.');
                    if (startSequenceNumber == null) { //cheking CANCEL button
                        let skipConfirm = confirm('Do you really want to cancel script?'); //getting confirmation for skip entering
                        if (skipConfirm == true) { //if OK button choosed for skipping entering data
                            skipPoint = true;
                            break;
                        } else {
                            continue;
                        };
                    }
                }
                if (startSequenceNumber == '') {
                    alert('You entered nothing. It is equal zero.');
                } else {
                    while (isNaN(startSequenceNumber)) {
                        startSequenceNumber = prompt('Warning! You enter a string value. Please enter a value on numeral part of keyboard');
                        if (startSequenceNumber == null) {// cheking CANCEL button
                            let skipConfirm = confirm('Do you really want to skip this part?');
                            if (skipConfirm == true) {//if OK button choosed for skipping
                                skipPoint = true;
                                break;
                            };
                        };
                        if (startSequenceNumber == '') {
                            alert('You entered nothing. It is equal zero.');
                        };
                    };
                };
                if (!skipPoint) {
                    while (finishSequenceNumber == null) {
                        finishSequenceNumber = prompt('Enter second number.');
                        if (finishSequenceNumber == null) { //cheking CANCEL button
                            let skipConfirm = confirm('Do you really want to skip entering second number? It is equal 10.'); //getting confirmation for skip entering
                            if (skipConfirm == true) { //if OK button choosed for skipping entering data
                                finishSequenceNumber = '10';
                                break;
                            } else {
                                continue;
                            };
                        };
                    };
                    if (finishSequenceNumber == '') {
                        alert('You entered nothing. It is equal 10.');
                        finishSequenceNumber = '10';
                    } else {
                        while (isNaN(finishSequenceNumber)) {
                            finishSequenceNumber = prompt('Warning! You enter a string value. Please enter a value on numeral part of keyboard');
                            if (finishSequenceNumber == null) {// cheking CANCEL button
                                let skipConfirm = confirm('Do you really want to skip entering second number? It is equal 10.');
                                if (skipConfirm == true) {//if OK button choosed for skipping
                                    finishSequenceNumber = '10';
                                    skipPoint = true;
                                    break;
                                };
                            };
                            if (finishSequenceNumber == '') {
                                alert('You entered nothing. It is equal 10.');
                                finishSequenceNumber = '10';
                            };
                        };
                    };
                    nextSequenceNumber = +startSequenceNumber;
                    lastSequenceNumber = +finishSequenceNumber;
                    if (+finishSequenceNumber < +startSequenceNumber) {
                        lastSequenceNumber--;
                    } else {
                        lastSequenceNumber++;
                    };
                    console.log(`You entered ${+startSequenceNumber} for first and ${+finishSequenceNumber} for last condition numbers`)
                    do {
                        console.log(nextSequenceNumber);
                        if (+finishSequenceNumber < +startSequenceNumber) {
                            nextSequenceNumber--;
                        } else {
                            nextSequenceNumber++;
                        };
                        if (index == 6) {
                            break;
                        }
                        index++;
                    } while (nextSequenceNumber != lastSequenceNumber);
                    console.log(`Script ended on ${index + 1}-th iteration`);
                } else {
                    console.error('You cancelled script');
                    break;
                };
                console.warn('End of fourth script');
                let tryAgain = confirm('Do you want to try again?'); //confirmation modal window for exit from this script and back to main menu
                if (tryAgain == false) {
                    innerCycleStopPoint = 1;
                };
            };
            break;

        default:  //if entered no one of declarated key-numbers
            alert('You didn`t choose a script. So sad :( ');
            break;
    };
};
