export const doneTasksCounter = (array) => {
    return array.filter((item) => item.doneStatus === true).length
}

export const pasteCount = (array, string) => {
    const partsArray = string.split('$$');
    return `${partsArray[0]}${doneTasksCounter(array)}${partsArray[1]}${doneTasksCounter(array) > 1 ? "`s" : ""}${partsArray[2]}`;
}