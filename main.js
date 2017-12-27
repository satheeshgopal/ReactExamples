import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HelloUser from './src/Ex.1.Props/HelloUser';
import IncrementCount from './src/Ex.2.State/IncrementCount';
import UserInput from './src/Ex.3.UserInput/UserInput';
import InlineStyles from './src/Ex.4.InlineStyles/InlineStyles';

ReactDOM.render(
    <BrowserRouter >
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/HelloUser' render={() => <HelloUser name="Satheesh" />} />
            <Route path='/IncrementCount' component={IncrementCount} />
            <Route path='/UserInput' component={UserInput} />
            <Route path='/InlineStyles' component={InlineStyles} />
        </Switch>
    </BrowserRouter >, document.getElementById('app'));