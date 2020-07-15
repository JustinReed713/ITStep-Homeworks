export default class Task {
    constructor(description, taskID, timeMark = "", doneStatus = false, successfulStatus = false) {
        this.taskID = taskID
        this.description = description;
        this.doneStatus = doneStatus;
        this.successfulStatus = successfulStatus;
        this.timeMark = timeMark;
    }
}

export const firstLetterCapitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1, string.length)
}