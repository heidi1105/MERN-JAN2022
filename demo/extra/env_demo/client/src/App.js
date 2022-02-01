import react, {useState, useEffect} from "react"
import axios from "axios"

function App() {
  const [secret, setSecret] = useState("")

  useEffect(()=>{
    axios.get(`http://localhost:8000/api`)
      .then(res => setSecret(res.data.message))
      .catch()
  },[])

  return (
    <div className="App">
      <h1> Secret Message: {secret}</h1>
    </div>
  );
}

export default App;
