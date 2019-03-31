import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import logo from './logo.svg'

import CreateEvent from "./views/CreateEvent";
import ListEvent from "./views/ListEvent";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class App extends Component {
  
  render() {
    return (
      <Router>
         <AppBar position="static">
        <Toolbar>
          <IconButton className="ssss" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className="grow">
            OutGoing
          </Typography>
          <Button component={Link} to="/" color="inherit">Event List</Button>
          <Button component={Link} to="/create" color="inherit">Create Event</Button>
        </Toolbar>
      </AppBar>
        <div className="container">
          <Route path="/create" exact component={CreateEvent} />
          <Route path="/" exact component={ListEvent} />
        </div>
      </Router>
    );
  }
}

export default App;
