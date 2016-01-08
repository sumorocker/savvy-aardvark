import React from 'react';
import Formsy from 'formsy-react';

var Diet = React.createClass({

    render () {
        return (
            <div className="main">
                <h1>Diet</h1>
                <div className="main__form">
                    <h2>Choose a diet that you wish to watch for.</h2>
                    <p>If you only wish to watch for specific ingredients, select "none" to move to next page.</p>
                    <br />
                    <label for="vegetarian">
                        <input
                            type="radio"
                            name="chosenDiet"
                            value="vegetarian"/>
                        Vegetarian
                    </label>
                    <label for="vegan">
                        <input
                            type="radio"
                            name="chosenDiet"
                            value="vegan"/>
                        Vegan
                    </label>
                    <label for="paleo">
                        <input
                            type="radio"
                            name="chosenDiet"
                            value="paleo"/>
                        Paleo
                    </label>
                    <label for="none">
                        <input
                            checked="checked"
                            type="radio"
                            name="chosenDiet"
                            value="none"/>
                        None
                    </label>
                </div>
            </div>
        );
    }
});

export default Diet;