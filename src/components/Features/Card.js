import React from 'react'

const Card = (props) => {
  return (
        <>
            <div className='box btn_shadow'>
              {/* <img src={props.image} alt='' /> */}
              {/* <h2>{props.title}</h2>
              <p>{props.desc}</p> */}
              <p>
              <span>HOW IT STARTED</span> - <br /> <p> A group of friends in the same field have expressed a desire to start their own business. 
              One person made the suggestion to start an ESO firm, which inspired everyone to work together to start the business.
              The outcome is this company. 
              Our motivation stems from our ardor for our talent and the desire to craft something remarkable.We work as our clients extended team to reduce their workload.</p>
              <br />
              <span>ABOUT/OUR TEAM</span> - <br /> <p> Our team is comprised of a diverse group including design engineers, graphic designers, and a range of experience levels.
               Some members have over five years of experience in signage, others bring extensive freelancing experience, 
               and we also have highly skilled newer members. 
               Our team represents a wealth of expertise and talent.</p>
              <br />
              <span>VISION</span> - <br /> <p> Our goal is to be recognized as the top ESO organization in India.</p>
              <br />
              <span>MISSION</span> - <br /> <p> 1 Our aim is to provide Indian engineers and designers with the opportunities that they are worthy of.
               2 Perfection On First try</p>
              </p>
              <a href=''>
                <i class='fas fa-arrow-right'></i>
              </a>
            </div>
        </>
  )
}

export default Card