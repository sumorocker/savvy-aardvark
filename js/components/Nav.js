import React from 'react';
import {Link} from 'react-router';
import { createHistory } from 'history';

import Parse from 'parse'
Parse.initialize("xMN2SDWbUpH0Tius0RAscb5Ia65CGOD7U1qKtAxH", "wlqxDznzkziAQB2hNhMFu5VKXvwKskjDonIhlSNn");
window.Parse = Parse;

var greetings = [
    "Hi", "Yo", "Hola", "Mirëdita", "Hei", "Aloha", "Bonjour", "Salut",
    "Guten Tag", "Shalom", "Namaste", "Ciao", "Kon-nichiwa", "An-nyong"
];

var logOutNow = function() {
    Parse.User.logOut();
}

var Nav = React.createClass({
    render() {
        if (!Parse.User.current()) {
            return (
                <nav id="signin">
                    <Link className="signin__btn" to="/signin">Sign In</Link>
                </nav>
            )
        } else {
            return (
                <nav>
                    <p>
                        {greetings[Math.floor(Math.random() * greetings.length)]}
                        , {Parse.User.current().get("firstName")}</p>
                    <ul>
                        <li><Link to="/" onClick={logOutNow}><i className="fa fa-sign-out"></i></Link></li>
                        <li><Link to=""><i className="fa fa-user"></i></Link></li>
                        <li><Link tp=""><i className="fa fa-history"></i></Link></li>
                    </ul>
                </nav>
            )

        }
    }
});

export default Nav;