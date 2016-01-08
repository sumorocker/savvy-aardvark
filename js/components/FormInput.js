import React from 'react';
import Formsy from 'formsy-react';

var FormInput = React.createClass({
    mixins: [Formsy.Mixin],

    changeValue: function (event) {
        this.setValue(event.currentTarget.value);
    },

    render: function () {
        // Set a specific className based on the validation
        // state of this component. showRequired() is true
        // when the value is empty and the required prop is
        // passed to the input. showError() is true when the
        // value typed is invalid
        var className = this.showRequired() ? 'required' : this.showError() ? 'error' : null;
        // An error message is returned ONLY if the component is invalid
        // or the server has returned an error message
        var errorMessage = this.getErrorMessage();
        return (
            <div className={className}>
                <input type={this.props.type || 'text'} onChange={this.changeValue} value={this.getValue()}/>
                <span>{errorMessage}</span>
            </div>
        );
    }
});

export default FormInput;