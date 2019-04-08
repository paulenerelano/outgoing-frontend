import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const details = new Object();
details.eventName = "Umbrella Academy Hackathon"
details.description = "Come on let's go to umbrella academy hackathon"
details.pitch = "Come on let's go!!"
details.date = "2019-06-12"
details.location = "Mandaluyong City"
details.numAttendees = 20

export default class ViewDetails extends Component {
    render() {
        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Paper className="eventName">{details.eventName}</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className="eventName">{details.date}</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className="eventName">{details.location}</Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className="eventName">{details.description}</Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className="eventName">{details.pitch}</Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
