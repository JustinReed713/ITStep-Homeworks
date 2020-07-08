import React from 'react'
import HOCWithFieldset from "../HOC-with-fieldset/HOCWithFieldset";
import ColoredTitle from '../colored-title/ColoredTitle.js'


function RenderSecondTask() {

    const HOCFieldsetColoredTitle = HOCWithFieldset(ColoredTitle)

    return (
        <>
            <HOCFieldsetColoredTitle
                value="Cool Title"
                legend="Colored title"
            />
        </>
    )
}

export default RenderSecondTask
