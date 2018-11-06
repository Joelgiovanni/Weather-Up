import React, { Component } from 'react';
import classes from './Form.module.css';

class Form extends Component {
  render () {
    return (
      <div className={classes.Container}> 
      <h1 className={classes.Header}>PICK A CITY & A COUNTRY</h1>
        <form className={classes.Form} onSubmit={this.props.getWeather}>
          <input type="text" name="city" placeholder="City.." autoComplete="off"/>
          <input type="text" name="country" placeholder="Country.." autoComplete="off"/>
          <button className={classes.Button}>Get Weather</button>
        </form>
      </div>
    )
  }
}

export default Form;