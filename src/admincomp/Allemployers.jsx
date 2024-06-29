import React, { useEffect, useState } from 'react'
import './Allemployers.css'
import axios from 'axios'
import { baseURL } from '../Constants/Constants'


function Allemployers() {

  const [jobs, setjobs] = useState([])
    const getjobs = async () => {
        const jobs = await axios.get(`${baseURL}getemployers/`)
        console.log(jobs.data);
        setjobs(jobs.data.allemployers)
    }

    useEffect(() => {
        getjobs()
    }, [])


  return (
    <>
    {
    jobs.map((job, index) => {
      return(
  <div className="allemployercard">
<div className="employercard">
  <ul>
    <li>Company name : {job.companyname}</li>
      <li>Company type : {job.companytype}</li>
      <li>Phone number : {job.phone}</li>
      <li>Mail id : {job.email}</li>
      <li>Address : {job.address}</li>
  </ul>
  <button className='employercardbutton'>Delete</button>
</div>
  </div>
      )
    })
    }
    </>
  )
}

export default Allemployers