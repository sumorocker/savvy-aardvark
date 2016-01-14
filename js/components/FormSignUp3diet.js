import React from 'react';
import Formsy from 'formsy-react';


import Parse from 'parse';
Parse.initialize("xMN2SDWbUpH0Tius0RAscb5Ia65CGOD7U1qKtAxH", "wlqxDznzkziAQB2hNhMFu5VKXvwKskjDonIhlSNn");

import FormRadio from './FormRadio';
import dietSpecs from './DietSpecifications';

var FormSignUp3diet = React.createClass({
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
    onChangeDiet: function (values) {
        console.log(values.diet);
        this.setState({
            chosenDiet: values.diet
        })
    },

    submit: function (model) {
        event.preventDefault();
        var that = this;

        var user = Parse.User.current();

        user.set("diet", model.diet);
        if (model.diet === "Vegetarian") {
            user.set('to_avoid', dietSpecs.restrictionsVegetarian());
            user.set('to_alert', dietSpecs.warningsVegetarian());
            user.set('nutrients_to_avoid', dietSpecs.nutrientsVegetarian());
        } else if (model.diet === "Vegan") {
            user.set('to_avoid', dietSpecs.restrictionsVegan());
            user.set('to_alert', dietSpecs.warningsVegan());
            user.set('nutrients_to_avoid', dietSpecs.nutrientsVegan());
        } else if (model.diet === "Paleo") {
            user.set('to_avoid', dietSpecs.restrictionsPaleo());
            user.set('to_alert', dietSpecs.warningsPaleo());
            user.set('nutrients_to_avoid', dietSpecs.nutrientsPaleo());
        } else if (model.diet === "None") {
            user.set('to_avoid', []);
            user.set('to_alert', []);
            user.set('nutrients_to_avoid', []);
        }
        user.save({
            success: function (result) {
            },
            error: function (error) {
                console.log(error.message);
            }
        }).then(function() {
            that.props.history.pushState(null, '/ingredients');
        });
    },
    render () {
        return (
            <div className="main">
                <h1>Diet</h1>
                <h6>Step 3 of 4</h6>
                <Formsy.Form
                    onChange={this.onChangeDiet}
                    className="main__panel"
                    onValidSubmit={this.submit}
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}>

                    <h2>Choose a diet that you wish to watch for.</h2>
                    <p>If you only wish to watch for specific ingredients, select "none" to move to next page.</p>
                    <br />
                    <FormRadio
                        required
                        name="diet"
                        items={["Vegan", "Vegetarian", "Paleo", "None", "Fruitarian"]}
                    />
                    { this.state.statusMessage ? <DietResults diet={this.state.chosenDiet}/> : null }

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
        if (this.props.diet === "None") {
            return (
                <div className="statusMessage">
                    <p>Great! You didn't choose a specific diet. On the next page you'll be able to add specific
                        ingredients that we should watch out for.</p>
                </div>

            )
        } else {
            return (
                <div className="statusMessage">
                    <p>Great! Because you chose a {this.props.diet} diet, we'll be looking out for the following
                        ingredients: {[]}
                        .</p>
                    <p>You'll be able to customize this list in the next step...</p>
                </div>
            )
        }
    }

});

export default FormSignUp3diet;