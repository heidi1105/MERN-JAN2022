import React, {useState, useEffect} from "react"
import axios from "axios"
import Main from "./components/Main"



function App() {
  const [secret, setSecret] = useState("")

  useEffect(()=>{
    axios.get(`http://localhost:8000/api`)
      .then(res => setSecret(res.data.message))
      .catch()
  },[])

  const msg = process.env.REACT_APP_TESTING_API_KEY
  const msg2 = process.env.REACT_APP_SECRET_API_KEY
  const msg3 = process.env.REACT_APP_whatever_message


  return (
    <div className="App">
      <h1> process.env.REACT_APP_TESTING_API_KEY:  {msg} </h1>
      <h1> process.env.REACT_APP_SECRET_API_KEY:  {msg2} </h1>
      <h1> process.env.REACT_APP_whatever_message:  {msg3}</h1>
      <h1> Secret Message: {secret}</h1>
    </div>
  );
}

export default App;
