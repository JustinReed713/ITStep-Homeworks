import React from 'react';
import { Button, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

import { pasteCount } from '../../utils';
import { snackbarData } from '../../globals';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class UseSnackbar extends React.Component {

    render() {
        const {
            model,
            statusCode,
            handleSnackbarClose,
            snackbarAlertHandle,
            anchorOrigin,
            expectedCode
        } = this.props;

        return (
            <>
                {expectedCode.includes(statusCode) && (
                    <Snackbar
                        anchorOrigin={anchorOrigin}
                        open={statusCode !== null}
                        autoHideDuration={
                            ((snackbarData[statusCode].actionType === "clear") ||
                                (snackbarData[statusCode].actionType === "restore")) ?
                                null :
                                6000
                        }
                        onClose={handleSnackbarClose}
                    >
                        <Alert
                            onClose={handleSnackbarClose}
                            severity={snackbarData[statusCode].severity}
                            action={
                                <>
                                    {snackbarData[statusCode].actionEnable && (
                                        <Button
                                            color="inherit"
                                            size="small"
                                            onClick={snackbarAlertHandle}
                                        >
                                            {snackbarData[statusCode].actionType === "restore" ? "Undo" : (
                                                snackbarData[statusCode].actionType === "clear" ? "Clear" : ""
                                            )}
                                        </Button>
                                    )}
                                </>
                            }
                        >
                            {snackbarData[statusCode].actionType === "clear" ? pasteCount(model, snackbarData[statusCode].alertContent) :
                                snackbarData[statusCode].alertContent}
                        </Alert>
                    </Snackbar >
                )}
            </>
        )
    }
}

export default UseSnackbar
