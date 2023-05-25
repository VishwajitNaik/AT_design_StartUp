import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ViewClient = () => {
  const [clients, setClients] = useState([])

  useEffect(()=>{
    const fetchAllClients = async()=>{
        try{
            const res = await axios.get("http://localhost:4000/view")
            console.log(res);
            setClients(res.data)
        }catch(err){
            console.log(err);
        }
    }
    fetchAllClients()
  },[])
    return (
        <>
        <h1>Clients</h1>
    <div>
        {
            clients.map(client =>(
                <div>
                
                    <p>{client.name}</p>
                    <p>{client.address}</p>
                    <p>{client.email}</p>
                    <p>{client.phone}</p>
                    <p>{client.sex}</p>
                    <p>{client.dob}</p>
                    <p>{client.age}</p>
                    <p>{client.college}</p>
                    <p>{client.pass}</p>
                    <p>{client.percent}</p>
                    <p>{client.company}</p>
                    <p>{client.exp}</p>
                </div>
            ))
        }
    </div>
    <button>
        <Link to="/viewClients">Add</Link>
    </button>
    </>
  )
}

export default ViewClient