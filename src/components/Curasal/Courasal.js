import React, { Component } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css";
import Card from './Card';
import data from './FeaturesAPI'
import './Coursal.css'

export class Courasal extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    return (
      <div id='caurasal' className='btn_shadow'>
        <h1>Hey I am Vishwajit</h1>
        <Slider {...settings}>
            {data.map((val, index) => {
              return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
            })}
        </Slider>
      </div>
    )
  }
}

export default Courasal
