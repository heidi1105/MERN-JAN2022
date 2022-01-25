import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {useParams} from "react-router-dom"
import DeleteButton from '../components/DeleteButton';

const Detail = () => {
  // grab id from params (useParams)
  // with id, grab info from backend (axios )
  // get the info when loaded (useEffect)
  // info change --> useState
  const [demo, setDemo] = useState(null)
  const {id} = useParams()

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/demos/${id}`)
      .then(res => setDemo(res.data))
      .catch(err => console.log(err))
  },[])


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
        <DeleteButton id={demo._id}/>
      </>
    ):(
      <h1> Loading...</h1>
    )
  }

</fieldset>;
};

export default Detail;
