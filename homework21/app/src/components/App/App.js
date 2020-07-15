import React from 'react';
import { Header, ListContainer, InputContainer, UseSnackbar } from '../../components';
import { LocalTimeISO } from '../../utils';
import { snackbarData } from '../../globals';
import './App.css';





class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      model: [],
      draft: null,
      onPending: false,
      snackbarStatusCode: null
    }
  }

  /* Methods for operations with model elements */

  addTaskHandle = (object) => { /* Add new Task */
    const { model } = this.state;
    model.push(object);
    this.setState({ model: model, snackbarStatusCode: 1 });
  }

  changeTaskHandle = (object, index) => { /* Change Task object from List container */
    const { model } = this.state;
    Object.assign(model[index], object)
    this.setState({
      model: model,
      onPending: false,
    })
  }

  doneTaskHandle = (index) => { /* Set done status of Task */
    const { model } = this.state;
    model[index].doneStatus = true;
    model[index].successfulStatus = LocalTimeISO.dateObserver(model[index].timeMark)
    this.setState({
      model: model,
      snackbarStatusCode: 3
    })
  }

  deleteTaskHandle = (index) => { /* Delete Task from model */
    const { model } = this.state;
    this.setState({
      onPending: true
    });
    const object = model.splice(index, 1);
    setTimeout(() => {
      this.setState({
        model: model,
        draft: {
          index: index,
          object: object
        },
        onPending: false,
        snackbarStatusCode: 0
      })
    }, 500)
  }

  /* Methods for Snackbar component */

  setSnackbarStatusCode = (value) => {
    this.setState({ snackbarStatusCode: value })
  }

  handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ snackbarStatusCode: null });
  };

  /* Method for Snackbar with backtracking */

  snackbarAlertHandle = () => {
    const { snackbarStatusCode, model, draft } = this.state;
    switch (snackbarData[snackbarStatusCode].actionType) {
      case "restore": /* Case for restore drafted Task */
        model.splice(draft.index, 0, ...draft.object);
        this.setState({ model: model, draft: null });
        break;
      case "clear": /* Case for cleaning List from Tasks with done status */
        this.setState({
          onPending: true
        });
        const newModel = model.filter((item) => item.doneStatus !== true);
        setTimeout(() => {
          this.setState({
            model: newModel,
            draft: null,
            onPending: false
          });
        }, 500)
        break;
      default: break;
    };
    this.handleSnackbarClose();
  }

  /* Render App method */

  render() {
    const { model, onPending, snackbarStatusCode } = this.state;

    return (

      <div className="App">
        <Header />
        <InputContainer
          addCallback={this.addTaskHandle}
          setStatusCodeCallback={this.setSnackbarStatusCode}
        />
        <ListContainer
          array={model}
          pendingStatus={onPending}
          deleteCallback={this.deleteTaskHandle}
          doneTaskCallback={this.doneTaskHandle}
          changeTaskCallback={this.changeTaskHandle}
        />
        <div className="snackbar-wrapper">
          <UseSnackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            statusCode={snackbarStatusCode}
            model={model}
            handleSnackbarClose={this.handleSnackbarClose}
            snackbarAlertHandle={this.snackbarAlertHandle}
            expectedCode={[0]}
          />
          <UseSnackbar
            statusCode={snackbarStatusCode}
            model={model}
            handleSnackbarClose={this.handleSnackbarClose}
            snackbarAlertHandle={this.snackbarAlertHandle}
            expectedCode={[1, 2]}
          />
          <UseSnackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            statusCode={snackbarStatusCode}
            model={model}
            handleSnackbarClose={this.handleSnackbarClose}
            snackbarAlertHandle={this.snackbarAlertHandle}
            expectedCode={[3]}
          />
        </div>
      </div>
    );
  }
}

export default App
