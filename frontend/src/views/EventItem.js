import React, { Component } from 'react';
import './EventItem.css';


class EventItem extends Component{


  render() {
    return (
      <div className="event-item-container">
        <h2>{this.props.name}</h2>
        <p>{this.props.date}</p>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default EventItem;