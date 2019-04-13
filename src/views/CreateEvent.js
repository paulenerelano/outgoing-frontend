import React from 'react';
import "date-fns";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';

const apiInterface = require("../api/eventapi.js")();


const styles = theme => ({
});

class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      summary: '',
      description: '',
      location: '',
      startdate: new Date('2019-04-09T21:11:54'),
      enddate: new Date('2014-04-10T21:11:54'),
      duration: 0,
      open: true,
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleStartDateChange = date => {
    this.setState({ startdate: date });
  };

  handleEndDateChange = date => {
    this.setState({ enddate: date });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.props.history.push("/#/event/list/");
  };

  handleSubmit = (e) => {

    e.preventDefault();
    // this.setState({ open: false });
    console.log("-----------------------------------------" + this.state.name)

    const newOutgoing = {
      name: this.state.name,
      description: this.state.description,
      location: this.state.location,
      summary: this.state.summary,
      startdate: this.state.startdate,
      enddate: this.state.enddate
    };

    var retVal = apiInterface.createEvent(newOutgoing);
    retVal.then(response => {
      this.props.history.push("/#/event/list/");
    })
    .catch(function (error){
      console.log(error);
    })

  };

  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Post Event</DialogTitle>
          <form id="eventId"
            className="form-add"
            validate="true"
            autoComplete="off"
            onSubmit={this.handleSubmit}>
            <DialogContent>
              <DialogContentText>
                Bring people together with a public event.
              </DialogContentText>
              <TextField
                required
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                value={this.state.name}
                onChange={this.handleChange('name')}
                fullWidth={true}
              />
              <TextField
                required
                margin="dense"
                id="summary"
                label="Summary"
                value={this.state.summary}
                onChange={this.handleChange('summary')}
                fullWidth={true}
              />
              <TextField
                required
                margin="dense"
                id="location"
                label="Location"
                value={this.state.location}
                onChange={this.handleChange('location')}
                fullWidth={true}
              />
              <TextField
                required
                margin="dense"
                id="description"
                label="Description"
                fullWidth={true}
                multiline
                rows="3"
                value={this.state.description}
                onChange={this.handleChange('description')}
              />
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around" fullWidth={true}>
                  <DatePicker
                    margin="normal"
                    label="Start Date"
                    value={this.state.startdate}
                    onChange={this.handleStartDateChange}
                  />
                  <TimePicker
                    margin="normal"
                    label="Start Time"
                    value={this.state.startdate}
                    onChange={this.handleStartDateChange}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around" fullWidth={true}>
                  <DatePicker
                    margin="normal"
                    label="End Date"
                    value={this.state.enddate}
                    onChange={this.handleEndDateChange}
                  />
                  <TimePicker
                    margin="normal"
                    label="End Time"
                    value={this.state.enddate}
                    onChange={this.handleEndDateChange}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Create
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}
CreateEvent.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(CreateEvent);
