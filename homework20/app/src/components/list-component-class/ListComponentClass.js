import React from 'react';
import './ListComponentClass.css'

class ListComponentClass extends React.Component {

    viewListRows(typePrefix) {
        const { array, keyPrefix } = this.props;

        return array.map((item, index) => (
            <li className="row-style" key={`${typePrefix}${keyPrefix}Row${index}`}>{item}</li>
        ))
    }

    render() {
        const { isOrdered } = this.props;
        return (
            isOrdered ? (
                <ol className="list-style">
                    {this.viewListRows("OL")}
                </ol>
            ) : (
                    <ul className="list-style">
                        {this.viewListRows("UL")}
                    </ul>
                )
        )
    }
}

export default ListComponentClass;
