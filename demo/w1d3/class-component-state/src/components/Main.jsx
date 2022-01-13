// import packages
import React, {Component} from 'react'
import Button from './Button'
import Styling from './Styling'

// create the class
class Main extends Component{
    render(){
        const pepper = {petname: "Pepper",type: "cat",age: 13,abilities: ["eat", "sleep", "scratch", "meow"]}

        return(
            <>
            <h1>Hello, {this.props.firstname}</h1>
            <Button pet={pepper}/>

            <Styling color="darkgreen"/>
            </>

        )        
    }
}
export default Main
// export the module