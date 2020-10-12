import React from 'react';
import { Route, BrowserRouter as Router, Switch, } from 'react-router-dom';
import Dashboard from '../src/components/Dashboard/Dashboard';

const Routes = (props) =>
    (
        <Router>
            <Switch>
                <Route exact path="/home" component={Dashboard} />
            </Switch>
        </Router>
    )
export default Routes;