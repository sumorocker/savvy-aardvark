import React from 'react';
import {Link} from 'react-router';

import Parse from 'parse'
Parse.initialize("xMN2SDWbUpH0Tius0RAscb5Ia65CGOD7U1qKtAxH", "wlqxDznzkziAQB2hNhMFu5VKXvwKskjDonIhlSNn");

import Header from './Header';
import Nav from './Nav';

var App = React.createClass({
    render() {
        return (
            <div className="homepage">
                <Nav />
                <Header />
                {this.props.children}
            </div>
        )
    }
});

export default App;