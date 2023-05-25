import React from 'react'
import './Signagecareers.css'
import Card from './Card'
import sign_data from './Mechanical'

const Signagecareers = () => {
  return (
    <>
    <header className='header'>
        <div className="container d_flex">
            <div className="navlink">
            <div className='content grid'>
            { sign_data.map((value, index) => {
              return <Card key={index} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title} />
            })}
          </div>
            </div>
        </div>
    </header> 

    </>
  )
}

export default Signagecareers