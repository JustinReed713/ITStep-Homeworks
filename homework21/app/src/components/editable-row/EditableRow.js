import React from 'react';
import './EditableRow.css'
import {
    IconButton,
    TextField,
    Tooltip,
    Zoom
} from '@material-ui/core';
import {
    Done as DoneIcon,
    Edit as EditIcon,
    AlarmAdd as AlarmAddIcon,
    AlarmOff as AlarmOffIcon,
    DeleteForever as DeleteForeverIcon
} from '@material-ui/icons';

import { UseSnackbar } from '../../components';

import { LocalTimeISO } from '../../utils';

class EditableRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueOnEdit: "",
            dateOnEdit: "",
            onEdit: false,
            dateEdit: false,
            snackbarOpen: false
        }
    }

    /* Life cycle methods */

    inputCompleteStyler = (DOMElement) => {
        const { object } = this.props;
        if (object.doneStatus === true) {
            DOMElement.setAttribute('disabled', true);
            if (object.successfulStatus === true) {
                DOMElement.classList.add("editable-field_done-successful");
            }
            else {
                DOMElement.classList.add("editable-field_done-unsuccessful");
            }
        }
    }

    componentDidMount() {
        const { object } = this.props;
        const input = document.getElementById("field" + object.taskID);
        input.setAttribute('readonly', true);
        this.inputCompleteStyler(input);
    }

    componentDidUpdate(prevProps) {
        const { object } = prevProps;
        const input = document.getElementById("field" + object.taskID);
        this.inputCompleteStyler(input);
    }

    /* Edit Task methods  */

    setDateEdit = () => {
        const { dateEdit } = this.state;
        this.setState({ dateEdit: !dateEdit });
    }

    removeHandle = () => {
        this.props.deleteCallback(this.props.index);
    }

    doneHandle = () => {
        if (this.state.onEdit) {
            const { valueOnEdit, dateOnEdit } = this.state;
            const field = document.getElementById("field" + this.props.object.taskID);
            field.setAttribute('readonly', true);
            this.props.changeTaskCallback({
                description: valueOnEdit === "" ? this.props.object.description : valueOnEdit,
                timeMark: dateOnEdit === "" ? this.props.object.timeMark : dateOnEdit
            }, this.props.index);
            this.props.setEditedRow(null);
            this.setState({ onEdit: false, dateEdit: false, dateOnEdit: "", valueOnEdit: "" })
        } else {
            this.props.doneTaskCallback(this.props.index);
        }
    }

    editHandle = () => {
        const { object, setEditedRow } = this.props;
        this.setState({ onEdit: true });
        setEditedRow(object.taskID);
        const field = document.getElementById("field" + object.taskID);
        field.removeAttribute('readonly');
        field.focus();
    }

    onChangeInputHandle = (event) => {
        this.setState({ valueOnEdit: event.target.value });
    }

    enterButtonHandle = (event) => {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("row-done-button").click();
        }
    }

    changeTimeMarkHandle = (event) => {
        if (event.target.value < LocalTimeISO.toString()) {
            event.target.value = LocalTimeISO.toString()
            this.setState({
                dateOnEdit: "",
                snackbarOpen: 2
            });
        } else {
            this.setState({ dateOnEdit: event.target.value });
        }
    }

    /* Snackbar methods */

    handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ snackbarOpen: null });
    };

    /* Render EditableRow component */

    render() {
        const { index, object, editedRow } = this.props;
        const { onEdit, dateEdit, snackbarOpen } = this.state;
        return (
            <div className="row-style">
                <div className="row-first-line">
                    <div className="row-first-line__text-group-wrapper">
                        <div className="row-first-line__number-description-group">
                            <div className="task-number">
                                {`${index + 1}.`}
                            </div>
                            <>
                                <input
                                    className={'editable-field'}
                                    id={"field" + object.taskID}
                                    type="text"
                                    defaultValue={object.description}
                                    onChange={this.onChangeInputHandle}
                                    onKeyUp={this.enterButtonHandle}
                                />
                            </>
                        </div>
                        {((object.timeMark !== "") && (object.doneStatus !== true)) && (
                            <div className="time-mark">
                                {LocalTimeISO.toViewFormat(object.timeMark)}
                            </div>
                        )}
                    </div>
                    {object.doneStatus === false &&
                        ((editedRow === null) ||
                            (editedRow === object.taskID)) && (
                            <div className="control-buttons-group">
                                <Tooltip TransitionComponent={Zoom} title={onEdit ? "Confirm change" : "Complete task"}>
                                    <IconButton id="row-done-button" aria-label="done" onClick={this.doneHandle}>
                                        <DoneIcon />
                                    </IconButton>
                                </Tooltip>
                                {onEdit === true && (
                                    <>
                                        <Tooltip
                                            TransitionComponent={Zoom}
                                            title={object.timeMark === "" ? "Add deadline time" : (dateEdit ? "Close editing deadline time dialog" : "Edit deadline time")}
                                        >
                                            <IconButton aria-label="add" onClick={this.setDateEdit} id="add-time-button">
                                                {dateEdit ? (
                                                    <AlarmOffIcon />
                                                ) : (
                                                        <AlarmAddIcon />
                                                    )}
                                            </IconButton>
                                        </Tooltip>
                                    </>
                                )}
                                {onEdit === false && (
                                    <>
                                        <Tooltip TransitionComponent={Zoom} title="Edit task">
                                            <IconButton aria-label="edit" onClick={this.editHandle}>
                                                <EditIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip TransitionComponent={Zoom} title="Delete task">
                                            <IconButton aria-label="delete" onClick={this.removeHandle} >
                                                <DeleteForeverIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </>
                                )}
                            </div>
                        )}
                </div>
                {onEdit && (
                    <div id="datetime-input" className={dateEdit ? "" : `component_hidden`}>
                        <TextField
                            id="datetime-input"
                            TransitionComponent={Zoom}
                            label="Deadline time"
                            type="datetime-local"
                            defaultValue={object.timeMark === "" ? LocalTimeISO.toString() : object.timeMark}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={this.changeTimeMarkHandle}
                        />
                    </div>
                )
                }
                <UseSnackbar
                    statusCode={snackbarOpen}
                    handleSnackbarClose={this.handleSnackbarClose}
                    expectedCode={[2]}
                />
            </div >
        )
    }
}

export default EditableRow;