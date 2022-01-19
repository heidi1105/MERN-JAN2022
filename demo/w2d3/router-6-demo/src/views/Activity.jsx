import React from 'react'
import {useParams} from 'react-router-dom'


const Activity = () => {
    const {country, activity} = useParams()

    return (
        <fieldset>
            <legend> Activity.jsx</legend>
            <h1> Let's go {activity} in {country}</h1>
        </fieldset>
    )
}

export default Activity
