import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {useParams, useHistory} from "react-router-dom"
import DeleteButton from '../components/DeleteButton';


const Detail = () => {
  // grab id from params (useParams)
  // with id, grab info from backend (axios )
  // get the info when loaded (useEffect)
  // info change --> useState
  const [demo, setDemo] = useState(null)
  const {id} = useParams()
  const [err, setErr] = useState("")
  const history = useHistory()

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/demos/${id}`) //check backend routes
      .then(res => setDemo(res.data))
      .catch(err => setErr("Wrong ID"))
  },[])

  const redirectMain =() =>{
    history.push("/")
  }

  return <fieldset>
  <legend> Detail.jsx</legend>
  {
    demo?(
      <>
        <h1>Demo Details</h1>
        <h3> Title: {demo.title}</h3>
        <h3> Stack: {demo.stack}</h3>
        <h3> Difficulty: {demo.difficulty}</h3>
        <h3> Rewatched: {demo.rewatched?"Yes":"No"}</h3>
        <DeleteButton id={demo._id} deleteHandler={redirectMain}/>
      </>
    ):(
      <h1> Loading...</h1>
    )
  }
  <p>{err}</p>
</fieldset>;
};

export default Detail;
