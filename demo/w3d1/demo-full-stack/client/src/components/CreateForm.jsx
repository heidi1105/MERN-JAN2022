import React, {useState} from 'react';
import axios from "axios"

const CreateForm = (props) => {
  // form (input with onChange) -state
  // submitHandler (onSubmit) 
  // send post info to backend - axios
  // if successful: redirect
  // if failed: validation
  const {reloadList} = props
  const [title, setTitle] = useState("")
  const [stack, setStack] = useState("")
  const [difficulty, setDifficulty] = useState(0)
  const [rewatched, setRewatched] = useState(false)

  const submitHandler = (e) =>{
    e.preventDefault()
    axios.post(`http://localhost:8000/api/demos`, {title, stack, difficulty, rewatched})
      .then(res=>{
        setTitle("")
        setStack("")
        setDifficulty(0)
        reloadList()
      })
      .catch(err=>console.log(err))

  }

  return <fieldset>
    <legend> CreateForm.jsx</legend>
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

export default CreateForm;
