import React from 'react';
import './HOCWithFieldset.css'

function HOCWithFieldset(Component) {
    return class extends React.Component {
        render() {
            const { legend } = this.props;
            return (
                <fieldset className="HOC-fieldset">
                    <legend className="HOC-fieldset__legend">
                        {legend}
                    </legend>
                    <Component {...this.props} />
                </fieldset>
            )

        }
    }
}

export default HOCWithFieldset
