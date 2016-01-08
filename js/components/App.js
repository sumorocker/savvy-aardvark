import React from 'react';

var App = React.createClass({
    render() {
        return (
            <div>
                <header id="header">
                    <img id="header__logo" src="images/savvy-aardvark-logo.png" rounded alt="The Savvy Aardvark"/>
                    <h1 id="header__title">Savvy Aardvark</h1>
                </header>
                {this.props.children}
            </div>
        )
    }
});

export default App;