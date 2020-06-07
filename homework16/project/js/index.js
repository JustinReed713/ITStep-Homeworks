'use strict';

let mainCycleStopPoint = false;
while (mainCycleStopPoint == false) {
    let chooseTaskValue = prompt(`Please enter number of script\n   1.     Shrink strings;\n   2.     Inverting string case;\n   3.     Text analyzing;\n   4.     Text moderation;\n   To exit programm choose Cancel`);
    if (chooseTaskValue == null) {
        mainCycleStopPoint == true;
        alert('Thanks for choosing us. See ya again!');
        break;
    };
    let innerCycleStopPoint = false;
    switch (chooseTaskValue) {
        case '1': // first task: shrink function that shortens string to a length of 30 characters
            innerCycleStopPoint = false;
            let longStringCutter = (str, finalIndex = 30, endOfString = '...') => str.slice(0, +finalIndex) + endOfString;
            let parametrEntering = (modalDescriptionText) => {
                modalDescriptionText = modalDescriptionText[0].toLowerCase() + modalDescriptionText.slice(1);
                let skipEnterConfirm;
                do {
                    let enteredValue = prompt(`Please, enter ${modalDescriptionText}`);
                    if (enteredValue == null || enteredValue == '') {
                        skipEnterConfirm = confirm(`Do you really want to cancel entering ${modalDescriptionText}?`);
                        if (skipEnterConfirm) {
                            return undefined;
                        } else {
                            continue;
                        };
                    } else {
                        return enteredValue;
                    };
                } while (!skipEnterConfirm);
            };
            console.warn(`${chooseTaskValue}-st script was chosen.`);
            while (!innerCycleStopPoint) {
                let skipConfirmDialog = false;
                let enteredString = prompt(`${chooseTaskValue}-st script. \nEnter your string in the field below.`);
                if (enteredString == null || enteredString == '') {
                    skipConfirmDialog = confirm('Do you really want to cancel execution script?');
                };
                if (!skipConfirmDialog) {
                    let additionalParametrStringLength,
                        additionalParametrSubstitutionalSymbol;
                    if (confirm('Do you want to choose additional parameters')) {
                        additionalParametrStringLength = parametrEntering('maximal string length of entered string');
                        additionalParametrSubstitutionalSymbol = parametrEntering('substitutional symbol');
                    };
                    console.log(longStringCutter(enteredString, additionalParametrStringLength, additionalParametrSubstitutionalSymbol));
                } else {
                    console.error(`${chooseTaskValue}-st was cancelled`);
                };
                if (!confirm('Do you want to try again?')) innerCycleStopPoint = true;
            };
            console.warn(`${chooseTaskValue}-st script was ended.`);
            break;
        case '2': // second task: function that inverting case of inputed string
            innerCycleStopPoint = false;
            let stringCaseInverter = (str) => {
                let newStr = '';
                for (let index = 0; index < str.length; index++) {
                    if (str[index].toLowerCase() === str[index]) {
                        newStr += str[index].toUpperCase();
                    } else {
                        newStr += str[index].toLowerCase();
                    };
                };
                return newStr;
            };
            console.warn(`${chooseTaskValue}-nd script was chosen.`);
            while (!innerCycleStopPoint) {
                let skipConfirmDialog = false;
                let enteredString = prompt(`${chooseTaskValue}-nd script. \nEnter your string in the field below.`);
                if (enteredString == null || enteredString == '') {
                    skipConfirmDialog = confirm('Do you really want to cancel execution script?');
                };
                if (!skipConfirmDialog) {
                    console.log(stringCaseInverter(enteredString));
                } else {
                    console.error(`${chooseTaskValue}-nd was cancelled`);
                };
                if (!confirm('Do you want to try again?')) innerCycleStopPoint = true;
            };
            console.warn(`${chooseTaskValue}-nd script was ended.`);
            break;
        case '3': //third task: function of analysing inputed string
            innerCycleStopPoint = false;
            let objectKeyArray = ['abridgedStringPart', 'totalSymbolAmount', 'wordAmount', 'symbolAmountWithoutSpaces', 'textType'],
                introTextArray = ['abridged part of text', 'total amount of symbols', 'amount of words', 'amount symbols without spaces', 'type of entered text'],
                functionRevolver = [
                    [
                        function (str) {
                            return str.slice(0, 25) + '...';
                        },
                        function (str) {
                            return str.length;
                        },
                        function (str) {
                            return spacesCleaner(str.split(' ')).length;
                        },
                        function (str) {
                            let sum = 0,
                                wordsArray = spacesCleaner(str.split(' '));
                            for (let index = 0; index < wordsArray.length; index++) {
                                sum += wordsArray[index].length;
                            };
                            return sum;
                        },
                        function (str) {
                            let regEx = ['am not', '`m not', 'isn`t', 'is not', 'aren`t', 'are not', 'don`t', 'do not', 'doesn`t', 'does not', 'haven`t', 'have not', 'hasn`t', 'has not', 'hadn`t', 'had not', 'wasn`t', 'was not', 'weren`t', 'were not', 'didn`t', 'did not', 'won`t', 'will not', 'не', 'нет', 'ничего', 'никогда', 'никто'];
                            let negativeOrAffirmative = '',
                                contextual = '',
                                isCompared = false;
                            for (let index = 0; index < regEx.length; index++) {
                                if (str.toLowerCase().includes(regEx[index]) === true) {
                                    isCompared = true;
                                    break;
                                };
                            };
                            (isCompared === true) ? negativeOrAffirmative = 'negative' : negativeOrAffirmative = 'affirmative';
                            if (str[str.length - 1] === '!') contextual = 'exclamation';
                            if (str[str.length - 1] === '?') contextual = 'interrogative';
                            if (str[str.length - 1] === '.') contextual = 'narrative';
                            if (str[str.length - 1] === '"' || str[str.length - 1] === "'") contextual = 'quote';
                            return `${negativeOrAffirmative} ${contextual}`;
                        }
                    ],
                    function (objectArray) {
                        let keysArray = [];
                        for (let index = 0; index < objectArray.length; index++) {
                            keysArray = keysArray.concat(Object.keys(objectArray[index]));
                        };
                        for (let index = 0; index < keysArray.length; index++) {
                            while (keysArray.includes(keysArray[index])) {
                                if (keysArray.lastIndexOf(keysArray[index]) === keysArray.indexOf(keysArray[index])) {
                                    break;
                                } else {
                                    keysArray.splice(keysArray.lastIndexOf(keysArray[index]), 1);
                                };
                            };
                        };
                        return keysArray;
                    },
                    function (arr, key) {
                        let list = [];
                        for (let index = 0; index < arr.length; index++) {
                            let str = `${index + 1}.     ${arr[index][key[0]]}`;
                            list.push(str);
                        };
                        return list;
                    }
                ],
                spacesCleaner = (arr) => {
                    for (let index = 0; index < arr.length; index++) {
                        while (arr[index][0] === ' ') {
                            arr[index] = arr[index].slice(1);
                        };
                        if (arr[index] === '') arr.splice(index, 1);
                    };
                    while (arr.includes('')) {
                        arr.splice(arr.indexOf(''), 1);
                        if (arr.includes('')) arr.splice(arr.lastIndexOf(''), 1);
                    }
                    return arr;
                },
                analyzeDataArray = [],
                skipConfirmDialog = false;
            console.warn(`${chooseTaskValue}-rd script was chosen.`);
            while (!innerCycleStopPoint) {
                let currentAnalyzeData = {};
                let innerTaskNumber = prompt(`${chooseTaskValue}-rd script. \nWhat do you want to do?\n  1.    New string analyze;\n  2.    Sort and show. (At this time analized ${analyzeDataArray.length} strings);\n  3.    Delete analyze data;\n  CANCEL     Exit from script.`);
                if (innerTaskNumber == null) {
                    if (confirm('Do you really want to cancel executing script?')) {
                        break;
                    } else {
                        continue;
                    };
                };
                switch (innerTaskNumber) {
                    case '1': // entering new string
                        skipConfirmDialog = false;
                        let enteredString = prompt('Enter your string in the field below.');
                        if (enteredString == null || enteredString == '') {
                            if (skipConfirmDialog = confirm('Do you really want to cancel entering text?')) {
                                break;
                            } else {
                                continue;
                            };
                        };
                        if (!skipConfirmDialog) {
                            for (let index = 0; index < objectKeyArray.length; index++) {
                                currentAnalyzeData[objectKeyArray[index]] = functionRevolver[(+innerTaskNumber) - 1][index](enteredString);
                            };
                            analyzeDataArray.push(currentAnalyzeData);
                            console.warn('New data was added.');
                        };
                        break;
                    case '2': // sorting and showing all data of entered strings
                        skipConfirmDialog = false;
                        let keyList = (arr) => {
                            let list = [];
                            for (let index = 0; index < arr.length; index++) {
                                let str = `${index + 1}.     ${arr[index]}`;
                                list.push(str);
                            };
                            return list;
                        };
                        if (analyzeDataArray.length > 0) {
                            while (!skipConfirmDialog) {
                                if (analyzeDataArray.length > 1) {
                                    if (confirm('Do you want to sort before show?')) {
                                        let cancelConfirmDialog = false;
                                        while (!cancelConfirmDialog) {
                                            let keyCount = prompt(`Enter NUMBER key of sort: \n     ${keyList(functionRevolver[(+innerTaskNumber) - 1](analyzeDataArray)).join(`\n     `)}`);
                                            if (keyCount == null || keyCount == '') {
                                                if (cancelConfirmDialog = confirm('Do you really want to cancel sorting?')) {
                                                    break;
                                                } else {
                                                    continue;
                                                };
                                            } else {
                                                if (isNaN(+keyCount)) {
                                                    alert('Please read the condition carefully. You need enter NUMBER of key, not type all key name.');
                                                    continue;
                                                };
                                                let keyName = functionRevolver[(+innerTaskNumber) - 1](analyzeDataArray)[keyCount - 1];
                                                console.warn(`Sorted by ${keyName}:`);
                                                analyzeDataArray.sort((itemFirst, itemSecond) => {
                                                    if (itemFirst[keyName] > itemSecond[keyName]) { return 1; };
                                                    if (itemFirst[keyName] < itemSecond[keyName]) { return -1; };
                                                    if (itemFirst[keyName] === itemSecond[keyName]) { return 0; };
                                                });
                                                break;
                                            };
                                        };
                                    } else {
                                        console.warn('Show without sorting.');
                                    };
                                };
                                for (let index = 0; index < analyzeDataArray.length; index++) {
                                    for (let jindex = 0; jindex < objectKeyArray.length; jindex++) {
                                        console.log(` ${introTextArray[jindex]}:     ${analyzeDataArray[index][objectKeyArray[jindex]]}`)
                                    };
                                    console.log('');
                                    if (index == analyzeDataArray.length - 1) {
                                        skipConfirmDialog = true;
                                    };
                                };
                            };
                        } else {
                            alert('Nothing to show.');
                        };
                        break;
                    case '3': // deleting previous analysing data
                        skipConfirmDialog = false;
                        if (analyzeDataArray.length > 0) {
                            while (!skipConfirmDialog) {
                                if (analyzeDataArray.length < 1) {
                                    alert('Nothing to delete.');
                                    break;
                                };
                                let deletingNumber = prompt(`Enter number of deleting:\n     ${functionRevolver[(+innerTaskNumber) - 1](analyzeDataArray, objectKeyArray).join(`\n     `)}`);
                                if (deletingNumber == null || deletingNumber == '') {
                                    if (skipConfirmDialog = confirm('Do you really want to cancel deleting?')) {
                                        break;
                                    } else {
                                        continue;
                                    };
                                } else {
                                    analyzeDataArray.splice((+deletingNumber) - 1, 1);
                                    console.warn('Data was deleted.');
                                };
                            };
                        } else {
                            alert('Nothing to delete.');
                        };
                        break;
                };
            };
            console.warn(`${chooseTaskValue}-rd script was ended.`);
            break;
        case '4': // fourth task: function for moderation inputed text
            innerCycleStopPoint = false;
            let bannedWords = ['fuck', 'suck'];
            let moderation = (str, bannWord, strict) => {
                let previousSearchIndex = 0;
                while ((str.toLowerCase().includes(bannWord, previousSearchIndex) == true) && (previousSearchIndex < str.length)) {
                    let comparing = (comparingStr, index) => /[' ','`','!','@',''','#','$','%','^','&','*','(',')','_','-','=','+','<','>','/','|','?','.','~',':',';','№']/.test(comparingStr[index]),
                        startIndex = str.toLowerCase().indexOf(bannWord, previousSearchIndex),
                        finishIndex = str.toLowerCase().indexOf(bannWord, previousSearchIndex) + bannWord.length - 1,
                        startCompared = false,
                        finishCompared = false,
                        substituteStr = '';
                    while ((startCompared && finishCompared) != true) {
                        if (!startCompared) {
                            startIndex--;
                            startCompared = comparing(str, startIndex);
                            if (startIndex < 0) startCompared = true;
                        };
                        if (!finishCompared) {
                            finishIndex++;
                            finishCompared = comparing(str, finishIndex);
                            if (finishIndex >= str.length) finishCompared = true;
                        };
                    };
                    if ((strict == true) || ((str.toLowerCase().indexOf(bannWord) == (startIndex + 1)) && ((str.toLowerCase().indexOf(bannWord) + (bannWord.length - 1)) == (finishIndex - 1)))) {
                        for (let index = startIndex + 1; index < finishIndex; index++) substituteStr += '*';
                        str = str.slice(0, startIndex + 1) + substituteStr + str.slice(finishIndex);
                    };
                    previousSearchIndex = finishIndex;
                };
                return str;
            };
            let textModeration = (str, array, strict) => {
                let index = 0;
                if (str.toLowerCase().includes(array[index])) {
                    console.error('Banned');
                    while (str.toLowerCase().includes(array[index])) {
                        str = moderation(str, array[index], strict);
                        index++;
                    };
                } else {
                    console.warn('approved');
                };
                return str;
            };
            console.warn(`${chooseTaskValue}-th script was chosen.`);
            while (!innerCycleStopPoint) {
                let skipConfirmDialog = false,
                    stopEnteringDialog = false;
                let unmoderatedText = prompt(`${chooseTaskValue}-th script. \nEnter your string in the field below.`);
                if (unmoderatedText == null || unmoderatedText == '') {
                    skipConfirmDialog = confirm('Do you really want to cancel execution script?');
                };
                if (!skipConfirmDialog) {
                    if (confirm(`Do you want to add a new banned word? At this moment ${bannedWords.length} banned words.`)) {
                        while (!stopEnteringDialog) {
                            let newBannedWord = prompt(`Enter a new banned word. Now banned: ${bannedWords.join(', ')};`);
                            if (newBannedWord == null || newBannedWord == '') {
                                stopEnteringDialog = confirm('Do you really want to stop entering?');
                            } else {
                                bannedWords.push(newBannedWord);
                            };
                        };
                    };
                    console.log(textModeration(unmoderatedText, bannedWords, confirm(`Do you want to use strict moderation mode?\nStrict mode - all words that include banned words will be moderated, wherein unstrict mode allow that including.`)));
                } else {
                    console.error(`${chooseTaskValue}-th was cancelled`);
                };
                if (!confirm('Do you want to try again?')) innerCycleStopPoint = true;
            };
            console.warn(`${chooseTaskValue}-th script was ended.`);
            break;

        default:
            alert('You didn`t choose a script. So sad :( ');
            break;
    };
};