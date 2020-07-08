import React from 'react';
import './TabButton.css';

class TabButton extends React.Component {

    clickHandler = (event) => {
        this.setState({ isActive: true })
        this.props.handler(+(event.target.id.slice(9)))
    }

    render() {
        const { isActive, number, keyPrefix, caption } = this.props;
        return (
            <div
                className={isActive ? 'tab-button tab-button_active' : 'tab-button'}
                id={`tabButton${number}`}
                onClick={this.clickHandler}
                key={keyPrefix}
            >
                {caption[0].toUpperCase() + caption.slice(1)}
            </div>
        )
    }
}

export default TabButton;
