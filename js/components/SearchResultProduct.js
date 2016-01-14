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
            ingredients: [],
            nutrients: []
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
    componentDidMount: function (model) {

        var searchInputObj = this.props.params.upc;
        var that = this;



        Parse.Cloud.run('UPC', {search: searchInputObj}).then(function (response) {

            var ProductArray = response.productsArray[0].ingredients.toLowerCase().split(" ");
            var newProductArray = ProductArray.map(function(string){
                return string.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
            })

            var ProductArray2 = response.productsArray[0].ingredients.toLowerCase().split(", ")
            var newProductArray2 = ProductArray2.map(function(string){
                return string.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
            })

            var NutrientArray = response.productsArray[0].nutrients.filter(function(nutrient){
                return nutrient.nutrient_value !== ""        
                }).map(function(nutrient){
                    return nutrient.nutrient_name +': '+ nutrient.nutrient_value +' '+ nutrient.nutrient_uom+ ', '
                })

            var NutrientName = response.productsArray[0].nutrients.filter(function(nutrientName){
                return nutrientName.nutrient_value !== "" 
                }).map(function(nutrientName){
                    return nutrientName.nutrient_name
                })
            console.log(NutrientName);

            var ProductArrayMaster = newProductArray.concat(newProductArray2);
            var ProductArray = response.productsArray[0].ingredients.toLowerCase().split(",");
            var UserIngredientArray = Parse.User.current().get("to_avoid");
            var UserNutrientArray = Parse.User.current().get("nutrients_to_avoid");



            if (_.intersection(UserIngredientArray, ProductArrayMaster).length === 0) {
                var state = false; // "eat" means you can eat it

                if(_.intersection(UserNutrientArray, NutrientName).length === 0) {
                    var state = false;
                    }else{
                        var state = true;
                    }
            }else{
                var state = true;
            }

            that.setState({
                product_name: response.productsArray[0].product_name.toLowerCase(),
                ingredients: response.productsArray[0].ingredients.toLowerCase(),
                nutrients: NutrientArray,
                food_category: response.productsArray[0].food_category,
                ingredientFound: state
            }, function() {

                    var Search = Parse.Object.extend("Searches");
                    var search = new Search()
                    search.set("productName", that.state.product_name.toString());
                    search.set('productDescription', that.state.food_category.toString());
                    search.set('ingredients', that.state.ingredients.toString());
                    search.set('permission', that.state.ingredientFound);
                    search.set('userId', Parse.User.current());
                    search.save({
                    success: function(results){
                    console.log("Added!");
                    }, error: function(res, error){
                    console.log(error.message);

                            }
                        });
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
        });
    },
    render() {
        if (this.state.ingredientFound === false) {
            return (
                <div id="verdict-wrapper">
                    <div className="verdict">
                        <h1 className="verdict__yes" title="Yes!">
                            <i className="fa fa-check-circle"></i>
                        </h1>
                    </div>

                    <div className="main">
                        <h2>Results</h2>
                        <div className="main__panel">
                            <ul className="results">
                                <li>Product: {this.state.product_name}</li>
                                <br/>
                                <li>Ingredients: {this.state.ingredients}</li>
                                <br/>
                                <li>Food Category: {this.state.food_category}</li>
                                <br/>
                                <li>Allergens: {this.state.allergens}</li>
                                <br/>
                                <li>nutrients: {this.state.nutrients}</li>
                                <br/>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        } else if (this.state.ingredientFound === true) {
            return (

                <div id="verdict-wrapper">
                    <div className="verdict">
                        <h1 className="verdict__no" title="Yes!">
                            <i className="fa fa-times-circle"></i>
                        </h1>
                    </div>

                    <div className="main">
                        <h2>Results</h2>
                        <div className="main__panel">
                            <ul className="results">
                                <li>Product: {this.state.product_name}</li>
                                <br/>
                                <li>Ingredients: {this.state.ingredients}</li>
                                <br/>
                                <li>Food Category: {this.state.food_category}</li>
                                <br/>
                                <li>Allergens: {this.state.allergens}</li>
                                <br/>
                                <li>nutrients: {this.state.nutrients}</li>
                                <br/>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div id="verdict-wrapper">
                    <div className="verdict">
                        <h1 className="verdict__warn" title="Yes!">
                            <i className="fa fa-exclamation-circle"></i>
                        </h1>
                    </div>

                    <div className="main">
                        <h2>Results</h2>
                        <div className="main__panel">
                            <ul className="results">
                                <li>Product: {this.state.product_name}</li>
                                <br/>
                                <li>Ingredients: {this.state.ingredients}</li>
                                <br/>
                                <li>Food Category: {this.state.food_category}</li>
                                <br/>
                                <li>Allergens: {this.state.allergens}</li>
                                <br/>
                                <li>nutrients: {this.state.nutrients}</li>
                                <br/>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    }

});

export default SearchResultProduct;