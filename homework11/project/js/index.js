'use strict';

let stopPoint = 0;

while (stopPoint == 0) {//main cycle for choosing one of scripts
    let chooseTask = prompt('Please, choose the script you want to execute, and enter it number below: 1. prompt -> alert; 2. summing of three number; 3. age checker; 4. BEM class enter; 5. calculator lite; To exit programm choose Cancel');
    if (chooseTask == null) {//exit from menu and terminate main cycle
        stopPoint == 1;
        alert('Goodbye!');
        break;
    };
    let breakPoint = 0;

    switch (chooseTask) {//menu for choosing what script need to execute
        case '1'://first script: getting info from prompt modal window and output it through alert modal window
            breakPoint = 0;
            alert('You choose first script');
            while (breakPoint == 0) {//cycle for unlimited using script
                let someText = prompt('Enter something:');
                if (someText == null) {
                    someText = ' ';
                };
                alert('You enter: ' + someText);
                let tryAgain = confirm('Do you want to try again?');//confirmation modal window for exit from this script and back to main menu
                if (tryAgain == false) {
                    breakPoint = 1;
                };
            };
            break;

        case '2'://second script: summing of three numbers
            breakPoint = 0;
            alert('You choose second script');
            while (breakPoint == 0) {//cycle for unlimited using script
                let summOfThree = 0;
                for (let index = 0; index < 3; index++) {//three repetition cycle for entering numbers and summing
                    let someNumber = 0,
                        promptText = ' ';
                    switch (index) {//choosing text for prompt modal window in accordance with index number of iteration
                        case 0:
                            promptText = 'Enter first number.';
                            break;

                        case 1:
                            promptText = 'Enter second number.';
                            break;

                        case 2:
                            promptText = 'Enter third number.';
                            break;
                    };
                    someNumber = prompt(promptText);
                    someNumber = +someNumber;//translate string value into numeric
                    console.log((index + 1) + 'number ' + someNumber);
                    while (isNaN(someNumber)) {//checking data for text information
                        someNumber = prompt('Warning! You entered a non-numeric value. ' + promptText);
                        someNumber = +someNumber;
                    };
                    summOfThree = summOfThree + someNumber;
                    console.log('summ ' + summOfThree);
                };
                alert('Summ of numbers: ' + summOfThree);
                let tryAgain = confirm('Do you want to try again?');//confirmation modal window for exit from this script and back to main menu
                if (tryAgain == false) {
                    breakPoint = 1;
                };
            };
            break;

        case '3'://third script: cheking age of user and respectful greeting/goodbye
            breakPoint = 0;
            alert('You choose third script');
            while (breakPoint == 0) {//cycle for unlimited using script
                let userName = prompt('Enter your name');
                let userAge = prompt('Enter your age');
                userAge = +userAge;
                while (isNaN(userAge)) {//checking data for text information
                    userAge = prompt('Warning! You entered a non-numeric value. Please enter your age');
                    userAge = +userAge;
                };
                if (userAge > 18) {//compare entered data with condition of the task
                    alert('Hello , ' + userName + '. Welcome aboard.');
                } else if (userAge == 18) {
                    alert('Hello , ' + userName + '. Welcome aboard.');
                } else {//if age doesn`t satisfy condition
                    alert('Sorry, ' + userName + '. Your age is under 18th. Access denied.');//accompanying wish
                    alert('PS. Chao, peach. Grow up.')
                };
                let tryAgain = confirm('Do you want to try again?');//confirmation modal window for exit from this script and back to main menu
                if (tryAgain == false) {
                    breakPoint = 1;
                };
            };
            break;

        case '4'://fourth script: entering class name with BEM rules
            breakPoint = 0;
            alert('You choose fourth script');
            alert('Remember, that the name should match the content as much as possible. For example, the Header class is valid, while Hat is not valid for the site header. Element cannot exist without the block. Numeric names should also not be given. Good luck.');
            while (breakPoint == 0) {//cycle for unlimited using script
                let className = '',
                    somePartOfName = ' ',
                    skipConfirm,
                    promptText,
                    index;
                for (index = 0; index < 3; index++) {//three repetition cycle for entering names and summing
                    switch (index) {//choosing text for prompt modal window in accordance with index number of iteration
                        case 0:
                            promptText = 'Block. '
                            break;

                        case 1:
                            promptText = 'Element. '
                            break;

                        case 2:
                            promptText = 'Modifier. '
                            break;
                    };
                    somePartOfName = prompt('Enter name of ' + promptText);//getting name from prompt modal window
                    if (somePartOfName == null) {// cheking CANCEL button
                        skipConfirm = confirm('Do you really want to skip this part?');//getting confirmation for skip naming
                        if (skipConfirm == true) {//if choosed OK button for skipping giving name
                            switch (index) {//in accordance with index number of iteration
                                case 0://if skipped on block
                                    index = 3;
                                    break;

                                case 1://if skipped on element
                                    continue;

                                case 2://if skipped on modifier
                                    continue;

                                default:
                                    break;
                            };
                        } else {//if choosed CANCEL button for returning to giving name
                            index--;
                            skipConfirm = true;
                            continue;
                        };
                    } else {//if data was entered
                        let numCheck = +somePartOfName;//translate data from string into numeric value
                        let numSkipped = false;
                        skipConfirm = false;
                        while (!isNaN(numCheck)) {//if was entered numeric
                            somePartOfName = prompt('Warning! You enter a numeric value. Please enter name of ' + promptText);
                            if (somePartOfName == null) {// cheking CANCEL button
                                skipConfirm = confirm('Do you really want to skip this part?');
                                if (skipConfirm == true) {//if choosed OK button for skipping
                                    numSkipped = true;
                                    break;
                                };
                            } else {//if choosed CANCEL button for returning to giving name
                                numCheck = +somePartOfName;
                            };
                        };
                        if (skipConfirm == true) {//double check comparetion for skipping giving name
                            if (numSkipped == true) {//if user wants to skip
                                switch (index) {//in accordance with index number of iteration
                                    case 0://if skipped on block
                                        index = 3;
                                        break;

                                    case 1://if skipped on element
                                        continue;

                                    case 2://if skipped on modifier
                                        continue;

                                    default:
                                        break;
                                };
                            } else {//if user wants to return giving name
                                index--;
                                skipConfirm = true;
                                continue;
                            };
                        } else {//if skipping no was chosed
                            console.log('Your entered name for ' + promptText + ' is ' + somePartOfName);
                            switch (index) {//transfer of entered data in accordance with the order and selected action
                                case 0://for block name
                                    break;

                                case 1://for element name
                                    somePartOfName = '__' + somePartOfName
                                    break;

                                case 2://for modifier name
                                    somePartOfName = '_' + somePartOfName
                                    break;
                            };
                        };
                        className = className + somePartOfName;//summing of names
                    };
                };
                console.log('Class name is: ' + className);//output class name through console and alert modal window
                alert('Class name is: ' + className);
                let tryAgain = confirm('Do you want to try again?');//confirmation modal window for exit from this script and back to main menu
                if (tryAgain == false) {
                    breakPoint = 1;
                };
            };
            break;

        case '5'://fifth script: entering two numbers and performing selected mathematical operations on them
            breakPoint = 0;
            alert('You choose fifth script');
            while (breakPoint == 0) {//cycle for unlimited using script
                let resOfOperation;
                let firstNumber = prompt('Enter first number ');
                while (isNaN(firstNumber)) {//checking data for text information
                    firstNumber = prompt('Warning! You entered a non-numeric value. Enter first number ');
                    firstNumber = +firstNumber;
                };
                let secondNumber = prompt('Enter second number ');
                while (isNaN(secondNumber)) {//checking data for text information
                    secondNumber = prompt('Warning! You entered a non-numeric value. Enter second number ');
                    secondNumber = +secondNumber;
                };
                let mathOperation = prompt('Choose and enter key-word for one of four math operation. 1. div for division; 2. mult for multiplication; 3. sum for summing; 4. sub for subtraction');
                switch (mathOperation) {//choosing mathematical operation in accordance with entered key words
                    case 'div'://division
                        resOfOperation = firstNumber / secondNumber;
                        break;

                    case 'mult'://multiplicate
                        resOfOperation = firstNumber * secondNumber;
                        break;

                    case 'sum'://summing
                        resOfOperation = firstNumber + secondNumber;
                        break;

                    case 'sub'://substraction
                        resOfOperation = firstNumber - secondNumber;
                        break;

                    default:
                        break;
                };
                alert('Result of operation: ' + resOfOperation);//output result of operation
                let tryAgain = confirm('Do you want to try again?');//confirmation modal window for exit from this script and back to main menu
                if (tryAgain == false) {
                    breakPoint = 1;
                };
            };
            break;

        default://if entered no one of declarated key-numbers
            alert('You aren`t choose a script. So sad :( ');
            break;
    };
};