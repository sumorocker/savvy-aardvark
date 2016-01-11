import React from 'react';

var Header = React.createClass({
    render() {
        return (
            <div>
                <header id="header">
                    <img id="header__logo" src="images/savvy-aardvark-logo.png" rounded alt="The Savvy Aardvark"/>
                    <h1 id="header__title">Savvy Aardvark</h1>
                </header>

            </div>
        )
    }
});

export default Header;