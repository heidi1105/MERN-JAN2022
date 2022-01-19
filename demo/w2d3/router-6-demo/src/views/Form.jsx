import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const [keyword, setKeyword] = useState("")
    const [textcolor, setTextcolor] = useState("")
    const navigate = useNavigate()

    const submitHandler=(e)=>{
        e.preventDefault()
        navigate(`/${keyword}/${textcolor}`)
    }
    

    return (
        <fieldset>
            <legend> Form.jsx</legend>
            <form onSubmit={submitHandler}>
                <h1> Form</h1>
                <p>
                    <label> Keyword: </label>
                    <input type="text" onChange={e=>setKeyword(e.target.value)} />
                </p>
                <p>
                    <label> Text color: </label>
                    <input type="text" onChange={e=>setTextcolor(e.target.value)}/>
                </p>
                <button> Submit</button>
            </form>

        </fieldset>
    )
}

export default Form
