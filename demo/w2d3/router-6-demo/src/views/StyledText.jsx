import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
//navigate(-1) one page up
// navigate(`../`) go back up one route

const StyledText = () => {
    const {keyword, textcolor} = useParams()
    const navigate = useNavigate()

    return (
        <fieldset>
            <legend> StyledText.jsx</legend>
            <h1 style={{color:textcolor}}>Keyword: {keyword}</h1>
            <button onClick={()=>navigate(-1)}> Back </button>
        </fieldset>
    )
}

export default StyledText
