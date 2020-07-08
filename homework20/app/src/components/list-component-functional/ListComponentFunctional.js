import React from 'react';
import './ListComponentFunctional.css'

function ListComponentFunctional(props) {
    const { array, isOrdered, keyPrefix } = props;
    const viewListRows = (array, typePrefix, keyPrefix) => {
        return array.map((item, index) => (
            <li className="row-style" key={`${typePrefix}${keyPrefix}Row${index}`}>{item}</li>
        ))
    }
    return (
        isOrdered ? (
            <ol className="list-style">
                {viewListRows(array, "OL", keyPrefix)}
            </ol>
        ) : (
                <ul className="list-style">
                    {viewListRows(array, "UL", keyPrefix)}
                </ul>
            )
    )
}

export default ListComponentFunctional;
