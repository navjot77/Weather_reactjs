const React=require('react');
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from '../containers/Main';
import HomeContainer from '../containers/HomeContainer';
import ForecastContainer from '../containers/ForecastContainer';


class Routes extends React.Component{


    render()
{
        return(

            <Router>
                <div>
                <Main />
                <Switch>
                   <Route  exact path="/" component={HomeContainer}></Route>
                    <Route path="/forecast" component={ForecastContainer}></Route>


                    <Route render={function(){<h1>No Page Found</h1>}}></Route>

                </Switch>

                </div>
            </Router>
        );
    }
}

export default Routes;