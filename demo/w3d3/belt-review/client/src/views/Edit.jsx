import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useHistory, useParams } from 'react-router-dom'

const Edit = () => {
    const history = useHistory()
    const { id } = useParams()
    const [title, setTitle] = useState("")
    const [salary, setSalary] = useState(0)
    const [company, setCompany] = useState("")
    const [remote, setRemote] = useState(false)
    const [errArray, setErrArray] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/jobs/" + id)
            .then(res => {
                setTitle(res.data.title)
                setSalary(res.data.salary)
                setCompany(res.data.company)
                setRemote(res.data.remote)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/jobs/${id}`, { title, salary, company, remote })
            .then(res => {
                history.push("/")
            })
            .catch(err => {
                const errResponse = err.response.data.errors //errReponse: obj with keys
                let tempArr = []
                for (const key of Object.keys(errResponse)) {
                    tempArr.push(errResponse[key].message)
                }
                setErrArray(tempArr)
            })
    }

    const deleteHandler = () =>{
        axios.delete(`http://localhost:8000/api/jobs/${id}`)
            .then(res=>history.push("/"))
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <h1> Edit the job</h1>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label> Title </label>
                    <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label> Company </label>
                    <input type="text" name="company" value={company} onChange={e => setCompany(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label> Salary </label>
                    <input type="number" name="salary" value={salary} onChange={e => setSalary(e.target.value)} className="form-control" />
                </div>

                <div className="form-check">
                    <input type="checkbox" name="remote" checked={remote} onChange={e => setRemote(!remote)} className="form-check-input" />
                    <label className="form-check-label" >
                        Remote
                    </label>
                </div>
                <button type="submit" className='btn btn-primary'> Submit</button>
                
                <button type="button" className='btn btn-secondary' onClick={e=>history.push("/")} > Cancel</button>
                <button type="button" className='btn btn-danger' onClick={deleteHandler} >Delete</button>
            </form>
            {
                errArray.map((err, i) => (
                    <p key={i}> {err}</p>
                ))
            }
        </div>
    )
}

export default Edit

// get id from params params   (import, destructure params)
// use that id to grab info from axios axios
// when loaded useEffect+ useState

// form (onSubmit, onChange)
// send info to backend
// redirect: useHistory 
// successful : redirect
// fail: get errors

