import React from 'react';
import {Link} from 'react-router';
import Formsy from 'formsy-react';

import Parse from 'parse'
Parse.initialize("xMN2SDWbUpH0Tius0RAscb5Ia65CGOD7U1qKtAxH", "wlqxDznzkziAQB2hNhMFu5VKXvwKskjDonIhlSNn");

import FormInput from './FormInput';

var FormSignUp1 = React.createClass({

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
        Parse.User
            .signUp(model.email, model.password, {
                success: function (user) {
                },
                error: function (user, error) {
                    console.log("Sign up error: " + error.message);
                }
            }).then(function () {
                that.props.history.pushState(null, '/signup-name');
            }
        );
    },
    render: function () {
        return (
            <div className="main">
                <h1>Sign Up!</h1>
                <h6>Step 1 of 4</h6>
                <Formsy.Form
                    className="main__form"
                    onValidSubmit={this.submit}
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}>
                    <div className="field">
                        <label>Enter your email</label>
                        <FormInput
                            name="email"
                            title="Email"
                            validations="isEmail"
                            validationError="This is not a valid email"
                            required/>
                    </div>
                    <div className="field">
                        <label>Create a Password</label>
                        <FormInput
                            name="password"
                            title="Password"
                            type="password"

                            validationError="This is not a valid password"
                            required/>
                    </div>
                    <button
                        className="submit-btn"
                        type="submit"
                        disabled={!this.state.canSubmit}>
                        Begin!
                    </button>
                    <p id="registered">Already Registered? <Link to="/signin">Sign In</Link></p>
                </Formsy.Form>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet culpa ipsam minus nemo provident quaerat sit tempore tenetur vero voluptate!</p>
                <Link to="/moreinfo">More Info</Link>
            </div>
        );
    }
});

export default FormSignUp1;