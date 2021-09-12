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
import Login from './LoginPage';

const App = () =>
{
    return(
        <>
            <Home/>
        </>
    )

};

export default App;