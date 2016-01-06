import React from 'react';
import {Link} from 'react-router';

var Home = React.createClass({
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/search">Search</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>

                </ul>
            </div>
        )
    }
});

export default Home;
