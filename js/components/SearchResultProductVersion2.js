import React from 'react';
import request from 'superagent';
import {Link} from 'react-router';

import Formsy from 'formsy-react';
import FormInput from './FormInput';

import Parse from 'parse'
Parse.initialize("xMN2SDWbUpH0Tius0RAscb5Ia65CGOD7U1qKtAxH", "wlqxDznzkziAQB2hNhMFu5VKXvwKskjDonIhlSNn");

var _ = require("underscore");

var SearchResultProduct = React.createClass({

    getInitialState() {
        return {
            canSubmit: false,
            ingredientFound: false,
            product_name: [],
            allergens: [],
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
        componentWillMount: function (model) {

            var searchInputObj = this.props.params.upc
            var that = this

            Parse.Cloud.run('UPC', {search: searchInputObj}).then(function (response) {

                var UserArray = response.productsArray[0].ingredients.toLowerCase().split(" ");
                var newUserArray = UserArray.map(function(string){
                    return string.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
                })

                var UserArray2 = response.productsArray[0].ingredients.toLowerCase().split(", ")
                var newUserArray2 = UserArray2.map(function(string){
                    return string.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
                })
                //
                var UserArrayMaster = newUserArray.concat(newUserArray2);

                var ProductArray = Parse.User.current().get("to_avoid");

                console.log(UserArrayMaster);
                console.log(ProductArray);
                if(_.intersection(UserArrayMaster, ProductArray).length === 0){
                    console.log (_.intersection(UserArrayMaster, ProductArray).length);
                    var state = (false);
                }else{
                    console.log (true);
                    var state = true
                }

                that.setState({
                    product_name: response.productsArray[0].product_name.toLowerCase(),
                    ingredients: response.productsArray[0].ingredients.toLowerCase(),
                    food_category: response.productsArray[0].food_category,
                    ingredientFound: state
                })
                Parse.Cloud.run("productAdditives", {search: searchInputObj}).then(function (output) {
                    // console.log(output)
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
        }, 
        render() {
            return (
                <div className="main">
                <h1>Results</h1>
                <div className="main__panel">
                <ul className="results">
                <li>
            </li>
               <li>Product: {this.state.product_name}</li><br/>
               <li>ingredients: {this.state.ingredients}</li><br/>
               <li>Food Category: {this.state.food_category}</li><br/>
               <li>Allergens: {this.state.allergens}</li><br/>
                </ul>
                </div>
            </div>
        )
    }

});

export default SearchResultProduct;