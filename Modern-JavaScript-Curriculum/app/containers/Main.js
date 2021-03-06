var React = require('react');
var GetCityContainer = require('./GetCityContainer');

var styles = {
  container: {
    width: '100%',
    height: '92%'
  },
  header :{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(252, 90, 44, 0.89)',
    color: '#fff',
    padding: 5,
  }
}


class Main extends React.Component{
  render(){

    return(
        <div style={styles.container}>
          <div style={styles.header}>
            <h2 style={{margin: 0}}>Clever Title</h2>
            <GetCityContainer direction='row' />
          </div>
        </div>

    )
  }




}


export default Main;