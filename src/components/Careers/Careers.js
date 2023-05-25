import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import "./careers.css"
import {addUser} from './api'

const Careers = () => {
    const [client, setClient] = useState({
      name:"",
      address:"",
      email:"",
      phone:"",
      sex:"",
      dob:"",
      age:"",
      college:"",
      pass:"",
      percent:"",
      company:"",
      exp:"",
    });

    const navigate = useNavigate()

    const handleChange = e => {
      setClient({...client, [e.target.name] : e.target.value })
      
    }

    console.log(client);

    const handleClick = async () => {
      await addUser(client);
  }

  return (
    <>
        {/* <Link to={'/'}><button className='home-btn Portfolio-btn'>Start Free triel</button></Link> */}
        <div className='right box_shodow position '>
              <form>
              <span className='sz'>  Personal Info </span>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>Applicant name</span>
                    <input type='text' name='name' onChange={handleChange} />
                  </div>
                  <div className='input row'>
                    <span>Address</span>
                    <input type='text' name='address' onChange={handleChange} />
                  </div>
                </div>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>email</span>
                    <input type='email' name='email' onChange={handleChange} />
                  </div>
                  <div className='input row'>
                    <span> phone </span>
                    <input type='number' name='phone' onChange={handleChange} />
                  </div>
                  <div className='input row'>
                    <span> sex </span>
                    <input type='text' name='sex'  />
                  </div>
                </div>

                <span className='sz'>Higher Qualification </span>
                <div className='input'>
                  <span>dob </span>
                  <input type='email' name='dob' onChange={handleChange} />
                </div>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>age</span>
                    <input type='number' name='age' onChange={handleChange} />
                  </div>
                  <div className='input row'>
                    <span> college </span>
                    <input type='text' name='college' onChange={handleChange} />
                  </div>
                </div>
                <div className='input'>
                  <span>pass </span>
                  <input type='text' name='pass' onChange={handleChange} />
                </div>
                <div className='input'>
                  <span>percent </span>
                  <input type='number' name='percent' onChange={handleChange} />
                </div>
                <div className='input'>
                  <span>company </span>
                  <input type='text' name='company' onChange={handleChange} />
                </div>
                <div className='input'>
                  <span>exp </span>
                  <input type='text' name='exp' onChange={handleChange} />
                </div>
                <button onClick={handleClick}>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
    </>
  )
}

export default Careers