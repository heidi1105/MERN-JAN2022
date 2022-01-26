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
  const [rewatched, setRewatched] = useState(true)
  const [errArray, setErrArray] = useState([])
  const [level, setLevel] =useState("") 

  const submitHandler = (e) =>{
    e.preventDefault()
    axios.post(`http://localhost:8000/api/demos`, {title, stack, difficulty, rewatched, level})
      .then(res=>{ //SUCCESSFUL 
        console.log("successful")
        console.log(res)
        setTitle("")
        setStack("")
        setDifficulty(0)
        reloadList() //calling a parent function
      })
      .catch(err=>{
        const errResponse = err.response.data.errors
        let tempArr = [];
        // OPTION 1
        for(const key in errResponse){
          if(errResponse.hasOwnProperty(key)){
            tempArr.push(`Option 1: ${errResponse[key].message}`)
          }
        }
        // OPTION 2
        for (const key of Object.keys(errResponse)) { // Loop through all errors and get the messages
          tempArr.push(`Option 2: ${errResponse[key].message}`)
      }
        setErrArray(tempArr)
      })

        


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
      <p>
        <label> Rewatched?</label>
        <input type="checkbox" name="rewatched" checked={rewatched} onChange={e=>setRewatched(!rewatched)} />
      </p>

      <div onChange={e=>setLevel(e.target.value)}>
        <input type="radio" value="Beginners" name="level" /> Beginners
        <input type="radio" value="Intermediate" name="level" /> Intermediate
        <input type="radio" value="Advanced" name="level" /> Advanced
      </div>

      <button> Submit</button>
    </form>
    {
      errArray.map((err, i)=>(
        <p key={i}>{err}</p>
      ))
    }

  </fieldset>;
};

export default CreateForm;
