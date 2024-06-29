import React, { useEffect, useState } from 'react'
import './Alljobs.css'
import axios from 'axios'
import { baseURL } from '../Constants/Constants'
import { Link } from 'react-router-dom'


function Alljobs() {

    const [jobs, setjobs] = useState([])
    const getjobs = async () => {
        const jobs = await axios.get(`${baseURL}getjobs/`)
        console.log(jobs.data.alljobs);
        setjobs(jobs.data.alljobs)
    }

    useEffect(() => {
        getjobs()
    }, [])

    const handleDelete = async (userid) => {

        const response = await axios.delete(`${baseURL}deletejobs/?id=${userid}`)
        window.alert(response.data.message)
        getjobs()

    }

    return (
        <>


<div class="card-deck mx-5 my-5">
  <div class="card">
    <Link to="/addvacancy">
   
    <div class="card-body">
      <h2 className="card-title">Add vacancies</h2>
      
    </div>
    </Link>
  </div>
  <div class="card">
  <Link className='links' to="/viewvacancies">
    
    <div class="card-body">
      <h5 className="card-title">View vacancies</h5>
      
    </div>
    </Link>
  </div>
  <div class="card">
    <Link to="/appliedjobs">
    
    <div class="card-body">
      <h5 className="card-title">Applied Candidates</h5>
      
    </div>
    </Link>
  </div>
</div>

            {




                // jobs.map((job, index) => {
                //     return (
                //         <div className="singlecard-container">
                //             <div className="single-card">
                //                 <div className="singlecard-title">
                //                     <h1>{job.jobtitle}</h1>
                //                 </div>




                //                 <div className="single-cardcontent">

                //                     <ul>


                //                         <li>
                //                             <li><i className='date' class="fa fa-calendar" aria-hidden="true"></i> Date added : {job.postdate} </li>
                //                             <i class="fa fa-id-badge" aria-hidden="true"></i> Employer Name : {job.employerName}
                //                         </li>
                //                         <li><i class="fa fa-briefcase" aria-hidden="true"></i> Department : {job.department} </li>
                //                         <li><i class="fa fa-user"></i> Gender : {job.gender} </li>
                //                         <li><i class="fa fa-map-marker" aria-hidden="true"></i> Location : {job.location} </li>
                //                         <li><i class="fa fa-inr" aria-hidden="true"></i> Salary : {job.salary} </li>
                //                         <li><i class="fa fa-calendar-check" aria-hidden="true"></i> Experience : {job.experience}</li>
                //                         <li><i class="fa fa-people-arrows"></i> Age limit : {job.agelimit} </li>
                //                         <li><i class="fa fa-thin fa-graduation-cap"></i> Qualification : {job.qualification} </li>
                //                         <li><i class="fa fa-thin fa-wand-magic-sparkles"></i> Skills : {job.skills} </li>
                //                         <li><i class="fa fa-sharp fa-thin fa-clipboard"></i> Description : {job.description} </li>


                //                         <button onClick={() => handleDelete(job._id)} className='alljobbutton'>Delete</button>

                //                     </ul>



                //                 </div>

                //             </div>
                //         </div>
                //     )
                // })

            }

        </>
    )
}

export default Alljobs