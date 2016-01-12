import React from 'react';
import {Link} from 'react-router';

import Parse from 'parse';
Parse.initialize("xMN2SDWbUpH0Tius0RAscb5Ia65CGOD7U1qKtAxH", "wlqxDznzkziAQB2hNhMFu5VKXvwKskjDonIhlSNn");

var SearchResult = React.createClass({

    getInitialState() {
        return {
            canSubmit: false,
            product_name: []
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
        var res = searchInputObj.replace(' ', '+');
        Parse.Cloud.run('productName', {search: res}).then(function (response) {
            console.log(response)
            that.setState({
                product_name: response.productsArray.map(function (products) {
                    return products.product_name;
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
                        {
                            this.props.product_name.map(function(productNames){
                                return <li>
                                    {/*<Link to="{}">*/}
                                    <p>{productNames}</p>
                                    {/*</Link>*/}
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }

});

export default SearchResult;

