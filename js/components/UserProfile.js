import React from 'react';
import {Link} from 'react-router';
import Formsy from 'formsy-react';

import Parse from 'parse'
Parse.initialize("xMN2SDWbUpH0Tius0RAscb5Ia65CGOD7U1qKtAxH", "wlqxDznzkziAQB2hNhMFu5VKXvwKskjDonIhlSNn");

var UserProfile = React.createClass({

    render() {
        return (
            <div className="main">
                <h1>Your Profile</h1>
                <div className="main__panel">
                    <ul className="userProfileList">
                        <li>
                            <h3>First Name</h3>
                            <p>{Parse.User.current().get("firstName")}</p>
                            <h3>Last Name</h3>
                            <p>{Parse.User.current().get("firstName")}</p>
                            <h3>Birthday</h3>
                            <p>{Parse.User.current().get("birthday")}</p>
                            <h3>Country of Residence</h3>
                            <p>{Parse.User.current().get("country")}</p>

                            <hr />
                            <h3>Chosen Diet</h3>
                            <p>{Parse.User.current().get("diet")}</p>
                            <h3>Indredients to Avoid</h3>
                            <p>{Parse.User.current().get("to_avoid").join(", ")}</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
});

export default UserProfile;