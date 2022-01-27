import React, {useEffect, useState} from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'

const Detail = () => {
    const {id} = useParams()
    const [job, setJob] = useState(null)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/jobs/"+id)
            .then(res=>setJob(res.data))
            .catch(err=>console.log(err))
    },[])


    return (
        <div>
            <h1> Job Details</h1>
            {
                job&&
                <>
                    <h3> Title: {job.title}</h3>
                    <h3> Salary: {job.salary}</h3>
                    <h3> Company: {job.company}</h3>
                    <h3> Remote: {job.remote?"Yes": "No"}</h3>
                </>
            }

        </div>
    )
}

export default Detail


// get id from params params   (import, destructure params)
// use that id to grab info from axios axios
// when loaded useEffect+ useState