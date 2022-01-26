import React from 'react';
import axios from "axios"
import {useHistory} from "react-router-dom"

const DeleteButton = (props) => {
  const {id,deleteHandler } = props
  const history = useHistory()

  const clickHandler = ()=>{
    axios.delete(`http://localhost:8000/api/demos/${id}`)
      .then(res=> {
        deleteHandler()
      })
      .catch(err=>console.log(err))
  }

  return <button onClick={clickHandler}>
      Delete
      </button>;
};

export default DeleteButton;


//1. grab the id from props
//2. send the delete request to backend (axios)
//3. need to redirect