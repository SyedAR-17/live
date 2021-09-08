import React, { Fragment } from 'react';
import Nav from './Navbar';
import Main from './Main';
import Maindiv from './Maindiv';
import PlansDiv from './PlanDiv.jsx';
import PlanHeader from './PlanHeader';
import Footer from './Footer';
import LoginPage from './LoginPage';
import { Component } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import Home from './Homes';

const App = () =>
{
    return(
        <>
            <Switch>
                <Route path="/Home" exact component={withRouter(Home)} />
                <Route path="/LoginPage" component={withRouter(LoginPage)} exact />
                <Route path="/Maindiv" component={withRouter(Maindiv)} exact />
                <Route path="/Footer" component={withRouter(Footer)} exact />
            </Switch>
        </>
    )

};

export default App;