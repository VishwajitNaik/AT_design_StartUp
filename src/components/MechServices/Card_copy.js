import React, { useState } from 'react'

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
          <img src={props.image} alt='' onClick={toggleModal} />
        </div>
        <div className='category d_flex'>
          <span onClick={toggleModal}>{props.category}</span>
          <label>
            <i className='far fa-heart'></i> {props.totalLike}
          </label>
        </div>
        <div className='title'>
          <a href='#popup' className='arrow' onClick={toggleModal}>
            <i class='fas fa-arrow-right'></i>
          </a>
        </div>
      </div>

    {/* Popup box */}
    {modal && (
      
      <div className='modal modal-blog'>
        <div onClick={toggleModal} className='overlay'></div>
        
        <div className='modal-content'>
          <div className='modal-img left'>
            <img src={props.image} alt='' />
            <div><h1>Image</h1></div>
          </div>
          <div className='modal-text right'>
          <div className='modal-text right'>
              <span>Featured - Design</span>
              <p>{props.title}</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>
              <p>Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>
              <div className='button f_flex mtop'>
                <button className='btn_shadow'>
                  LIKE THIS <i class='far fa-thumbs-up'></i>
                </button>
                <button className='btn_shadow'>
                  VIEW PROJECT<i class='fas fa-chevron-right'></i>
                </button>
              </div>
              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i class='fas fa-times'></i>
              </button>
            </div>

            <button className='close-modal btn_shadow' onClick={toggleModal}>
              <i class='fas fa-times'></i>
            </button>
            {/*---------Leave Message----------  */}
          </div>
        </div>
      </div>
    )}
  </>
  )
}

export default Card