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
    getInitialState() {
        return {
            canSubmit: false,
        }
    },
    enableButton: function () {
        this.setState({
            canSubmit: true
        });
    },
    disableButton: function () {
        this.setState({
            canSubmit: false
        });
    },
    submit: function (model) {
        event.preventDefault();

        console.log("Product Name: " + model.searchName);
        console.log("UPC Code: " + model.searchUPC);

        var that = this;

        that.props.history.pushState(null, '/search-result/' + model.searchName);
    },
    render: function () {
        return (
            <div className="main">
                <h1>Search</h1>
                <SearchName />
                <SearchUPC />
            </div>
        )
    }
});

export default Search;