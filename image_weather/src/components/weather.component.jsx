import React, { Component } from 'react';
require('dotenv').config();

const api_key = process.env.REACT_APP_API_KEY;
class Weather extends Component {

    state = {  }
    render() { 
        console.log(`http://api.openweathermap.org/data/2.5/weather?q=helsinki&appid=${api_key}`)
        return ( <div>
            <h1>QUITE RAINY</h1>
            
        </div> );
    }
}
 
export default Weather;