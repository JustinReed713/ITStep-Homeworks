import React from 'react';
import './Button.css';

class Button extends React.Component {

    handler = (event) => {
        this.props.styleHandler(event.target.className)
    }

    render() {
        const { caption, className } = this.props;
        return (
            <button
                onClick={this.handler}
                className={className}
            >
                {caption}
            </button>
        )
    }
}

export default Button;
