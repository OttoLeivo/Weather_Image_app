import React, { Component } from "react";
require("dotenv").config();

const api_key = process.env.REACT_APP_API_KEY;
let temperature = "";
class Weather extends Component {
  constructor() {
    super();
    this.state = {
      city: "sunny af"
    };
  }

  //after component mounted get api and re render
  componentDidMount() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=helsinki&appid=${api_key}`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        console.log(data.name);
        temperature = KelvinToCelsius(data.main.temp);
        this.setState({ city: data.name });
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.city}</h1>
        <h1>{temperature}&deg;</h1>
      </div>
    );
  }
}

function KelvinToCelsius(data1) {
  return Math.floor(data1 - 274.15);
}

export default Weather;
