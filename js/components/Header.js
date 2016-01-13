import React from 'react';

var Header = React.createClass({
    render() {
        return (
            <div>
                <header id="header">
                    <h1 id="header__title">
                        <span id="header__savvy">Savvy</span>
                        <img id="header__logo" src="/images/savvy-aardvark-logo.png" rounded alt="The Savvy Aardvark"/>
                        <span id="header__aardvark">Aardvark</span>
                    </h1>
                </header>

            </div>
        )
    }
});

export default Header;