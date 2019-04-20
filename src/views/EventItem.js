import React, { Component } from 'react';
import './EventItem.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
  },
  location: {
    textAlign: 'right',
  },
  media: {
    maxHeight: 140,
    width: '100%',
  },
  mediaContainer: {
    height: 140,
  },
});

class EventItem extends Component{

  render() {
    const { classes } = this.props;
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var dateVal = new Date(this.props.date).toLocaleDateString("en-US", options);
    
    return (
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            
            <span className={classes.mediaContainer}>
            <img className={classes.media} src={this.props.image} alt="Logo"/>
            </span>
            <div onClick={this.props.detailshandler}>
            <h2>{this.props.name}</h2>
            <p>{dateVal}</p>
            <p>{this.props.summary}</p>
            <p className={classes.location}>{this.props.location}</p>
            </div>
          </Paper>
        </Grid>
    )
  }
}

EventItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventItem);