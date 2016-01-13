import React from 'react';

var Result = React.createClass({
    render() {
        return (
            <div id="verdict-wrapper">
                <div className="verdict">
                    <h1 className="verdict__yes" title="Yes!">
                        <i className="fa fa-check-circle"></i>
                    </h1>
                </div>
            </div>
        )
    }
});

var Result = React.createClass({

    render() {
        return (
            <div id="verdict-wrapper">
                <div className="verdict">
                    <h1 className="verdict__no" title="Yes!">
                        <i className="fa fa-times-circle"></i>
                    </h1>
                </div>
            </div>
        )
    }
});

var Result = React.createClass({

    render() {
        return (
            <div id="verdict-wrapper">
                <div className="verdict">
                    <h1 className="verdict__warn" title="Yes!">
                        <i className="fa fa-exclamation-circle"></i>
                    </h1>
                </div>
            </div>
        )
    }
});


export default Result;