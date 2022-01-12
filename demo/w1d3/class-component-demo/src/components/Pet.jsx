//import packages
import React, {Component} from 'react'

// create class
class Pet extends Component{
    render(){
        const {petname, type, age, abilities} = this.props.pet
        return(
            <div>
                <h1> Pet: {petname} </h1>
                <h3> Type: {type} </h3>
                <h3> Age: {age} </h3>
                <h3> Abilities: {abilities} </h3>
                <ul>
                    {abilities.map((ability, i) => {
                        return(
                            <li key={i}>{i} : {ability} </li>
                        )
                    })}
                    {abilities.map(ability => (
                            <li>{ability} </li>
                    ))}

                </ul>
            </div>
        )
    }
}
export default Pet
// export