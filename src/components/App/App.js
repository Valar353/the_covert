import React from 'react';
// import style from './App.module.scss';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import StaffContainer from "../../containers/StaffContainer";
import PersonalPageContainer from "../../containers/PersonalPageContainer";

export default class App extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={StaffContainer}/>
                    <Route path="/PersonalPage/:id" component={PersonalPageContainer} />
                </Switch>
            </Router>
        );
    }
}