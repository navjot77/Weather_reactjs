var React = require('react');
var PropTypes = React.PropTypes;
import  {Link} from 'react-router-dom'

function Button (props) {
  return (
    <button type='button'
      style={{margin: 10}}
      className='btn btn-success'
     >
        {props.children}
    </button>
  )
}

function InputField (props) {
  return (
    <input
      className='form-control'
      onChange={props.onUpdateCity}
      placeholder='St. George, Utah'
      type='text'
      value={props.city} />
  )
}

function getStyles () {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 300,
    alignSelf: 'right'
  }
}

function GetCity (props) {
  return (
    <div style={getStyles(props)}>
      <InputField

        onUpdateCity={props.onUpdateCity}
        city={props.city} />

        { props.city && <Link to={
          {pathname: '/forecast',
              search:'?city='+props.city}
      }>
          <Button>
            Get Weather
          </Button>
        </Link>

          }


    </div>
  )
}



module.exports = GetCity;