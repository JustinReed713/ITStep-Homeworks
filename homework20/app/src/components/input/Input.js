import React from 'react';
import './Input.css';

class Input extends React.Component {

    changeHandler = (event) => {
        this.props.eventHandler(event.target.value);
    }

    render() {
        const { type, value } = this.props;

        return (
            <input
                className="input"
                type={type}
                onChange={this.changeHandler}
                value={value}
            />
        )

    }

}

export default Input;
