import React from 'react';
import {Link} from 'react-router';

var Home = React.createClass({
    render() {
        return (
            <div id="homepage">
                <nav>
                    <ul>
                        <li>
                            <Link to="/signup">
                                Sign Up
                            </Link>
                        </li>
                        <li>
                            <Link to="/signin">
                                Sign In
                            </Link>
                        </li>
                        <li>
                            <Link to="/moreinfo">
                                    More Info
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
});

export default Home;
