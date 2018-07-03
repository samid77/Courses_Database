import React, { Component } from 'react';
import axios from 'axios';
const API_KEY = "609f071c6fd022adf53afc494fbd2f34";

class Weather extends Component {
  state = {
      temperature: undefined,
      humidity: undefined,
      city: undefined,
      description: undefined,
  }
  findWeather = (e) => {
    e.preventDefault();

    var namaKota = this.refs.city.value;
    var namaNegara = this.refs.country.value;

    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${namaKota},${namaNegara}&appid=${API_KEY}&units=metric`).then((ambilData)=> {
        console.log(ambilData);
        this.setState({
            city: ambilData.data.name,
            country: ambilData.data.sys.country,
            humidity: ambilData.data.main.humidity,
            temperature: ambilData.data.main.temp,
        });

    });

    console.log(namaKota);
    console.log(namaNegara);
  }
  render() {
    return (
      <div className="container">
        <div className="col-md-10">
            <h2>Weather API</h2><hr style={{border: '1px solid black'}}/>
            <form method="post" onSubmit={this.findWeather.bind(this)}>
                <div className="col-md-5">
                    <div className="form-group">
                        <label>City Name:</label>
                        <input type="text" className="form-control" ref="city"/>
                    </div>
                    <div className="form-group">
                        <label>Country Name:</label>
                        <input type="text" className="form-control" ref="country"/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success btn-md" type="submit">Search</button>
                    </div>
                </div>
            </form>
            <table className="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Country</th>
                        <th>Temperature</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.state.city}</td>
                        <td>{this.state.country}</td>
                        <td>{this.state.temperature}</td>
                        <td>{this.state.humidity}</td>
                    </tr>
                </tbody>
            </table> 
        </div>
      </div>
    )
  }
}
export default Weather;
