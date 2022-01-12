import React, {Component} from 'react'
import Header from './Header'
import Button from './Button'
import Footer from './Footer'
import Display from './Display'

class Container extends Component{
    render(){
        return(
            <div>
                {this.props.children}
                <h1> Container</h1>
                <Button />
                <Display />
                <Footer />


            </div>
        )
    }
}
export default Container