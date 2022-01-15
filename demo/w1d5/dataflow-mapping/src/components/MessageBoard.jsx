import React, {useState} from 'react'
import MessageDisplay from './MessageDisplay'
import MessageForm from './MessageForm'

const MessageBoard = () => {
    const [currentMsg, setCurrentMsg] = useState({})
    const [messages, setMessages] = useState([])

    const youveGotMail=(newMsg) =>{
        setCurrentMsg(newMsg)
        setMessages([...messages, newMsg])
    }


    return (
        <fieldset>
            <legend> Parent: MessageBoard.jsx</legend>
            <MessageForm onNewMessage={youveGotMail} user="Pepper" colorText="red"/>
            <MessageForm onNewMessage={youveGotMail} user="Donald Duck" colorText="green"/>
            <MessageDisplay currentMsg = {currentMsg} messages={messages}/>
        </fieldset>
    )
}

export default MessageBoard
