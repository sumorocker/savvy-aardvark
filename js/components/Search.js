import React from 'react';
import request from 'superagent';
import {Link} from 'react-router';

import Formsy from 'formsy-react';
import FormInput from './FormInput';

import Parse from 'parse'
Parse.initialize("xMN2SDWbUpH0Tius0RAscb5Ia65CGOD7U1qKtAxH", "wlqxDznzkziAQB2hNhMFu5VKXvwKskjDonIhlSNn");

var Search = React.createClass({
    getInitialState() {
        return {
            canSubmit: false,
            product_name: [],
            allergens: [],
            nutrients: [],
            additives: [],
            food_category: [],
            ingredients: []
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

        console.log(model.searchInput);

        var that = this;
        var searchInputObj = model.searchInput;

        if (!isNaN(model.searchInput)) {
            Parse.Cloud.run('UPC', {search: searchInputObj}).then(function (response) {
                console.log(response)
                that.setState({
                    product_name: response.productsArray[0].product_name,
                    ingredients: response.productsArray[0].ingredients,
                    food_category: response.productsArray[0].food_category,
                })
                Parse.Cloud.run("productAdditives", {search: searchInputObj}).then(function (output) {
                    console.log(output)
                    that.setState({
                        allergens: output.allergens.map(function (allergen) {
                            if (allergen.allergen_value > 0) {
                                return allergen.allergen_name + ', ';
                            } else {
                                console.log("excluded allergens");
                            }
                        })
                    })
                })
            }, function (error) {
                console.log(error.message);
            })

        } else {
            var searchInputObj = model.searchInput;
            var res = searchInputObj.replace(' ', '+');
            Parse.Cloud.run('productName', {search: res}).then(function (response) {
                console.log(response)
                that.setState({
                    product_name: response.productsArray.map(function (products) {
                        return products.product_name + ', ';
                    })
                })
            }, function (error) {
                // console.log(error);
            })
        }
    },
    render: function () {
        return (
            <div className="main">
                <h1>Search</h1>
                <Formsy.Form
                    className="main__panel"
                    onValidSubmit={this.submit}
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}>

                    <div className="field searchBar">
                        <label>Diet: {Parse.User.current().get("diet")}</label>
                        <FormInput
                            name="searchInput"
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

                <div className="main__panel">
                    <p>Product: {this.state.product_name}</p>
                    <p>Food Category: {this.state.food_category}</p>
                    <p>Ingredients: {this.state.ingredients}</p>
                    <p>Allergens: {this.state.allergens}</p>
                </div>
            </div>
        )
    }
});

export default Search;