import React from 'react';
import Input from '../input/Input.js'

function HOCWithInput(Component) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                arrayRows: [],
                currentValue: ""
            }
        }

        clickHandler = () => {
            const { arrayRows, currentValue } = this.state;
            arrayRows.push(currentValue);
            this.setState({ arrayRows: arrayRows, currentValue: "" });
        }

        changeHandler = (value) => {
            this.setState({ currentValue: value });
        }

        render() {
            const { label, buttonCaption } = this.props;
            const { arrayRows, currentValue } = this.state;
            return (
                <div>
                    <label>
                        {label}
                        <Input type="text" value={currentValue} eventHandler={this.changeHandler} />
                    </label>
                    <button onClick={this.clickHandler}>
                        {buttonCaption}
                    </button>
                    <Component {...this.props} array={arrayRows} />
                    {(arrayRows.length === 0) &&
                        (
                            <h3>
                                No items
                            </h3>
                        )}
                </div>
            )
        }
    }
}

export default HOCWithInput;
