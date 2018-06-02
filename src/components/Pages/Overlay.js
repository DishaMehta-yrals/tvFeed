import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import Schedule from '../Pages/Schedule';
/**
 * Dialogs can be nested. This example opens a Date Picker from within a Dialog.
 */
export default class DialogExampleDialogDatePicker extends React.Component {
  state = {
    open: true,

  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
 
 getAlert() {
    this.setState({open: true});
    // alert('getAlert from Child');
  }
  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <Dialog
          className='check'
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <DatePicker hintText="Pick a date" />
          <Schedule />
        </Dialog>
      </div>
    );
  }
}