import React, {useEffect, useState} from 'react';
import axios from "axios"
import CreateForm from '../components/CreateForm';
import DisplayTable from '../components/DisplayTable';

const Main = () => {
    const [refresh, setRefresh] = useState(false)

    const reloadList = ()=>{
      setRefresh(!refresh)
    }
  return <fieldset>
      <legend> Main.jsx</legend>
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