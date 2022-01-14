import React, { useState } from 'react'
import CombinedDisplay from './CombinedDisplay'

const CombinedForm = () => {
    const [formState, setFormState] = useState({
        username: "",
        email: "",
        password: "",
        hasPet: undefined,
        advertising: true
    })

    const [errForm, setErrForm] = useState({})
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    const changeHandler = (e) => {
        let { name, value } = e.target
        if (name === "advertising") {
            value = !formState.advertising
        }
        if (name === "hasPet") {
            value = JSON.parse(value)
        }
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };

    const formMessageTernary =() =>{
        return hasBeenSubmitted?"Thank you for submitting the form!2":"Welcome, please submit the form2"
    }


    const usernameCheck =() =>{
        return errForm.username&&"submit username error in a function"
    }    


    const submitHandler = (e) => {
        e.preventDefault()
        if(!errHandler()){
            console.log(formState)
            clearForm()
            setHasBeenSubmitted(true)
        }
    }

    const clearForm = () => {
        setFormState({
            username: "",
            email: "",
            password: "",
            hasPet: undefined,
            advertising: true
        })
    }

    const errHandler = () => {
        let errCheck = {}
        if (formState.username.length < 2) {
            errCheck.username = true
        } else {
            errCheck.username = false
        }

        formState.password.length < 2 ? (errCheck.password = true) : errCheck.password = false
        formState.email.length < 2 ? (errCheck.email = true) : errCheck.email = false
        formState.hasPet === undefined ? (errCheck.hasPet = true) : errCheck.hasPet = false
        typeof formState.advertising === "boolean" ? (errCheck.advertising = true) : errCheck.advertising = false
        setErrForm(errCheck)
        return (errCheck.username || errCheck.password ||errCheck.email) // if any of the items is true, return true
    }

    return (
        <fieldset>
            <legend> CombinedForm.jsx</legend>
            {formMessage()}
            {formMessageTernary()}
            <form onSubmit={submitHandler}>
                <div>
                    <label> Username</label>
                    <p><input name="username" type="text" onChange={changeHandler} value={formState.username} /></p>
                </div>

                <div>
                    <label> email</label>
                    <p><input name="email" type="text" onChange={changeHandler} value={formState.email} /></p>
                </div>

                <div>
                    <label> Password</label>
                    <p><input name="password" type="password" onChange={changeHandler} value={formState.password} /></p>
                </div>
                <div>
                    <label> Do you have any pets?</label>
                    <select name="hasPet" onChange={changeHandler}>
                        <option hidden></option>
                        <option value={true}> Yes</option>
                        <option value={false}> No</option>
                    </select>
                </div>

                <label> Sign up for advertising messages?</label>
                <input name="advertising" type="checkbox" checked={formState.advertising} onChange={changeHandler} />


                <button> Submit </button>

            </form>
            {formState.username.length < 3 && (<p style={{ color: 'red' }}> Must enter username</p>)}
            {formState.password.length < 3 && (<p style={{ color: 'red' }}> Must enter password</p>)}


            {errForm.username && (<p style={{ color: 'blue' }}> Submit username error</p>)}
            {errForm.password && (<p style={{ color: 'blue' }}> Submit password error</p>)}
            {errForm.email && (<p style={{ color: 'blue' }}> Submit email error</p>)}

            {usernameCheck()}
            <CombinedDisplay formState={formState} />

        </fieldset>
    )
}

export default CombinedForm
