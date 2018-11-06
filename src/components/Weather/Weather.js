import React, { Component } from 'react';
import classes from './Weather.module.css';

class Weather extends Component {
  render () {
    return (
      <div className={classes.Weather}>
        { this.props.city && this.props.country && <h1> City: {this.props.city}, {this.props.country}</h1>}
        { this.props.temperature &&  <h1>Temperature: {this.props.temperature} </h1> }
        { this.props.humidity && <h1>Humidity: {this.props.humidity} </h1> }
        { this.props.description && <h1>Description: {this.props.description} </h1> } 
        { this.props.icon && <h1><img className={classes.Icon} src={this.props.icon} alt="Weather icon"></img> </h1> } 
        { this.props.error && <h1 className={classes.Error}> {this.props.error} </h1>}
      </div>
    )
  }
}

export default Weather;