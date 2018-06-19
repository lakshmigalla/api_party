import React, { Component } from 'react'

class WeatherLocation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            location: {}
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
        fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${params.location}&APPID=41c25b5daf4dfde75e43bce1a5517795`)
            .then(response => response.json())
            .then(location => this.setState({ location }))
    }

    render() {
        const { location } = this.state

        return (
            <div className="WeatherLocation">
                <h2>{location.message}</h2>
            </div>
        )
        // const list = location.list.main.map (function(loc) {
        //     return (
        //         <div>
        //             {loc.temp}
        //         </div>
        //     )}
        // )
        // return (
        //     <div>
        //         {list}
        //     </div>
        // )
    }
}

export default WeatherLocation