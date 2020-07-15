export const getLocalTime = () => {
    const currentDate = new Date().toLocaleString().split(', ');
    return `${currentDate[0].split('.').reverse().join('-')}T${currentDate[1].slice(0, 5)}`
}

/* export const localTime */

export class LocalTimeISO {
    constructor() {
        this.currentDateLocalString = new Date().toLocaleString().split(', ');
        this.string = `${this.currentDateLocalString[0].split('.').reverse().join('-')}T${this.currentDateLocalString[1].slice(0, 5)}`
    }

    static toString() {
        return new LocalTimeISO().string;
    }

    static toViewFormat(value) {
        const sepValue = value.split("T")

        return `Date: ${sepValue[0].split("-").reverse().join("/")} Time: ${sepValue[1]}`
    }

    static dateObserver(timeMark) {
        if (timeMark === "") {
            return true
        } else {
            if (timeMark > LocalTimeISO.toString()) {
                return true
            } else {
                return false
            }
        }
    }
}