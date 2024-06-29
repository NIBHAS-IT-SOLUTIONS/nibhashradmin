import React, { useEffect, useState } from 'react'
import { baseURL } from '../../Constants/Constants';
import axios from 'axios';
//import './Viewvacancy.css'
import { Link } from 'react-router-dom';
import DataTable from 'datatables.net-dt';
import { useRef } from 'react';
import $ from 'jquery';

import './Viewvacancy.css'

 


function Viewvacancy() {


    const [vacancies,setvacancies]=useState([])
   
    const tableRef = useRef(null);
    const initializedRef = useRef(false);
    
    
    const getvacancies = async () => {
        const jobs = await axios.get(`${baseURL}getvacancies/`)
        console.log(jobs.data.vacancies);
        setvacancies(jobs.data.vacancies)
        
    }

  //   getvacancies()
  //   let table = new DataTable('#myTable', {
  //     responsive: true
  // });

  

  useEffect(() => {
    getvacancies()
   
    
  }, []);



    const deletevacancy=async(id)=>{
      try{
        await axios.delete(`${baseURL}deletevacancy/${id}`)
        getvacancies()
      }
      catch(err){
  
      }
    }

   


  return (
    <>
   
    <h1>Viewvacancy</h1>
    <table  >
    <thead>
  <tr>
    <th>Job title</th>
    <th>Department</th>
    <th>Location</th>
    <th>Experience</th>
    <th>Qualification</th>
    <th>Skills</th>
    <th>gender</th>
    <th>Salary</th>
    <th>Timing</th>
    <th>Description</th>
    <th>Post Date</th>
    <th>Action</th>
    </tr>
  </thead>
    <tbody>
    {
    
    vacancies.map((vacancy)=>{
     return(
        <tr key={vacancy._id}>
          <td>{vacancy.jobtitle}</td>
          <td>{vacancy.department}</td>
          <td>{vacancy.location}</td>
          <td>{vacancy.experience}</td>
          <td>{vacancy.qualification}</td>
          <td>{vacancy.skills}</td>
          <td>{vacancy.gender}</td>
          <td>{vacancy.salary}</td>
          <td>{vacancy.timing}</td>
          <td>{vacancy.description}</td>
          <td>{vacancy.postdate}</td>
          <td>
          <Link id='linkk' to={`/addvacancy/${vacancy._id}`}>Edit</Link> &nbsp;&nbsp;
          <Link id='linkk' onClick={()=>{deletevacancy(vacancy._id)}} >Delete</Link> 
          </td>

    </tr>
     )
    })
  }
    </tbody>
    </table>
    
{/* <table id="myTable" class="display">
<thead>
  <tr>
    <th>Job title</th>
    <th>Department</th>
    <th>Location</th>
    <th>Experience</th>
    <th>Qualification</th>
    <th>Skills</th>
    <th>gender</th>
    <th>Salary</th>
    <th>Timing</th>
    <th>Description</th>
    <th>Post Date</th>
    <th>Action</th>
    </tr>
  </thead>
    <tbody>
    {
    
    vacancies.map((vacancy)=>{
     return(
        <tr key={vacancy._id}>
          <td>{vacancy.jobtitle}</td>
          <td>{vacancy.department}</td>
          <td>{vacancy.location}</td>
          <td>{vacancy.experience}</td>
          <td>{vacancy.qualification}</td>
          <td>{vacancy.skills}</td>
          <td>{vacancy.gender}</td>
          <td>{vacancy.salary}</td>
          <td>{vacancy.timing}</td>
          <td>{vacancy.description}</td>
          <td>{vacancy.postdate}</td>
          <td>
          <Link to={`/addvacancy/${vacancy._id}`}>Edit</Link> &nbsp;&nbsp;
          <Link onClick={()=>{deletevacancy(vacancy._id)}} >Delete</Link> 
          </td>

    </tr>
     )
    })
  }
    </tbody>
</table> */}

    </>
  )
}

export default Viewvacancy