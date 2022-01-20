import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {useHistory} from "react-router-dom"

const HeaderForm = () => {
    const [category, setCategory] = useState("books")
    const [id, setId] = useState("")
    const history = useHistory()
    const [categories, setCategories] =useState(null)

    const submitHandler =(e) =>{
        e.preventDefault()
        history.push(`/${category}/${id}`)
    }

    useEffect(()=>{
        axios.get(`https://anapioficeandfire.com/api/`)
            .then(res=>{
                console.log(res.data)
                setCategories(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    },[])

    return (
        <div>
            <form onSubmit={submitHandler}>
                <p>
                    Search for: 
                    <select onChange={e=>setCategory(e.target.value)}>
                        <option value="books">Book</option>
                        <option value="characters">Character</option>
                        <option value="houses">House</option>
                        {
                            categories&&(
                                Object.keys(categories).map((cat, i)=>(
                                    <option key={i} value={cat}> {cat}</option>
                                ))
                            )
                        }


                    </select>
                    ID: 
                    <input type="number" onChange={e=>setId(e.target.value)}/>
                    <button className='btn btn-primary'> Search </button>
                </p>
            </form>
        </div>
    )
}

export default HeaderForm
