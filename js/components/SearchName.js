import React from 'react';
import request from 'superagent';
import {Link} from 'react-router';
import { createHistory } from 'history';

import Formsy from 'formsy-react';
import FormInput from './FormInput';

import Parse from 'parse'
Parse.initialize("xMN2SDWbUpH0Tius0RAscb5Ia65CGOD7U1qKtAxH", "wlqxDznzkziAQB2hNhMFu5VKXvwKskjDonIhlSNn");

var SearchName = React.createClass({
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
    render: function () {
        return (
            <div className="main">
                <Formsy.Form
                    id="productSearch"
                    className="main__panel"
                    onValidSubmit={this.props.submitName}
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}>

                    <div className="field searchBar">
                        <label>Search by Name</label>
                        <FormInput
                            name="searchName"
                            title="Search"
                            required
                        />
                    </div>
                    <button
                        className="submit-btn searchSubmit"
                        type="submit"
                        disabled={!this.state.canSubmit}>
                        go
                    </button>
                </Formsy.Form>
            </div>
        )
    }
});

export default SearchName;