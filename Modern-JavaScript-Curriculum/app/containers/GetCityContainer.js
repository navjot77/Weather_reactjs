var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');


class GetCityContainer extends React.Component{
  constructor(props){
    super(props);

      this.state={
        direction:props.direction,
          city:''
      }
      //this.handleSubmitCity=this.handleSubmitCity.bind(this);
      this.handleUpdateCity=this.handleUpdateCity.bind(this);
  }



    handleUpdateCity(e){
        const values=e.target.value;
    this.setState(function() {
      return({
          city: values

      });
    })
    }

    render(){
    return (
        <GetCity

            onUpdateCity={this.handleUpdateCity}
            city={this.state.city} />
    )
}



}


module.exports = GetCityContainer;
