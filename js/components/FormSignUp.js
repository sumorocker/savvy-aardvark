import React from 'react';
import {Link} from 'react-router';
import Formsy from 'formsy-react';

import Parse from 'parse'
Parse.initialize("xMN2SDWbUpH0Tius0RAscb5Ia65CGOD7U1qKtAxH", "wlqxDznzkziAQB2hNhMFu5VKXvwKskjDonIhlSNn");

import FormInput from './FormInput';



var SignUp = React.createClass({
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
        Parse.User
            .signUp(model.email, model.password, {
                success: function (user) {
                    console.log("Welcome!");
                },
                error: function (user, error) {
                    console.log("Sign up error: " + error.message);
                }

            }).then(function () {
                // Hook Sign up PAGE 2
                this.history.pushState('/diet');
            }
        );
    },
    render: function () {
        return (
            <div className="main">
                <h1>Sign Up!</h1>
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
                    <p id="registered">Already Registered? <Link to="/signin">Log In</Link></p>
                </Formsy.Form>
            </div>
        );
    }
});

var SignUpDiet = React.createClass({

    render: function () {
        return (
            <div className="main">
                <h1>Choose your diet</h1>


            </div>
        )
    }
})


export default SignUp;