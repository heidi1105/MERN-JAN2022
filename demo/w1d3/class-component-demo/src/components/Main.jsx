import React, {Component} from 'react'

class Main extends Component{
    render(){
        const {firstname, lastname, weight, abilities } = this.props

        return(
            <div>
                <h1> Hello! {firstname} {lastname}</h1>
                <ul>
                    <li> Weight: {weight} pounds</li>
                    <li> {abilities}</li>

                </ul>
            </div>
        )
    }
}
export default Main
