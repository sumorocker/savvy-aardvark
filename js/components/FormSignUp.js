import React from 'react';
import {Link} from 'react-router';
import Formsy from 'formsy-react';

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
        // someDep.saveEmail(model.email);
        //Parse.User.signUp(model.email, model.password).then(
        //    function() {
        //        this.history.pushState('/diet');
        //    }
        //)
        this.history.pushState('/diet');
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
                            className="input"
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