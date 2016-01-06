import React from 'react';
import request from 'superagent';

var Search = React.createClass({

    getInitialState() {
        return {};
    },

    componentWillMount() {
        this.setState({
            loading: true
        });
    },

    render() {
        return (
            <div>
                <h2>Search</h2>

            </div>
        )
    }

});

export default Search;
