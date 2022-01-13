import React, {useState} from 'react'

const FunctionalComponent = (props)=>{
    const {petname} = props
    const [count, setCount] = useState(0)
    // [ a, b]  --> a is the state variable, b is the function to set state
    const [age, setAge] = useState(props.age)

    const alertMessage = (msg) =>{
        alert(msg)
    }

    const addCountHandler = () =>{
        setCount(count+1)
    }

    return(
        <div>
            <h1> Functional Component</h1>
            <h3> props.petname: {props.petname}</h3>
            <h3> after destructuring - petname: {petname}</h3>

            <button onClick={()=>alertMessage("new message ")}> alert button</button>
            <button onClick={addCountHandler} > Add count</button>
            <button onClick={()=> setCount(count-1)} > Minus count</button>
            <button onClick={()=> setAge(age+1)}> Add age</button>
            <p> count: {count}</p>
            <p> original props age: {props.age}</p>
            <p> Age: {age} </p>
        </div>
    )
}
export default FunctionalComponent