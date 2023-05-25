import React from 'react'
import "./Home.css"
import hero from "../pic/hero.png"
import skill1 from "../pic/skill2.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import { Typewriter } from 'react-simple-typewriter'
import curasalImg from '../Testimonial/Testimonial'
import Features from '../../components/Features/Features';
import Portfolio from '../../components/Portfolio/Portfolio'; 
import { Resume } from '../../components/Resume/Resume';
import Testimonial from '../../components/Testimonial/Testimonial';
import Blog from '../../components/Blog/Blog';
import Contact from '../../components/Contact/Contact'
import AboutUs from '../../components/About Us/AboutUs';
// import Courasal from './components/About Us/Courasal'
import Curasal from '../../components/Curasal/Courasal'
import { Link } from 'react-router-dom'
import Slider from '../../components/Slider/Slider'

const Home = () => {
  // const slides = [
  //   { url: "https://picsum.photos/200/300", title: "beach" },
  //   { url: "https://picsum.photos/seed/picsum/200/300", title: "boat" },
  //   { url: "https://picsum.photos/200/300", title: "forest" },
  //   { url: "https://picsum.photos/seed/picsum/200/300", title: "city" },
  //   { url: "https://picsum.photos/200/300", title: "italy" },
  // ];
  // const containerStyles = {
  //   marginTop: "-10vw", 
  //   width: "99vw",
  //   height: "500px",
  // };
  return (
    <>
    <Slider />
      <section className='hero' id='home'>
        <div className=" f_flex top">
          <div className="left top">
            {/* <h3>WELCOME TO MY WORLD</h3>
            <h1>
              HI I'm <span>Create</span>
            </h1>
            <h2>
              a 
              <span>
              <Typewriter words={['Portfileo StartUp.. ', "Desihning"]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span> */}
            {/* </h2> */}

            {/* <div style={containerStyles}>
              <Slider slides={slides} />
            </div> */}

              <div className="hero_btn" style={{marginTop: "-10vw"}}>
                <div className="col_1">
                  <h4>FIND WITH </h4>
                  <div className='button'>
                  <button className="btn_shadow">
                      <i className='fab fa-facebook-f'></i>
                    </button>
                    <button className="btn_shadow">
                      <i className='fab fa-instagram'><a href=""></a></i>
                    </button>
                    <button className="btn_shadow">
                     <Link to={"https://www.linkedin.com/in/amit-t-657562268"}> <i className='fab fa-linkedin-in'></i></Link>
                    </button>
                  </div>
                </div>
                {/* <div className="col_1">
                  <h4>BEST SKILL On</h4>
                  <button className="btn_shadow">
                      <img src={skill1} alt="" />
                    </button>
                    <button className="btn_shadow">
                      <img src={skill2} alt="" />
                    </button>
                    <button className="btn_shadow">
                      <img src={skill3} alt="" />
                    </button>
                </div> */}
              </div>

          </div>
          {/* <div className="right">
            <div className="right_img">
              <img src={hero} alt="" />
            </div>
          </div> */}
        </div>
      </section>

      <AboutUs />
      <Portfolio />
      {/* <Resume /> */}
      {/* <Curasal /> */}
      <Blog />
      <Contact />
      
    </>
  )
}

export default Home