const React=require('react');
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from '../containers/Main';
import HomeContainer from '../containers/HomeContainer';
import ForecastContainer from '../containers/ForecastContainer';
import DetailContainer from '../containers/DetailContainer';

class Routes extends React.Component{

    render(){
        return(

            <Router>
                <Main />
                <Switch>
                   <Route exact path="/" component={HomeContainer}></Route>
                    <Route path="/forecast" component={ForecastContainer}></Route>
                    <Route path="/detail" component={DetailContainer}></Route>
                    <Route render={function(){<h1>Path not exist</h1>}}></Route>
                </Switch>
            </Router>
        );
    }
}

export default Routes;