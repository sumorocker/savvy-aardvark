import React from 'react';
import Formsy from 'formsy-react';


import Parse from 'parse';
Parse.initialize("xMN2SDWbUpH0Tius0RAscb5Ia65CGOD7U1qKtAxH", "wlqxDznzkziAQB2hNhMFu5VKXvwKskjDonIhlSNn");

import FormRadio from './FormRadio';

// Ingredients to avoid

var restrictionsVegetarian = ['chicken', 'beef', 'pork', 'veal', 'turkey', 'crab', 'meat', 'ribs',
          'rib', 'liver', 'fowl', 'tilapia', 'fish', 'jerky', 'bacon', 'sausage',
          'ham', 'hog', 'kielbasa', 'chorizo', 'rib', 'ribs', 'shrimp', 'prosciutto',
          'loin', 'herring', 'tenderloin', 'salmon', 'brisket', 'geese', 'dog', 'dogs', 
          'steak', 'steaks', 'hotdog', 'hotdogs', 'carbonara', 'fish', 'whitefish', 'fillets',
          'filets', 'filet', 'filets', 'beefaroni', 'wings', 'seafood', 'cod',
          'sardines', 'crabmeat', 'clam', 'clams', 'oysters', 'oyster', "chik'n",
          'lobster', 'tuna', 'caviar', 'lumpfish', 'catfish', 'trout',
          'scallop', 'scallops', 'crawfish', 'swordfish', 'sole', 'halibut',
          'pollock', 'squid', 'sturgeon', 'haddock', 'snapper', 'calamari', 'mussels',
          'mackerel', 'lard', 'bear', 'bone', 'buffalo', 'bison', 'caribou', 'goat',
          'horse', 'kangaroo', 'lamb', 'marrow soup','moose', 'mutton', 'opossum',
          'organ meats', 'venison', 'rabbit', 'snake', 'squirrel', 'sweetbreads',
          'tripe', 'turtle', 'duck', 'emu', 'gizzards', 'goose', 'grouse', 'guinea hen',
          'organs', 'ostrich', 'partridge', 'pheasant', 'quail', 'squab', 'pigeon', 'lamb',
          'thighs', 'flounder', 'chops', 'prawn', 'pastrami', 'carne', 'meatball', 'hash',
          'meatloaf', 'pepperoni', 'sparerib', 'spareribs'];
          
var restrictionsVegan = ['chicken', 'beef', 'pork', 'veal', 'turkey', 'crab', 'meat', 'ribs',
          'rib', 'liver', 'fowl', 'tilapia', 'fish', 'jerky', 'bacon', 'sausage',
          'ham', 'hog', 'kielbasa', 'chorizo', 'rib', 'ribs', 'shrimp', 'prosciutto',
          'loin', 'herring', 'tenderloin', 'salmon', 'brisket', 'goose', 'dogs', 
          'steak', 'steaks', 'hotdog', 'hotdogs', 'carbonara', 'fish', 'whitefish', 'fillets',
          'filets', 'filet', 'filets', 'beefaroni', 'wings', 'seafood', 'cod',
          'sardines', 'crabmeat', 'clam', 'clams', 'oysters', 'oyster', "chik'n",
          'lobster', 'gelatin', 'tuna', 'caviar', 'lumpfish', 'catfish', 'trout',
          'scallop', 'scallops', 'crawfish', 'swordfish', 'sole', 'halibut',
          'pollock', 'squid', 'sturgeon', 'haddock', 'snapper', 'calamari', 'mussels', 'mackerel',
          'eggs', 'egg', 'milk', 'mayonnaise', 'mayo', 'lard', 'bone', 'cod liver',
          'dairy', 'egg yolk', 'milk sugar', 'yogurt', 'cheddar', 'cheese', 'bear',
          'feta', 'brie', 'smetana', 'kefir', 'ricotta', 'infant formula',
          'butter', 'buttermilk', 'curds', 'gelato', 'mozzarella', 'dulce de leche',
          'custard', 'gomme', 'ice cream', 'junket', 'khoa', 'labneh', 'paneer',
          'pytia', 'qimiq', 'quark', 'skorup', 'sour cream', 'tarhana', 'viili', 'bone',
          'buffalo', 'bison', 'caribou', 'goat', 'horse', 'kangaroo', 'lamb', 'marrow soup',
          'moose', 'mutton', 'opossum', 'organ meats', 'venison', 'rabbit', 'snake',
          'squirrel', 'sweetbreads', 'tripe', 'turtle', 'duck', 'emu', 'gizzards',
          'goose', 'grouse', 'guinea hen', 'organs', 'ostrich', 'partridge', 'pheasant',
          'quail', 'squab', 'pigeon', 'lamb', 'thighs', 'flounder', 'chops', 'prawn', 'pastrami',
          'carne', 'meatball', 'hash', 'meatloaf', 'pepperoni', 'sparerib', 'spareribs'];
          
