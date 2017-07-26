var React = require('react');
var Forecast = require('../components/Forecast');
var getForcast = require('../helpers/api').getForcast;
import queryString from 'query-string';

import {Link} from 'react-router-dom';
var Detail = require('../components/Detail');

class ForecastContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            forecastData: {},
            city: '',

            dayWeather:''

        };
        this.handleClick = this.handleClick.bind(this);
    }


    componentDidMount() {
        const {city} = queryString.parse(this.props.location.search);
        this.makeRequest(city);
    }

    componentWillReceiveProps(nextProps) {

        const {city} = queryString.parse(nextProps.location.search);
        this.makeRequest(city);




    }

    async makeRequest(city) {

        const forecastData = await getForcast(city);
        this.setState(function () {
            return (
                {
                    city,
                    isLoading: false,
                    forecastData,
                    dayWeather:''

                }
            );
        })
    }

    handleClick(weather) {
        console.log('clicked',weather)
        this.setState(function () {
            return (
                {

                    dayWeather:weather

                }
            );
        });
    }

    render() {
        const detailsClicked=this.state.dayWeather;
        return (
            <div>

                { !detailsClicked && <Forecast
                    city={this.state.city}
                    isLoading={this.state.isLoading}
                    handleClick={this.handleClick}
                    forecastData={this.state.forecastData}/>
                }

        { detailsClicked && <Detail
            weather={this.state.dayWeather}
            city={this.state.city}/>
        }

            </div>
            )
    }
}

export default ForecastContainer;