import React from 'react';

import './Title.css'

function Title(props) {
    const { text, className = "title" } = props;
    return (
        <div className={className}>
            {text}
        </div>
    )
}

export default Title;