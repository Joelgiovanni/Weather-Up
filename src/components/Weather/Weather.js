import React, { Component } from 'react';

class Weather extends Component {
  render () {
    return (
      <div>
        { this.props.city && this.props.country && <h1> City: {this.props.city}, {this.props.country}</h1>}
        { this.props.temperature &&  <h1>Temperature: {this.props.temperature} </h1> }
        { this.props.humidity && <h1>Humidity: {this.props.humidity} </h1> }
        { this.props.description && <h1>Description: {this.props.description} </h1> } 
        { this.props.error && <h1> {this.props.error} </h1>}
      </div>
    )
  }
}

export default Weather;