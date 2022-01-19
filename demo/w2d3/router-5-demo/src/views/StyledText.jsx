import React from 'react'
import { useParams, useHistory } from 'react-router-dom'

const StyledText = () => {
    const {keyword, textcolor} = useParams()
    const history = useHistory()

    return (
        <fieldset>
            <legend> StyledText</legend>
            <h1 style={{color: textcolor}}> Keyword: {keyword}</h1>
            <button onClick={()=>history.goBack()}> Back</button>
        </fieldset>
    )
}

export default StyledText
