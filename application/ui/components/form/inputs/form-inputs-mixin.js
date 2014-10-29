'use strict';

module.exports = {

    getInitialState : function()
    {
        return {
            inputValue : this.props.initialValue
        };
    },

    onChange : function(event)
    {
        var currentValue = event.currentTarget.value;

        this.setState({inputValue : currentValue});

        if (this.props.onChange) {
            this.props.onChange(currentValue);
        }
    }

};
