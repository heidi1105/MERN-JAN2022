import React from 'react'

const CombinedDisplay = (props) => {
    const {formState} = props
    return (
        <div>
            <p> formState.username: {formState.username}</p>
            <p> formState.email: {formState.email}</p>
            <p> formState.password: {formState.password}</p>
            <p> formState.hasPet: {formState.hasPet?"Yes":"No"}</p>
            <p> formState.advertising: {formState.advertising?"Yes":"No"}</p>
        </div>
    )
}

export default CombinedDisplay
