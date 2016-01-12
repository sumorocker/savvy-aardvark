import React from 'react';
import request from 'superagent';
import {Link} from 'react-router';

import Formsy from 'formsy-react';
import FormInput from './FormInput';

import Parse from 'parse'
Parse.initialize("xMN2SDWbUpH0Tius0RAscb5Ia65CGOD7U1qKtAxH", "wlqxDznzkziAQB2hNhMFu5VKXvwKskjDonIhlSNn");

var SearchUPC = React.createClass({
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
        this.props.history.pushState(null, '/search-result/' + model.searchUPC);
    },
    render: function () {
        return (
            <div className="main">
                <Formsy.Form
                    id="upcSearch"
                    className="main__panel"
                    onValidSubmit={this.submit}
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}>

                    <div className="field searchBar">
                        <label>Search by UPC Code</label>
                        <FormInput
                            name="searchUPC"
                            title="Search"
                            required
                        />
                    </div>
                    <button
                        className="submit-btn searchSubmit"
                        type="submit"
                        disabled={!this.state.canSubmit}>
                        Go!
                    </button>
                </Formsy.Form>
            </div>
        )
    }
});

export default SearchUPC;