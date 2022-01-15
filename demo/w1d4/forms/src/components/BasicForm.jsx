import React, { useState } from 'react'
import BasicDisplay from './BasicDisplay'

const BasicForm = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [submitError, setSubmitError] = useState("")
    const [hasPet, setHasPet] = useState()
    const [advertising, setAdvertising] = useState(true)

    const submitHandler = (e) => {
        e.preventDefault()

        //username.length < 3 --> error
        if (username.length < 3 || password.length < 3 || email.length < 3) {
            // if(error1 condition or error2 condition or error3 condition) 
            // if any condition is true, it will return true.
            // then... cannot submit
            setSubmitError("You cannot submit an incomplete form. ")
        } 
        if(username.length>=3 && password.length >= 3 && email.length >= 3){
            console.log("connect to the database and submit the form")
            console.log({ username, email, password, hasPet, advertising })
            // if(no error condition  && no error condition && no error condition)
            // if all condtions are correct, will return true
            // if any condition doesn't fit, will return false
        }
        //real life: only need one if/else


    }

    // true || false || false --> true  (any true in || returns true)
    // true && true --> true
    // 

    return (
        <fieldset>
            <legend> BasicForm.jsx</legend>
            <form onSubmit={submitHandler}>
                <div>
                    <label> Username</label>
                    {username.length < 3 && (<p style={{ color: 'red' }}> Must enter username</p>)}
                    <p><input name="username" type="text" onChange={(e) => setUsername(e.target.value)} value={username} /></p>
                </div>

                <div>
                    <label> email</label>
                    {email.length < 3 && (<p style={{ color: 'red' }}> Must enter email</p>)}
                    <p><input name="email" type="text" onChange={(e) => setEmail(e.target.value)} value={email} /></p>
                </div>

                <div>
                    <label> Password</label>
                    {password.length < 3 ? (<p style={{ color: 'red' }}> Must enter password</p>) : <p> this is else</p>}
                    <p><input name="password" type="password" onChange={(e) => setPassword(e.target.value)} value={password} /></p>
                </div>
                <div>
                    <label> Do you have any pets?</label>
                    <select onChange={e => setHasPet(e.target.value)}>
                        <option hidden></option>
                        <option value={true}> Yes</option>
                        <option value={false}> No</option>
                    </select>
                </div>

                <label> Sign up for advertising messages?</label>
                <input type="checkbox" checked={advertising} onChange={e => setAdvertising(!advertising)} />


                <button disabled={username.length < 3 || password.length < 3 || email.length < 3}> Submit </button>
                <p style={{ color: 'red' }}>{submitError}</p>
            </form>

            <BasicDisplay username={username} password={password} />

        </fieldset>
    )
}

export default BasicForm


