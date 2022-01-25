import React, {useEffect, useState} from 'react';
import axios from "axios"
import CreateForm from '../components/CreateForm';
import DisplayTable from '../components/DisplayTable';

const Main = () => {
// get info from backend (axios)
// get info when loading (useEffect)
// variable will change when we got the data from backend (state)

    const [message, setMessage] = useState("Loading...")
    const [refresh, setRefresh] = useState(false)
    useEffect(()=>{
        axios.get(`http://localhost:8000/api`)
            .then(res=>setMessage(res.data.message))
            .catch(err =>console.log(err))
    },[])

    const reloadList = ()=>{
      setRefresh(!refresh)
    }
  return <fieldset>
      <legend> Main.jsx</legend>
        <h1> Message from backend: {message}</h1>

        <CreateForm reloadList ={reloadList} />
        <DisplayTable refresh={refresh} reloadList ={reloadList}/>

  </fieldset>;
};

export default Main;
// child to talk to parent (parent need to give them a method)
// pass down reloadList() to CreateForm
// CreateForm : onSubmit, use reloadList() to trigger parent method
// Parent method changed refresh state
// pass the refresh state to Display useEffect so that the display will refresh