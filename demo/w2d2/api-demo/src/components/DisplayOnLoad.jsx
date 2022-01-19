import React, { useEffect, useState } from 'react'
import axios from 'axios'// remember to npm install axios

const DisplayOnLoad = () => {
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`)
            .then(response => {
                console.log(response.data)
                setPokemon(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            {
                pokemon ? (
                    <div>
                        <h1>{pokemon.forms[0].name}</h1>
                        <img src={pokemon.sprites.front_default} />
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th> </th>
                                    <th> Ability</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    pokemon.abilities.map((ability, i)=>(
                                        <tr key={i}>
                                            <td> {i+1}</td>
                                            <td> {ability.ability.name}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                ):(
                    <h1>Loading</h1>
                )

            }
        </div>
    )
}

export default DisplayOnLoad
