import React from 'react'
import HOCWithFieldset from "../HOC-with-fieldset/HOCWithFieldset";
import ListComponentFunctional from '../list-component-functional/ListComponentFunctional.js';
import HOCWithInput from '../HOC-with-input/HOCWithInput.js';

function RenderSecondTask() {

    const HOCInputList = HOCWithInput(ListComponentFunctional);
    const HOCFieldsetHOCInputList = HOCWithFieldset(HOCInputList);

    return (
        <>
            <HOCFieldsetHOCInputList
                isOrdered={true}
                buttonCaption="Confirm"
                label="Enter a string"
                legend="Ordered List with Input"
            />
        </>
    )
}

export default RenderSecondTask
