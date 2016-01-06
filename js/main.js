import React  from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';

import App from './components/App';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Search from './components/Search';
import SignUp from './components/SignUp';


var routes = (
    <Router history={createHistory()}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="search" component={Search}/>
            <Route path="signup" component={SignUp}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>
)

ReactDOM.render(routes, document.querySelector('#app'));
