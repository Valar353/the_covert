import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.scss';
import AppContainer from './containers/AppContainer';
import {store} from './redux/Store';
import { initStaff} from "./redux/action";

initState();

ReactDOM.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>
    , document.getElementById('root'));


function initState() {
    store.dispatch(initStaff());
}