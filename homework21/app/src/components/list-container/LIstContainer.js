import React from 'react';
import {
    CircularProgress,
    Backdrop,
    Zoom
} from '@material-ui/core';
import EditableRow from '../editable-row/EditableRow.js';

import { AllInclusive as EternityIcon } from '@material-ui/icons';

import './ListContainer.css';

class ListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editedRow: null
        }
    }
    setEditedRow = (value) => {
        this.setState({ editedRow: value })
    }

    render() {
        const { array, deleteCallback, pendingStatus, doneTaskCallback, changeTaskCallback } = this.props;
        return (
            <Zoom in={true}>
                <div className="list-container">
                    {array.length > 0 ? (
                        <>
                            {pendingStatus === true ? (
                                <>
                                    <Backdrop open={pendingStatus}>
                                        <CircularProgress color="inherit" />
                                    </Backdrop>
                                </>
                            ) : (array.map((item, index) => (
                                <EditableRow
                                    key={`rowID${item.taskID}`}
                                    object={item}
                                    index={index}
                                    editedRow={this.state.editedRow}
                                    setEditedRow={this.setEditedRow}
                                    deleteCallback={deleteCallback}
                                    doneTaskCallback={doneTaskCallback}
                                    changeTaskCallback={changeTaskCallback}
                                />
                            )))}
                        </>
                    ) : (
                            <>
                                <div className="large-icon_size">
                                    <EternityIcon fontSize="inherit" />
                                </div>
                                There is no "DO" to do
                            </>
                        )}
                </div>
            </Zoom>
        )
    }
}

export default ListContainer