import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './OpenWeatherMap.css'
import WeatherLocation from './WeatherLocation';

class OpenWeatherMap extends Component {

    state = {
        location: '',
    }

    handleChange = (ev) => {
        this.setState({ location: ev.target.value })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/openweathermap/${this.state.location}`)
    }

    render() {
        return (
            <div className="OpenWeatherMap">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/15/OpenWeatherMap_logo.png"
                    alt="OpenWeatherMap"
                    className="logo"
                />
                <a href="http://openweathermap.org/help/city_list.txt" target="_blank">
                    <h2>Follow this link and use the first column to get city IDs</h2>
                </a>
                <h4>(The link may take a little time to load. Please wait patiently)</h4>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder="Enter a city ID"
                            value={this.state.location}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">
                            Look up weather of city
                        </button>
                    </div>
                </form>
                <Route path="/openweathermap/:location" component={WeatherLocation} />
            </div>
        )
    }
}

export default OpenWeatherMap