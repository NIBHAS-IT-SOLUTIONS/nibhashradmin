import React, { useEffect, useState } from 'react'
import './Applications.css'
import axios from 'axios'
import { baseURL } from '../Constants/Constants'
import { Link } from 'react-router-dom'


function Applications() {

    const [applications,setApplications]=useState([])

    const getApplications=async ()=>{

        var appliedjobs=await axios.get(`${baseURL}appliedvacancies`)
        console.log(appliedjobs.data);
        setApplications(appliedjobs.data)
    }
    useEffect(()=>{
        getApplications()
    },[])


    return (
        <>
        {
            applications.map((apps,index)=>{

                return(

                    <div key={apps._id} className="asinglecard-container">
                    <div className="asingle-card ">
                        <div className="asinglecard-title">
                            <h3><i class="fa fa-user" aria-hidden="true"></i> Name : {apps.name} </h3>
                        </div>

                        <div class="flex-container">
                        <div className="asingle-cardcontent ">

<ul>                           
    <h3>Candidate Details</h3>
    <li><i class="fa fa-envelope" aria-hidden="true"></i>Email : {apps.email} </li>
    <li><i class="fa fa-phone" aria-hidden="true"></i>Phone : 8606199403 </li><br />
    <li>
    </li>
    

</ul>



</div>
<div className="asingle-cardcontent">

<ul>                           
    <h3>Job Details</h3>
    <li> Job : {apps.jobtitle} {apps.department} </li>
    <li> Location : {apps.Location} </li>
    <li> Applied Date :{apps.applieddate}
        </li>
    

</ul>



</div>
</div>

<Link  to={`${baseURL}${apps.path}`} target="_blank" rel="noopener noreferrer">
            <p>{apps.name}_resume</p>
            </Link> 
                        

                    </div>
                </div>
                    
            
                )
            })
        }
    
    </>
  )
}

export default Applications