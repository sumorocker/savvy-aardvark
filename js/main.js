import React  from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';

import App from './components/App';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Search from './components/Search';
import SearchResult from './components/SearchResult';
import SignIn from './components/FormSignIn';
import SignUpPart1 from './components/FormSignUpPart1';
import SignUpPart2 from './components/FormSignUpPart2';

import Diet from './components/Diet';
import MoreInfo from './components/MoreInfo';

var routes = (
    <Router history={createHistory()}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="signin" component={SignIn}/>
            <Route path="signup" component={SignUpPart1}/>
            <Route path="signup-name" component={SignUpPart2}/>
            <Route path="diet" component={Diet}/>
            <Route path="search" component={Search}/>

            {/* This should be dynamic and change to match the actual term searched */}
            <Route path="search-result" component={SearchResult}/>

            <Route path="moreinfo" component={MoreInfo}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>
)

ReactDOM.render(routes, document.querySelector('#app'));
