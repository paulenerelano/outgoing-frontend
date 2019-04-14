import React, { Component } from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Jumbotron from 'react-bootstrap/Jumbotron'
import './EventDetails.css';

const apiInterface = require("../api/eventapi.js")();

const details = {
    eventName : "Umbrella Academy Hackathon",
    description : "Come on let's go to umbrella academy hackathon",
    pitch : "Come on let's go!! Pitchy pitchy pitch",
    date : "2019-06-12",
    location : "Mandaluyong City",
    numAttendees : 20,
    image : "/images/tmp.JPG",
};
//
// axios.post(process.env.PUBLIC_URL + 'http://localhost:4000/todos/add', do)
//             .then(res => console.log(res.data));
// this.props.match.params.id

const jumboStyle = {
    backgroundImage: 'url(' + process.env.PUBLIC_URL + details.image + ')'
};

export default class EventDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "5cb1caed15319300178c2f55",
            eventName : "Umbrella Academy Hackathon",
            description : "Come on let's go to umbrella academy hackathon",
            pitch : "Come on let's go!! Pitchy pitchy pitch",
            date : "2019-06-12",
            location : "Mandaluyong City",
            numAttendees : 20,
            image : "/images/tmp.JPG",};

    }
    componentDidMount() {
      var retVal = apiInterface.getEventDetails(this.state.id);
      retVal.then(response => {
        if(response.length > 0){
          this.setState({
          eventName :response.data.name,
          location : response.data.location,
          description : response.data.description,
          pitch : response.data.pitch});
        }
      })
      .catch(function (error){
        console.log(error);
      })
    }
    render() {
        return (
            <div>
                <Jumbotron style={jumboStyle} fluid className="event-jumbotron">
                    <h1>{this.state.eventName}</h1>
                    <p>
                      {this.state.pitch}
                    </p>
                </Jumbotron>
                <Grid container spacing={24}>
                    <Grid item xs={6}>
                        <Paper className="eventName">{this.state.date}</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className="eventName">{this.state.location}</Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className="eventName">{this.state.description}</Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
