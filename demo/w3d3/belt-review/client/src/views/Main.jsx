import React, {useEffect, useState} from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
import DeleteButton from "../components/DeleteButton"

const Main = () => {
    const [jobs, setJobs] = useState(null)
    const [refresh, setRefresh] = useState(false)

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/jobs/`)
            .then(res => setJobs(res.data))
            .catch(err=> console.log(err))
    },[refresh])

    const deleteHandler = (id)=>{
        axios.delete(`http://localhost:8000/api/jobs/${id}`)
            .then(res=>{
                setRefresh(!refresh)
            })
            .catch(err=> console.log(err))
    }

    return (
        <div>
            <Link to="/new"> Add a job</Link>
            <h1> All Jobs</h1>
            <table className="table">
                <thead>
                    <tr>
                        <td>Title </td>
                        <td>Company </td>
                        <td>Salary </td>
                        <td>Remote </td>    
                        <td colSpan={2}>Actions </td>                 
                    </tr>
                </thead>
                <tbody>
                    {
                        jobs&&
                        jobs.map((job, i)=>(
                            <tr key={i}>
                                <td><Link to={`/jobs/${job._id}`}>{job.title} </Link></td>
                                <td>{job.company}</td>
                                <td>{job.salary}</td>
                                <td>{job.remote?"Yes":"No"}</td>
                                <td><Link to={`/edit/${job._id}`} className="btn btn-success">Edit </Link></td>
                                <td>
                                    <button type="button" className='btn btn-danger' onClick={e=>deleteHandler(job._id)} >Delete</button>
                                </td>
                            </tr>
                        ))   
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Main


// grab info from backend when loaded
// loaded : useEffect
// backend: axios
// grab info: state

