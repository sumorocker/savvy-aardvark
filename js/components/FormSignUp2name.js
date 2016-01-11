import React from 'react';
import {Link} from 'react-router';
import Formsy from 'formsy-react';

import Parse from 'parse'
Parse.initialize("xMN2SDWbUpH0Tius0RAscb5Ia65CGOD7U1qKtAxH", "wlqxDznzkziAQB2hNhMFu5VKXvwKskjDonIhlSNn");

import FormInput from './FormInput';

var FormSignUp2name = React.createClass({

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
        var that = this;

        var user = Parse.User.current();
        user.set("firstName", model.firstName);
        user.set("lastName", model.lastName);
        user.set("birthday", model.birthday);
        user.set("country", model.country);

        user.save({
            success: function (result) {
            },
            error: function (error) {
                console.log(error.message);
            }
        }).then(function () {
            that.props.history.pushState(null, '/diet');
        })
    },
    render: function () {
        return (
            <div className="main">
                <h1>Sign Up!</h1>
                <h6>Step 2 of 4</h6>
                <Formsy.Form
                    className="main__form"
                    onValidSubmit={this.submit}
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}>
                    <div className="field">
                        <label>First Name</label>
                        <FormInput
                            name="firstName"
                            title="firstName"
                            //validations=""
                            validationError="This field cannot be empty."
                            required/>
                    </div>
                    <div className="field">
                        <label>Last Name</label>
                        <FormInput
                            name="lastName"
                            title="lastName"
                            //validations=""
                            validationError="This field cannot be empty."
                            required/>
                    </div>
                    <div className="field">
                        <label>Year of birth</label>
                        <FormInput
                            name="yearOfBirth"
                            title="yearOfBirth"
                        />
                    </div>
                    <div className="field">
                        <label>Country of Residence</label>
                        <FormInput
                            name="country"
                            title="country"
                        />
                    </div>
                    <button
                        className="submit-btn"
                        type="submit"
                        disabled={!this.state.canSubmit}>
                        Next
                    </button>

                </Formsy.Form>
            </div>
        );
    }
});

export default FormSignUp2name;