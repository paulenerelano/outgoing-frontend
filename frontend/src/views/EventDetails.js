import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const details = {
    eventName : "Umbrella Academy Hackathon",
    description : "Come on let's go to umbrella academy hackathon",
    pitch : "Come on let's go!!",
    date : "2019-06-12",
    location : "Mandaluyong City",
    numAttendees : 20
}

export default class EventDetails extends Component {
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
