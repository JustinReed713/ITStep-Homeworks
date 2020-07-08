import React from 'react';

function TitleComponentFunctional(props) {
    const { value } = props;
    return (
        <div>
            <h1>{value}</h1>
        </div>
    )
}

export default TitleComponentFunctional;
