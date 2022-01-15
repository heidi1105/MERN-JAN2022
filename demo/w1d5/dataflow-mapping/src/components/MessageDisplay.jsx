import React from 'react'

const MessageDisplay = (props) => {
    return (
        <fieldset>
            <legend> MessageDisplay.jsx</legend>
            <p> Message from the parent: {props.currentMsg.content} </p>
            <h1> Message History</h1>
            {
                props.messages.map((message, i)=>(
                    <p key={i} style={{color: message.colorText}}> {message.user} : {message.content} </p>
                ))
            }
        </fieldset>
    )
}

export default MessageDisplay
