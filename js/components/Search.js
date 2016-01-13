import React from 'react';
import request from 'superagent';
import {Link} from 'react-router';

import Formsy from 'formsy-react';
import FormInput from './FormInput';
import SearchName from './SearchName';
import SearchUPC from './SearchUPC';

import Parse from 'parse'
Parse.initialize("xMN2SDWbUpH0Tius0RAscb5Ia65CGOD7U1qKtAxH", "wlqxDznzkziAQB2hNhMFu5VKXvwKskjDonIhlSNn");

var Search = React.createClass({
    submitName: function (model) {
        event.preventDefault();
        console.log(model.searchName);
        this.props.history.pushState(null, '/search-result/' + model.searchName);
    },
    submitUPC: function (model) {
        event.preventDefault();
        console.log(model.searchUPC);
        this.props.history.pushState(null, '/search-result/' + model.searchUPC);
    },
    render: function () {
        return (
            <div className="main">
                <h1>Search</h1>
                <SearchName submitName={this.submitName}/>
                <SearchUPC submitUPC={this.submitUPC}/>
            </div>
        )
    }
});

export default Search;