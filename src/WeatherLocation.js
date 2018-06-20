import React, { Component } from 'react'

class WeatherLocation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            location: {
               list: [
                   {
                    main: {
                    //    "temp": ''
                    },

                    weather: [
                        {
                            // "main": '',
                            // "description": ''
                        }
                    ]
                }
               ],
               city: {
                    // "name": '',
               }
            }
        }

        this.fetchLocation()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.location !== this.props.match.params.location) {
            this.fetchLocation()
        }
    }

    fetchLocation = () => {
        const { params } = this.props.match
        fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${params.location}&APPID=41c25b5daf4dfde75e43bce1a5517795&units=imperial`)
            .then(response => response.json())
            .then(location => this.setState({ location }))
    }

    render() {
        const { location } = this.state
        return (
            <div className="WeatherLocation">
                <h1>City: {location.city.name}</h1>
                <h3>Temperature: {location.list[0].main.temp} °F</h3>
                <h3>Weather Description: {location.list[0].weather[0].description}</h3>
            </div>
        )
    }
}

export default WeatherLocation
