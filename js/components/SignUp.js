import React from 'react';

var SignUp = React.createClass({
    render() {
        return (
            <section id="signup">
                <h1 id="signup__title">Sign Up!</h1>
                <form id="signup__form">
                    <div className="field">
                        <h6>Enter your email.</h6>
                        <input id="signup__email" type="text"/>
                        <div className="error-message">
                            Email must be present
                        </div>
                    </div>

                    <div className="field">
                        <h6>Choose a password.</h6>
                        <input id="signup__password" type="password"/>
                        <div className="error-message">
                            Password must be present
                        </div>
                    </div>

                    <div className="submit-btn">
                        <input id="signup__submit" type="submit"/>
                    </div>
                    <p>- or -</p>
                    <p>Sign up with</p>

                    <p id="registered">Already Registered? <a href="">Log in</a></p>
                </form>
            </section>
        )
    }
});

export default SignUp;

