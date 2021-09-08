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

const Homes = () =>
{
    return(
        <> 
            <Nav id='mainNav' linkOne='LoginPage' linkTwo='#SecondGrid' linkThree='#footer'/>
            <Main/>
            <Maindiv/>
            <PlanHeader/>
            <PlansDiv/>
            <Footer/>   
        </>
    )

};
export default Homes;
