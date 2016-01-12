import React from 'react';
import Formsy from 'formsy-react';


import Parse from 'parse';
Parse.initialize("xMN2SDWbUpH0Tius0RAscb5Ia65CGOD7U1qKtAxH", "wlqxDznzkziAQB2hNhMFu5VKXvwKskjDonIhlSNn");

import FormInput from './FormInput';

var restrictionsVegetarian = ['chicken', 'beef'];
var restrictionsVegan = ['chicken', 'beef', 'eggs'];
var restrictionsPaleo = ['flour', 'gluten', 'nuts'];

var FormSignUp4ingr = React.createClass({
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

        var ingredient = model.ingredient;
        console.log(ingredient);

        user.addUnique('to_avoid', ingredient);
        user.save({
            success: function (result) {
            },
            error: function (error) {
                console.log(error.message);
            }
        }).then(function () {
            that.props.history.pushState(null, '/search');
        });
    },
    render () {
        return (
            <div className="main">
                <h1>Ingredients</h1>
                <h6>Step 4 of 4</h6>
                <Formsy.Form
                    onChange={this.onChangeDiet}
                    className="main__panel"
                    onValidSubmit={this.submit}
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}>

                    <div className="field">
                        <label>Ingredients to Avoid</label>
                        <FormInput
                            placeholder="single ingredient"
                            name="ingredient"
                            title="ingredient"
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

export default FormSignUp4ingr;