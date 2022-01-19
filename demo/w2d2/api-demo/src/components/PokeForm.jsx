import React, {useState} from 'react'

const PokeForm = (props) => {
    const [pokeName, setPokeName] = useState("")

    const submitHandler =(e) =>{
        e.preventDefault()
        console.log(pokeName)
        props.onNewName(pokeName)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" onChange={e=>setPokeName(e.target.value)}/>
                <button> Search</button>
            </form>
        </div>
    )
}

export default PokeForm
