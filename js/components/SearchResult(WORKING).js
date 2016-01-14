import React from 'react';
import Parse from 'parse';

import {Link} from 'react-router';
import ReactPaginate from 'react-paginate';


Parse.initialize("xMN2SDWbUpH0Tius0RAscb5Ia65CGOD7U1qKtAxH", "wlqxDznzkziAQB2hNhMFu5VKXvwKskjDonIhlSNn");

var SearchResult = React.createClass({

    getInitialState() {
        return {
            canSubmit: false,
            products:[],
            pagination: {
                    page: 0,
                    perPage: 5
        
            },
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

        Parse.Cloud.run('productName', 
            {search: res,
            limit: this.props.pagination.perPage,
            offset: this.props.pagination.perPage * this.props.pagination.page,
            }
            ).then(function (response) {
            console.log(response)
            that.setState({
                products:response.productsArray,

            })
        }, function (error) {
            console.log(error);
        })
    },
    render() {
        var data = this.state.products.product_name || [];
        var pagination = this.state.pagination || {};
        var paginated = Paginator.paginate(data, pagination);

        return (
            <article>
                <div className='per-page-container'>
                    <span>Per page</span>
                    <input
                        type='text'
                        defaultValue={pagination.perPage}
                        onChange={this.onPerPage}>
                    </input>
                </div>

                <Paginator
                    className='pagify-pagination'
                    ellipsesClassName='pagify-ellipsis'
                    activeClassName='selected'
                    inactiveClassName='inactive'
                    page={paginated.page}
                    pages={paginated.amount}
                    beginPages={1}
                    endPages={5}
                    showPrevNext={true}
                    alwaysShowPrevNext={true}
                    prevButton={'Previous one'}
                    nextButton={'Next one'}
                    onSelect={this.onSelect}>
                </Paginator>

                <div className='data'>
                    ...
                </div>
            </article>
        );
    },

    onSelect(page) {
        var pagination = this.state.pagination || {};

        pagination.page = page;

        this.setState({
            pagination: pagination
        });
    },

    onPerPage(e) {
        var pagination = this.state.pagination || {};

        pagination.perPage = parseInt(event.target.value, 10);

        this.setState({
            pagination: pagination
        });
    },
});

//     render() {
//         return (
//             <div className="main">
//                 <h1>Results</h1>
//                 <div className="main__panel">
//                     <ul className="results">
//                         {
//                             this.state.products.map(function(product){
//                                 return <li><Link to={'/search-result/product/' + product.upc}>{product.product_name}></Link></li>
//                             }.bind(this))
//                         }
//                     </ul>
//                 </div>
//             </div>
//         )
//     }

// });

// export default SearchResult;