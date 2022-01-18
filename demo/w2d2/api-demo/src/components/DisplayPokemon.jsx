import React from 'react'

const DisplayPokemon = (props) => {
    const {pokemon} = props
    return (
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
    )
}

export default DisplayPokemon
