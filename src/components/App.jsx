import React, { Fragment } from 'react';

import LoginPage from './LoginPage';

import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import Home from './Homes';

const App = () =>
{
    return(
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/Home" component={withRouter(Home)} exact />
                    <Route path="/LoginPage" component={withRouter(LoginPage)} exact />
                </Switch>
            </BrowserRouter>
        </>
    )

};

export default App;