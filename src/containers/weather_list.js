import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../Components/google_map';

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp*9/5 - 459.67);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const {lat, lon} = cityData.city.coord;
    // Same as...
    // const lat = cityData.city.coord.lat;
    // const lon = cityData.city.coord.lon;
    //console.log(temps);

    return (
      <tr key={name}>
        <td> <GoogleMap lat={lat} lon={lon} /> </td>
        <td> <Chart data={temps} color="orange" units="F"/> </td>
        <td> <Chart data={pressure} color="blue" units="hPa"/> </td>
        <td> <Chart data={humidity} color="red" units="%"/> </td>
      </tr>
        )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

//function mapStateToProps(state) {
//  // we use 'state.weather' because that is the name of the key in the
//  // root reducer in ../reducers/index.js
//  return { weather: state.weather };
//}

//function mapStateToProps({weather}) {
//  return { weather: weather }
//}

// The following function is equivalent to the above 2 functions
function mapStateToProps({weather}) {
  return { weather } // Same as { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);
