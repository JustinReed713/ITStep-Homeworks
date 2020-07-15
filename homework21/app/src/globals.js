
export const titleSlogans = [
    "You`ll never do all your tasks, but you can try",
    "You do - we to|o",
    "Things you`ll love for the jobs you don`t",
    "What do we say to the God of work? Not today! But first add it to the todoList"
];

export const snackbarData = [
    {/* 0 is for restore deleted task*/
        severity: "error",
        alertContent: "You delete task.",
        actionEnable: true,
        actionType: "restore"
    },
    {/* 1 is for success adding */
        severity: "success",
        alertContent: "Success! New task was added."
    },
    {/* 2 is for warn about wrong date */
        severity: "warning",
        alertContent: "Warning! You entered date that has already passed."
    },
    {/* 3 is for clear done tasks */
        severity: "info",
        alertContent: "You have $$ completed task$$. Do you want to erase them?",
        actionEnable: true,
        actionType: "clear"
    }
]