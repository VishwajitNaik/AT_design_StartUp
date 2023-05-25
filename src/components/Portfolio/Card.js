import React, { useState } from "react"
import { Link } from "react-router-dom"


const Card = (props) => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  return (
    <>
      <div className='box btn_shadow '>
        <div className='img'>
        <img src={props.image} alt="" />
        </div>
        <div className='category d_flex'>
          <label>
            <i className='far fa-heart'></i> {props.totalLike}
          </label>
        </div>
        <div className='title'>
          <Link to={"/Mechservices"}><a href='#popup'>
            <i class='fas fa-arrow-right'></i>
          </a>
          Mechanical
          </Link>
        </div>
      </div>

      {/* Popup box */}
     
    </>
  )
}

export default Card
