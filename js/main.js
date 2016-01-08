import React  from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';

import App from './components/App';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Search from './components/Search';
import SignIn from './components/FormSignIn';
import SignUp from './components/FormSignUp';
import SignUpDiet from './components/SignUpDiet';
import MoreInfo from './components/MoreInfo';

var routes = (
    <Router history={createHistory()}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="search" component={Search}/>
            <Route path="signin" component={SignIn}/>
            <Route path="signup" component={SignUp}/>
            <Route path="signupdiet" component={SignUpDiet}/>
            <Route path="moreinfo" component={MoreInfo}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>
)

ReactDOM.render(routes, document.querySelector('#app'));
