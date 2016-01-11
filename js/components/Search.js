import React from 'react';
import request from 'superagent';
import {Link} from 'react-router';

import Formsy from 'formsy-react';
import FormInput from './FormInput';

var Search = React.createClass({

    getInitialState: function () {
        return {
            canSubmit: false
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
    },

    render() {
        return (
            <div className="main">
                <h1>Search</h1>
                <Formsy.Form
                    className="main__form"
                    onValidSubmit={this.submit}
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}>

                    <div className="field searchBar">
                        <label>Search!</label>
                        <FormInput
                            name="search"
                            title="Search"
                            required/>
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

export default Search;
