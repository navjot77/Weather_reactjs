const React=require('react');
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from '../containers/Main';
//import HomeContainer from '../containers/HomeContainer';
//import ForecastContainer from '../containers/ForecastContainer';
//import DetailContainer from '../containers/DetailContainer';

class Routes extends React.Component{

    render(){
        return(

            <Router>
                <Main />

            </Router>
        );
    }
}

export default Routes;