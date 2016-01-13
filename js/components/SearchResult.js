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
    componentDidMount: function (model) {
        var that = this;
        var searchInputObj = this.props.params.id;
        console.log(searchInputObj)
        var res = searchInputObj.replace(' ', '+');

        Parse.Cloud.run('productName', {search: res}).then(function (response) {
            console.log(response)
            that.setState({
                product_name: response.productsArray.map(function (products) {
                    return products.product_name;
                }),
                product_upc: response.productsArray[0].upc
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
                            this.state.product_name.map(function (productsList) {
                                return <li><Link
                                    to={'/search-result/product/' + this.state.product_upc}>{productsList}></Link>
                                </li>
                            }.bind(this))
                        }
                    </ul>
                </div>
            </div>
        )
    }

});

export default SearchResult;

