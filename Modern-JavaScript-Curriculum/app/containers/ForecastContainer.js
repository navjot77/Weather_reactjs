var React = require('react');
var Forecast = require('../components/Forecast');
var getForcast = require('../helpers/api').getForcast;
import queryString from 'query-string';


class ForecastContainer extends React.Component{

  constructor(props){
    super(props);
    this.state={
        isLoading: true,
        forecastData: {},
        city:''

    };
    }

  componentDidMount () {
   const {city}=queryString.parse(this.props.location.search);
    this.makeRequest(city);
  }

  componentWillReceiveProps(nextProps) {
    // this.makeRequest(nextProps.routeParams.city)
  }

  async makeRequest(city) {

    const forecastData=await getForcast(city);
    this.setState(function(){
          return (
              {
                  city,
                  isLoading: false,
                  forecastData

              }
          );
        })
   }
  /*
  handleClick(weather) {
    this.context.router.push({
      pathname: '/detail/' + this.props.routeParams.city,
      state: {
        weather: weather
      }
    })
  }
  */
  render() {
    return (
      <Forecast
        city={this.state.city}
        isLoading={this.state.isLoading}
        //handleClick={this.handleClick}
        forecastData={this.state.forecastData} />
    )
  }
};

export default ForecastContainer;