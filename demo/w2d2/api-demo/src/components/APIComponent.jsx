import React, {useState, useEffect} from 'react'
import PokeForm from './PokeForm'
import axios from 'axios'
import DisplayPokemon from './DisplayPokemon'

const APIComponent = () => {
    const [pokeName, setPokeName] = useState("pikachu")
    const [pokemon, setPokemon] = useState(null)
    const [refresh, setRefresh] = useState(false)

    const receiveName = (name) =>{
        setPokeName(name)
        setRefresh(!refresh)
    }

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then(response=>{
                setPokemon(response.data)
            })
            .catch(err=>{
                console.log(err)
                setPokemon(null)
            })
    },[refresh])// if the parameters inside the array gets changed, redo useEffect

    return (
        <div>
            <PokeForm onNewName={receiveName}/>
            {
                pokemon?
                    <DisplayPokemon pokemon={pokemon} />:
                    <h3> {pokeName} is not available. Try another name?</h3>
            }
        </div>
    )
}

export default APIComponent
