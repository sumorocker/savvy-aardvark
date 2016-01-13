import React  from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, IndexRoute, Navigation } from 'react-router';
import { createHistory } from 'history';

import App from './components/App';
import Header from './components/Header';
import Nav from './components/Nav';

import NotFound from './components/NotFound';
import Search from './components/Search';
import SearchName from './components/SearchName';
import SearchUPC from './components/SearchUPC';
import SearchResult from './components/SearchResult';
import SignIn from './components/FormSignIn';
import UserProfile from './components/UserProfile';
import FormSignUp1 from './components/FormSignUp1';
import FormSignUp2name from './components/FormSignUp2name';
import FormSignUp3diet from './components/FormSignUp3diet';
import FormSignUp4ingr from './components/FormSignUp4ingr';
import MoreInfo from './components/MoreInfo';
import SearchResultProduct from './components/SearchResultProduct';

import Result from './components/Result';



function mustBeLoggedIn(route, replaceState) {
    if (!Parse.User.current()) {
        replaceState(null, '/signup');
    }
}

function frontPageDisplay(route, replaceState) {
    if (!Parse.User.current()) {
        replaceState(null, '/signup');
    } else {
        replaceState(null, '/search');
    }
}

var routes = (
    <Router history={createHistory()}>
        <Route path="/" component={App}>
            <IndexRoute onEnter={frontPageDisplay}/>
            <Route path="signin" component={SignIn}/>
            <Route path="signup" component={FormSignUp1}/>

            <Route onEnter={mustBeLoggedIn}>
                <Route path="userprofile" component={UserProfile}/>
                <Route path="signup-name" component={FormSignUp2name}/>
                <Route path="diet" component={FormSignUp3diet}/>
                <Route path="ingredients" component={FormSignUp4ingr}/>
                <Route path="search" component={Search}/>

                <Route path="/search-result/:id" component={SearchResult}/>
                <Route path="/search-result/product/:upc" component={SearchResultProduct}/>
                <Route path="result" component={Result}/>

            </Route>
            <Route path="moreinfo" component={MoreInfo}/>
            <Route path="*" component={NotFound}/>

        </Route>
    </Router>
)

ReactDOM.render(routes, document.querySelector('#app'));
