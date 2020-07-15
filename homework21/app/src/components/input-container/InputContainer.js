import React from 'react';

import {
    IconButton,
    InputAdornment,
    TextField,
    Tooltip,
    Zoom
} from '@material-ui/core';

import {
    Add as AddIcon,
    AlarmAdd as AlarmAddIcon,
    AlarmOff as AlarmOffIcon,
    AssignmentReturned as TaskIcon
} from '@material-ui/icons';
import { Task, LocalTimeISO, firstLetterCapitalize } from '../../utils';

import './InputContainer.css';

var idNumber = 0;

class InputContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: "",
            timeMark: "",
            timeMarkEnabled: false
        }
    }

    addNewTaskHandle = () => {
        if (this.state.currentValue !== "") {
            const { currentValue, timeMark } = this.state;
            this.props.addCallback(new Task(firstLetterCapitalize(currentValue), (idNumber++).toString(), timeMark));
            this.setState({
                currentValue: "",
                timeMark: "",
                timeMarkEnabled: false
            });
            document.getElementById("task-input").value = "";
            document.getElementById("datetime-input").classList.add("component_hidden");
        } else return
    }

    addDateTimeHandle = () => {
        if (this.state.timeMarkEnabled === true) {
            this.setState({ timeMark: "", timeMarkEnabled: false });
            document.getElementById("datetime-input").classList.add("component_hidden");
        } else {
            this.setState({ timeMarkEnabled: true });
            document.getElementById("datetime-input").classList.remove("component_hidden");
        }
    }

    changeDescriptionHandle = (event) => {
        this.setState({ currentValue: event.target.value });
    }

    changeTimeMarkHandle = (event) => {
        if (event.target.value < LocalTimeISO.toString()) {
            event.target.value = LocalTimeISO.toString();
            this.setState({ timeMark: "" });
            this.props.setStatusCodeCallback(2);
        } else {
            this.setState({ timeMark: event.target.value });
        }
    }

    enterButtonHandle = (event) => {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("add-task-button").click();
        }
    }

    render() {
        const { currentValue, timeMarkEnabled } = this.state;

        return (
            <Zoom in={true}>
                <div className="input-wrapper">
                    <div className="input-panel">
                        <TextField
                            id="task-input"
                            placeholder="Add your task here"
                            onChange={this.changeDescriptionHandle}
                            onKeyUp={this.enterButtonHandle}
                            style={{
                                width: "60%"
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <TaskIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Tooltip
                            TransitionComponent={Zoom}
                            title={currentValue === "" ? "Nothing to add" : "Add new task"} >
                            <IconButton
                                id="add-task-button"
                                aria-label="add"
                                onClick={this.addNewTaskHandle}
                            >
                                <AddIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip
                            className={currentValue === "" ? "component_hidden" : ""}
                            TransitionComponent={Zoom}
                            title={timeMarkEnabled ? "Remove deadline time" : "Add deadline time"} >
                            <IconButton aria-label="add" onClick={this.addDateTimeHandle} id="add-time-button">
                                {timeMarkEnabled === true ? (
                                    <AlarmOffIcon />
                                ) : (
                                        <AlarmAddIcon />
                                    )}
                            </IconButton>
                        </Tooltip>
                    </div>
                    <div id="datetime-input" className="component_hidden">
                        <TextField
                            id="datetime-input"
                            TransitionComponent={Zoom}
                            label="Deadline time"
                            type="datetime-local"
                            defaultValue={LocalTimeISO.toString()}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={this.changeTimeMarkHandle}
                        />
                    </div>
                </div>
            </Zoom>
        )
    }
}

export default InputContainer;
