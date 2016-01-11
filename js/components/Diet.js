import React from 'react';
import Formsy from 'formsy-react';


import Parse from 'parse';
Parse.initialize("xMN2SDWbUpH0Tius0RAscb5Ia65CGOD7U1qKtAxH", "wlqxDznzkziAQB2hNhMFu5VKXvwKskjDonIhlSNn");

import FormRadio from './FormRadio';

var chosenDiet;
var restrictionsVegetarian = ['chicken', 'beef'];
var restrictionsVegan = ['chicken', 'beef', 'eggs'];
var restrictionsPaleo = ['flour', 'gluten', 'nuts'];

var Diet = React.createClass({
    getInitialState: function () {
        return {
            canSubmit: false,
            statusMessage: false
        }
    },
    enableButton: function () {
        this.setState({
            canSubmit: true,
            statusMessage: true
        });
    },
    disableButton: function () {
        this.setState({
            canSubmit: false,
            statusMessage: false
        });
    },

    submit: function (model) {
        event.preventDefault();

        var user = Parse.User.current();
        user.set("diet", model.diet);
        if (model.diet === "Vegetarian") {
            user.set('to_avoid', restrictionsVegetarian);
        } else if (model.diet === "Vegan") {
            user.set('to_avoid', restrictionsVegan);
        } else if (model.diet === "Paleo") {
            user.set('to_avoid', restrictionsPaleo);
        } else if (model.diet === "None") {
            user.set('to_avoid', []);

        }
        user.save({
            success: function (result) {
            },
            error: function (error) {
                console.log(error.message);
            }
        })
    },
    render () {
        return (
            <div className="main">
                <h1>Diet</h1>
                <h6>Step 3 of 4</h6>
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
                        items={["Vegan", "Vegetarian", "Paleo", "None"]}
                    />
                    { this.state.statusMessage ? <DietResults /> : null }

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

var DietResults = React.createClass({
    render () {
        return (
            <div className="statusMessage">
                <p>Great! Because you chose a {chosenDiet} diet, we'll be looking out for the following ingredients: .</p>
                <p>You'll be able to customize this list in the next step...</p>
            </div>
        )
    }

});

export default Diet;