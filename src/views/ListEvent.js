import React, { Component } from 'react';
import EventItem from './EventItem';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const apiInterface = require("../api/eventapi.js")();

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


class ListEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {events: []};
  }

  componentDidMount() {
    var retVal = apiInterface.getAllEvents();
    retVal.then(response => {
      this.setState({ events: response.data });
    })
    .catch(function (error){
      console.log(error);
    })
  }

  render() {

    return (
      <Grid container spacing={24}>
        {this.state.events === undefined  || this.state.events.length? 
          "No Items to show" :
          this.state.events.map((event, index) => (
            <EventItem
              key={index}
              name={event.name}
              date={event.startdate}
              location={event.location}
              summary={event.summary}
              image="event.jpg"/>
          )) }
        </Grid>
    )
  }
}

ListEvent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListEvent);