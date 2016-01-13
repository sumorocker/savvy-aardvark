import React from 'react';
import Parse from 'parse';

import {Link} from 'react-router';

Parse.initialize("xMN2SDWbUpH0Tius0RAscb5Ia65CGOD7U1qKtAxH", "wlqxDznzkziAQB2hNhMFu5VKXvwKskjDonIhlSNn");

var SearchResult = React.createClass({

    getInitialState() {
        return {
            canSubmit: false,
            products:[]
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
                products:response.productsArray,

            })
        }, function (error) {
            console.log(error);
        })
    },
    render() {
        return (
            <div className="main">
                <h1>Results</h1>
                <div className="main__panel">
                    <ul className="results">
                        {
                            this.state.products.map(function(product){
                                return <li><Link to={'/search-result/product/' + product.upc}>{product.product_name}></Link></li>
                            }.bind(this))
                        }
                    </ul>
                </div>
            </div>
        )
    }

});

export default SearchResult;