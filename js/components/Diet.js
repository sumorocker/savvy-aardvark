import React from 'react';
import Formsy from 'formsy-react';


import Parse from 'parse';
Parse.initialize("xMN2SDWbUpH0Tius0RAscb5Ia65CGOD7U1qKtAxH", "wlqxDznzkziAQB2hNhMFu5VKXvwKskjDonIhlSNn");

import FormRadio from './FormRadio';

var Diet = React.createClass({

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
        var user = Parse.User.current();

        event.preventDefault();

        user.set("diet", model.diet);

        if (model.diet === "Vegetarian") {
            user.set('to_avoid', ['chicken', 'beef']);
        } else if (model.diet === "Vegan") {
            user.set('to_avoid', ['chicken', 'beef', 'eggs']);
        } else if (model.diet === "Paleo") {
            user.set('to_avoid', ['flour', 'gluten', 'nuts']);
        } else if (model.diet === "None") {
            user.set('to_avoid', []);

        }

        user.save({
            success: function(result) {

            },
            error: function(error){
                console.log(error.message);
            }
        })
    },
    render () {
        return (
            <div className="main">
                <h1>Diet</h1>
                <Formsy.Form
                    className="main__form"
                    onValidSubmit={this.submit}
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}>
                    <h2>Choose a diet that you wish to watch for.</h2>
                    <p>If you only wish to watch for specific ingredients, select "none" to move to next page.</p>
                    <br />
                    <FormRadio
                        required
                        name="diet"
                        items={["Vegan", "Vegetarian", "Paleo", "None"]}/>
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

export default Diet;