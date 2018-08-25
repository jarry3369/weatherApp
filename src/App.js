import React, { Component } from 'react';
import './App.css';
import Weather from './components/Weather';

class App extends Component {

  state = {
    isLoaded: true,
    error: null,
    temperature: null,
    name: null,
    windVol: null,
    region: null,
    humidity: null,
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: error
        });
      }
    );
  }

  _getWeather = (lat, lon) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3a78dde5f88f540439876cfa064cea32`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.setState({
        temperature:json.main.temp,
        name:json.weather[0].main,
        windVol:json.wind.speed,
        region:json.name,
        isLoaded:true,
        humidity:json.main.humidity,
      })
    })
  }

  render() {
    const { isLoaded, error, temperature, windVol, name, region, humidity, } = this.state;
    return (
      <div className="App">
        <Weather hum={humidity} region={region} weatherName={name} temp={ Math.floor(temperature - 273.15)} wind={Math.floor(windVol)}></Weather>
      </div>
    );
  }
}

export default App;
