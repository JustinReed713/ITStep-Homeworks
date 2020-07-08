import React from 'react';

class TitleComponentClass extends React.Component {

    render() {
        const { value } = this.props;
        return (
            <div>
                <h1>{value}</h1>
            </div>
        )
    }
}

export default TitleComponentClass;
