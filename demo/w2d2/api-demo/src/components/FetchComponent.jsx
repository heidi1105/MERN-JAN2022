import React, {useState} from 'react'
import DisplayPokemon from './DisplayPokemon'
import axios from 'axios'

const FetchComponent = () => {
    const [err, setErr] = useState("")
    const [pokemon, setPokemon] = useState(null)

    const fetchPokemonThen =() =>{
        fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
            .then(response=>{
                return response.json()
            })
            .then(jsonResponse=>{
                console.log(jsonResponse)
                setPokemon(jsonResponse)
            })
            .catch(err=>{
                console.log(err)
                setErr("This pokemon is not available")
            })
    }

    const fetchPokemonAwait =async() =>{
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/snorlax`)
        let jsonResponse = await response.json()
        setPokemon(jsonResponse)
    }

    const fetchPokemonAxios =() =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/eevee`)
            .then(response=>{
                console.log(response.data)
                setPokemon(response.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }

    return (
        <div>
            <button className="btn btn-primary" onClick={fetchPokemonThen}> Fetch Ditto by Then</button>
            <button className="btn btn-success" onClick={fetchPokemonAwait}>Fetch Snorlax by Await </button> 
            <button className="btn btn-danger" onClick={fetchPokemonAxios}>Fetch Eevee by Axios </button> 
            {
                pokemon?
                    (<DisplayPokemon pokemon = {pokemon}/>):
                    (<h3> Press the button to fetch a pokemon </h3>)
            }
            

        </div>
    )
}

export default FetchComponent
