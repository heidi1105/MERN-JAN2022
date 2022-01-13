// import packages
import React, {Component} from 'react'

// create the class
class Button extends Component{
    constructor(props){
        super(props);
        this.state={
            count: 0,
            newAge: props.pet.age
        }
    }

    clickHandler = () =>{
        alert("Ouch from click Handler")
    }

    countHandler =() =>{
        this.setState({
            count: this.state.count +1
            // Changing state --> use setState
            // reading state --> use this.state.count
        })
    }

    ageHandler = ()=>{
        this.setState({
            newAge: this.state.newAge+1
        })
    }

    render(){
        const {pet} = this.props

        return(
            <div>
                <button className="btn btn-primary" onClick={()=>alert("Ouch!")}> Click me!</button>
                <button onClick={this.clickHandler}> Click to handler</button>
                <button onClick={this.countHandler}> Change Count State</button>
                <h1> Count: {this.state.count}</h1>

                <h1> {pet.petname}'s Birthday</h1>
                <h3> Age: {this.state.newAge}</h3>
                <button onClick={this.ageHandler}> Age up!</button>

            </div>
        )        
    }
}
export default Button
// export the module