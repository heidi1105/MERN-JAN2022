import React from 'react'


const Main = () => {
    return (
        <div>
            <h1> Message: {process.env.REACT_APP_API_KEY}</h1>
        </div>
    )
}

export default Main
