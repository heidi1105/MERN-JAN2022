// import dependencies
import React , {Component} from 'react'

// create class - render() + return)
class ClassComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            newAge: props.age
        }
    }

    alertMessage = (msg) =>{
        alert(msg)
    }

    clickHandler =() =>{
        this.setState({
            count: this.state.count+1
        })
    }

    render(){
        return(
            <div>
                <h1> Class Component</h1>
                <h3> this.props.petname: {this.props.petname}</h3>
            
                <button onClick={()=>this.alertMessage("new message ")}> alert button</button>
                <button onClick={this.clickHandler}> Click Handler</button>
                <p> Count: {this.state.count} </p>
                <p> newAge: {this.state.newAge} </p>
            
            </div>
        )
    }
}
export default ClassComponent

// export the module