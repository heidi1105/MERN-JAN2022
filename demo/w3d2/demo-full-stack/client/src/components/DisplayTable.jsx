import React, {useEffect, useState} from 'react';
import axios from "axios"
import {Link} from "react-router-dom"
import DeleteButton from './DeleteButton';

const DisplayTable = (props) => {
  //grab info from backend
  // display when loaded
  const {refresh, reloadList} = props
  const [demos, setDemos] = useState(null)

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/demos`)
      .then(res=>setDemos(res.data))
      .catch(err=>console.log(err))
  },[refresh])

  return <fieldset>
  <legend> DisplayTable.jsx</legend>
  {
    demos?(
      <table>
        <thead>
          <tr>
            <td>Title</td>
            <td>Stack</td>
            <td>Difficulty</td>
            <td>Rewatched</td>
            <td colSpan={2}>Actions</td>
          </tr>
        </thead>
        <tbody>
          {
            demos.map((demo, i)=>(
              <tr key={i}>  
                <td> <Link to={`/demos/${demo._id}`}>{demo.title}</Link></td>
                <td> {demo.stack}</td>
                <td> {demo.difficulty}</td>
                <td> {demo.rewatched?"Yes":"No"}</td>
                <td> <Link to={`/demos/${demo._id}/edit`}> Edit</Link></td>
                <td> <DeleteButton id={demo._id} reloadList={reloadList}/></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    ):
    <h1> Loading...</h1>

  }



</fieldset>;
};

export default DisplayTable;