var restrictionsPaleo = ['yogurt', 'cheddar', 'cheese', 'bear','feta', 'brie',
            'smetana', 'kefir', 'ricotta', 'infant formula',
          'butter', 'buttermilk', 'curds', 'gelato', 'mozzarella', 'milk',
          'dairy', 'alcohol', 'beer', 'ale', 'ipa', 'grain', 'seeds', 'cereal',
          'cereals', 'oats', 'oatmeal', 'bread', 'rice', 'potato', 'couscous',
          'pasta', 'wheat', 'bulgar wheat', 'millet', 'sorgum', 'quinoa', 'cornmeal',
          'barley', 'rye', 'pitta', 'focaccia', 'chapatis', 'bagel', 'ciabatta',
          'tortilla', 'tortillas', 'potato', 'potatoes', 'chips', 'gnocci', 'yams',
          'cassava', 'plantain', 'wholegrain', 'whole grain', 'whole grains',
          'white sugar', 'agave syrup', 'corn syrup', 'high-fructose corn syrup',
          'brown sugar', 'molasses', 'molasse', 'maple syrup', 'glucose syrup',
          'tapioca syrup', 'rice bran syrup', 'malt syrup', 'sorghum', 'treacle',
          'panela', 'carob syrup', 'flour', 'legume', 'rice flour', 'corn flour',
          'oatmeal', 'white rice', 'beans', 'bean', 'peas', 'nuts', 'lentils',
          'peanuts', 'chickpeas', 'butternut', 'miso', 'soynuts', 'soynut', 'soybean',
          'aarts', 'amasi', 'dulce de leche', 'custard', 'gomme', 'ice cream', 'junket',
          'khoa', 'labneh', 'paneer', 'pytia', 'qimiq', 'quark', 'skorup', 'sour cream',
          'tarhana', 'viili', 'cracked wheat', 'durum', 'einkorn', 'emmer', 'farina',
          'faro', 'gliadin', 'graham', 'flour', 'kamut', 'matzo', 'semolina', 'spelt',
          'seitan', 'triticale', 'mir', 'bran'];

// Ingredients/nutrients to watch for
          
var warningsVegetarian = [];

var warningsVegan = ['glycerine', 'lactic acid', 'monoglyceride', 'diglycerides',
          'stearic acid', 'rennet', 'pasta', 'artificial color', 'artificial colors',
          'aspic', 'natural flavor', 'natural source', 'vitamin b12', 'chocolate',
          'cream', 'noodles'];
          
var warningsPaleo = [];

// Nutrients to avoid

var nutrientsVegetarian = [];

var nutrientsVegan = ['casein', 'collagen', 'keratin', 'gelatin', 'lactose', 'whey', 'albumin',
          'allantoin', 'glutamic acid', 'glycogen', 'isinglass', 'lipase', 'pepsin',
          'squalene', 'taurine', 'vaccenic acid'];
          
var nutrientsPaleo = ['alcohol', 'sugar alcohol', 'sucrose', 'fructose', 'maltose', 'dextran',
          'saccharose', 'dextrose', 'dextrin', 'maltodextrin', 'casein'];
          
          
// ----------------------

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
            user.set('to_avoid', restrictionsVegetarian);
            user.set('to_alert', warningsVegetarian);
            user.set('nutrients_to_avoid', nutrientsVegetarian);
        } else if (model.diet === "Vegan") {
            user.set('to_avoid', restrictionsVegan);
            user.set('to_alert', warningsVegan);
            user.set('nutrients_to_avoid', nutrientsVegan);
        } else if (model.diet === "Paleo") {
            user.set('to_avoid', restrictionsPaleo);
            user.set('to_alert', warningsPaleo);
            user.set('nutrients_to_avoid', nutrientsPaleo);
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
                        items={["Vegan", "Vegetarian", "Paleo", "None"]}
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