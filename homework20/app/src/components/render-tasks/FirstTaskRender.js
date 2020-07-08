import React from 'react'
import HOCWithFieldset from "../HOC-with-fieldset/HOCWithFieldset";
import TitleComponentFunctional from "../title-component-functional/TitleComponentFunctional.js";
import TitleComponentClass from "../title-component-class/TitleComponentClass.js";

function RenderFirstTask() {
    const HOCFieldsetTitleFunctional = HOCWithFieldset(TitleComponentFunctional)
    const HOCFieldsetTitleClass = HOCWithFieldset(TitleComponentClass)

    return (
        <>
            <HOCFieldsetTitleFunctional value="Lol" legend="Functional component Title" />
            <HOCFieldsetTitleClass value="Lol again" legend="Class component Title" />
        </>
    )
}

export default RenderFirstTask