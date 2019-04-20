import React, { Component } from 'react';
import EventItem from './EventItem';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import CircularProgress from '@material-ui/core/CircularProgress';

const apiInterface = require("../api/eventapi.js")();

function getModalStyle() {
  return {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});



class ListEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      open: true,
    };
  }

  componentDidMount() {
    var retVal = apiInterface.getAllEvents();
    retVal.then(response => {
      this.setState({ events: response.data });
      this.handleClose()
    })
    .catch(function (error){
      console.log(error);
      this.handleClose()
    })
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  detailsHandler = (id) => {
    this.props.history.push("/details/" + id);
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              <center><CircularProgress disableShrink /></center>
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              <center>Getting events...</center>
            </Typography>
          </div>
        </Modal>
        <Grid container spacing={24}>
          {this.state.events === undefined  || !this.state.events.length? 
            "No items to show" :
            this.state.events.map((event, index) => (
              <EventItem
                key={index}
                name={event.name}
                date={event.startdate}
                location={event.location}
                detailshandler={() => this.detailsHandler(event._id)}
                summary={event.summary}
                image="event.jpg"/>
            )) }
        </Grid>
      </div>
    )
  }
}

ListEvent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListEvent);