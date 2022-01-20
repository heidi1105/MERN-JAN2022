import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

const Character = () => {
    const [character, setCharacter] =useState(null)
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://anapioficeandfire.com/api/characters/${id}`)
            .then(res => { //successful
                console.log(res.data)
                setCharacter(res.data)

            })
            .catch(err => {
                setCharacter(null)
                //not successful
            })
    }, [id])

    return (
        <div>
            {
                character ?(
                    <div>
                        <h1> Character name: {character.name}</h1>
                        <h3> Born in: {character.born}</h3>
                        <h3> Died in: {character.died}</h3> 
                    </div>) :
                    <h1>Loading... If it takes too long, try another ID. </h1>
            }
        </div>
    )
}

export default Character
