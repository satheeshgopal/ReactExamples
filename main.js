import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HelloUser from './src/Ex.1.Props/HelloUser';

ReactDOM.render(
    <BrowserRouter >
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/HelloUser' render={() => <HelloUser name="Satheesh" />} />
        </Switch>
    </BrowserRouter >, document.getElementById('app'));