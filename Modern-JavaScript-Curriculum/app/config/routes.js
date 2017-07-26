const React=require('react');
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from '../containers/Main';
import HomeContainer from '../containers/HomeContainer';
import ForecastContainer from '../containers/ForecastContainer';
//import DetailContainer from '../containers/DetailContainer';

class Routes extends React.Component{
   //
    //<Route path="/detail" component={DetailContainer}></Route>
    //<Route render={function(){<h1>Path not exist</h1>}}></Route>


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