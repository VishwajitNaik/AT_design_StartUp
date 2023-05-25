import React, { useState } from 'react'
import './MechService.css'
import Card from './Card'
import mech_data from './Mechanical'


const MechService = () => {
  return (
    <>
            <div className='content grid'>
            {mech_data.map((value, index) => {
              return <Card key={index} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title} />
            })}
          </div>
    </>
  )
}

export default MechService