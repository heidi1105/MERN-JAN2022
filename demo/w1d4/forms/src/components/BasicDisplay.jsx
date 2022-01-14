import React from 'react'

const BasicDisplay = (props) => {
    return (
        <fieldset>
           <legend> BasicDisplay.jsx </legend> 
           <p>username: {props.username}</p>
           <p>password: {props.password}</p>
        </fieldset>
    )
}

export default BasicDisplay
