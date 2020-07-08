import React from 'react'
import HOCWithFieldset from "../HOC-with-fieldset/HOCWithFieldset";
import ListComponentFunctional from '../list-component-functional/ListComponentFunctional.js';
import ListComponentClass from '../list-component-class/ListComponentClass.js';


function RenderSecondTask() {

    const HOCFieldsetListUnorderedFunctional = HOCWithFieldset(ListComponentFunctional)
    const HOCFieldsetListOrderedFunctional = HOCWithFieldset(ListComponentFunctional)
    const HOCFieldsetListUnorderedClass = HOCWithFieldset(ListComponentClass)
    const HOCFieldsetListOrderedClass = HOCWithFieldset(ListComponentClass)

    return (
        <>
            <HOCFieldsetListUnorderedFunctional
                array={['fifth', 'limb', 'tokarniy-stanok']}
                keyPrefix="FunctionalFirst"
                legend="Functional component List unordered"
            />
            <HOCFieldsetListOrderedFunctional
                array={['fifth', 'limb', 'tokarniy-stanok']}
                isOrdered={true}
                keyPrefix="FunctionalFirst"
                legend="Functional component List ordered"
            />
            <HOCFieldsetListUnorderedClass
                array={['fifth', 'limb', 'tokarniy-stanok']}
                keyPrefix="ClassSecond"
                legend="Class component List unordered"
            />
            <HOCFieldsetListOrderedClass
                array={['fifth', 'limb', 'tokarniy-stanok']}
                isOrdered={true}
                keyPrefix="ClassFirst"
                legend="Class component List ordered"
            />
        </>
    )
}

export default RenderSecondTask
