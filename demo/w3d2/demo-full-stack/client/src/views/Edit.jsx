import React, {useEffect, useState} from 'react';
import axios from "axios"
import {useParams, useHistory} from "react-router-dom"

const Edit = () => {
    const {id} = useParams()
    const [title, setTitle] = useState("")
    const [stack, setStack] = useState("")
    const [difficulty, setDifficulty] = useState(0)
    const [rewatched, setRewatched] = useState(false)
    const history = useHistory()



    useEffect(()=>{
        axios.get(`http://localhost:8000/api/demos/${id}`)
            .then(res=>{
                setTitle(res.data.title)
                setStack(res.data.stack)
                setDifficulty(res.data.difficulty)
                setRewatched(res.data.rewatched)
            })
            .catch(err=>console.log(err))
    },[])

    const submitHandler =(e) =>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/demos/${id}`, {title, stack, difficulty, rewatched})
            .then(res=>history.push("/"))
            .catch(err=>console.log(err))
    }

  return <fieldset>
      <legend> Edit.jsx</legend>
      <h1> Edit form</h1>
      <form onSubmit={submitHandler}>
      <p>
        <label> Title</label>
        <input type="text" name="title" value={title} onChange={e=>setTitle(e.target.value)} />
      </p>
      <p>
        <label> Stack</label>
        <input type="text" name="stack" value={stack} onChange={e=>setStack(e.target.value)} />
      </p>
      <p>
        <label> Difficulty</label>
        <input type="number" name="difficulty" value={difficulty} onChange={e=>setDifficulty(e.target.value)} />
      </p>
      <button> Submit</button>
    </form>


  </fieldset>;
};

export default Edit;
    // grab id by useparams
    // grab info from backend
    // use the info on my form
    // form (onChange)
    // submitHandler 
    // if successful : redirect to "/" (useHistory)