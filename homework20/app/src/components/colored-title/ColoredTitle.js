import React from 'react';
import Button from '../button/Button.js';
import './ColoredTitle.css';

class ColoredTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textStyle: ""
        }
    }

    styleChangeHandler = (style) => {
        this.setState({ textStyle: style });
    }

    render() {
        const { value } = this.props;
        const { textStyle } = this.state;
        return (
            <div>
                <span className={`text-style ${textStyle}`}>{value}</span>
                <div className="button-container">
                    <Button caption="red" className="red" styleHandler={this.styleChangeHandler} />
                    <Button caption="green" className="green" styleHandler={this.styleChangeHandler} />
                    <Button caption="blue" className="blue" styleHandler={this.styleChangeHandler} />
                    <Button caption="clear" className="" styleHandler={this.styleChangeHandler} />
                </div>
            </div>
        )
    }
}

export default ColoredTitle;
