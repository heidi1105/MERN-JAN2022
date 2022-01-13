import React, {Component} from 'react'
//1.  direct import
import './../styles/styles.css'

//3. css module
import styles from './Styling.module.css'


//2.1  inline style
const inlineStyleObj ={
    color: 'white',
    backgroundColor: 'blue'
}
class Styling extends Component{

    render(){
        //2.2  inline style
        const inlineStyleObj2 ={
            color: 'white',
            backgroundColor: this.props.color
        }


        return(
            <div>
                <h1> 3 styling ways!!!</h1>
                <div className='directImport'>Direct Import</div>
                <div style={inlineStyleObj}>Inline Styles</div>
                <div style={inlineStyleObj2}>Inline Styles2</div>
                <div className={`${styles.cssStylingObj} ${styles.cssStylingObj2}`} >CSS Modules</div>

                <div style={inlineStyleObj2} className={styles.cssStylingObj2}>Inline Styles2</div>

            </div>
        )
    }
}
export default Styling